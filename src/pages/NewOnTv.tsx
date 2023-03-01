import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { graphql } from "../gql";
import Pagination from 'react-bootstrap/Pagination';
import { DateTime } from 'luxon';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import { Auth } from 'aws-amplify';
import { getTokenFromSession } from '../common/helpers/session';
import { Modal } from 'react-bootstrap';


const NEWONTV = graphql(`
query NewOnTV($input: NewOnTVInput!) {
    newOnTV(input: $input) {
      count
      schedules {
        id
        title
        startAt
        channel {
            title
            logoURL
          }
        asset {
          imageURL
          number
          series {
            imageURL
          }
          season {
            imageURL
            number
          }
        }
      }
    }
  }
`)


const PAGE_ITEMS = 15

const today = DateTime.utc();
function getDateStringDay(scheduleDateString: string) {
    const scheduleDate = DateTime.fromISO(scheduleDateString);
    if (today.toISODate() === scheduleDate.toISODate()) {
        return 'Today';
    } else {
        return scheduleDate.toFormat('EEE dd MMM');
    }
}
const jwt_token = Auth.currentSession().then(data => console.log("JWT", data.getAccessToken().getJwtToken()));


function getDateStringTime(scheduleDateString: string) {
    const scheduleDate = DateTime.fromISO(scheduleDateString);
    if (today.toISODate() === scheduleDate.toISODate()) {
        return scheduleDate.toFormat('h:mma').toLowerCase();
    } else {
        return scheduleDate.toFormat('');
    }
}


export default function NewOnTv() {
    const [activePage, setActivePage] = useState(0)
    const [spin, setSpin] = useState(false)

    const { loading, error, data } = useQuery(NEWONTV, {
        context: {
            headers: {
                'Authorization': getTokenFromSession(),
                'Content-Type': 'application/json'
            }
        },
        variables: {
            input: {
                pagination: {
                    skip: activePage * PAGE_ITEMS,
                    take: PAGE_ITEMS,
                }
            }
        }
    })
    useEffect(() => {
        setSpin(true)
    }, [loading])
    // console.log('NewOnTV_token',getTokenFromSession())
    // console.log('dataaa',data?.newOnTV.schedules)

    const totalCount = data?.newOnTV.count
    const totalPagination = Math.ceil(totalCount! / PAGE_ITEMS)
    let pgCount = totalPagination - 5
    let pageNumber = activePage > 0 ? activePage > 1 ? activePage - 2 : activePage : 0
    let floop = totalPagination < 5 ? 5 : activePage > 1 ? activePage + 3 : activePage + 5
    let firstPage = totalPagination - totalPagination
    let lastPage = totalPagination - 1
    if ((pgCount <= activePage && activePage < totalPagination) || (floop >= totalPagination)) {
        pageNumber = pgCount
        floop = totalPagination
    }
    const renderPageItems = () => {
        const items = [];
        for (let page = pageNumber; page < floop; page++) {
            items.push(
                <Pagination.Item
                    key={page}
                    active={page === activePage}
                    onClick={() => setActivePage(page)}
                    className="tv__pagination"
                >
                    {page + 1}
                </Pagination.Item>
            );
            if (page === floop) {
                items.push(
                    <Pagination.Ellipsis key={page} />
                );
            }
        }
        return items;
    };

    return (
        <>
            <div style={{ backgroundColor: "#292929" }}>
                <div className="w-100 text-white d-none d-xl-flex flex-column justify-content-end" id="listing-search">
                    <div className="form-wrapper">
                        <h1>New on TV</h1>
                    </div>
                </div>
                {error ?
                    (<Alert variant='info' className='c-card text-dark d-flex flex-column justify-content-between align-items-center' style={{ backgroundColor: "#1b2739d1" }}>
                        <Alert.Heading style={{ color: "#fff" }}>No Data found!</Alert.Heading>
                    </Alert>)
                    : ''
                }
                {loading ? (

                    <div className="tv__loader">
                        <div className="common-loader">
                            <img
                                src={require("../../src/assets/loading.gif")}
                                alt="loading..."
                                style={{ width: "40px" }}
                            />
                        </div>
                    </div>
                ) : (

                    <>
                        <section style={{ backgroundColor: "#292929" }}>
                            <div className='container'>
                                <div className="row">
                                    {data && data?.newOnTV.schedules.map(dataFromTV => (
                                        <div className='col-lg-4 col-sm-6' key={dataFromTV.id}>
                                            <section id="listing-section" className='px-3 px-md-3'>
                                                <div className="c-card text-white d-flex flex-column justify-content-between channel bbc-two"
                                                    style={{ backgroundImage: `url(${dataFromTV.asset.imageURL != null ? dataFromTV.asset.imageURL : dataFromTV.asset.season?.imageURL != null ? dataFromTV.asset.season?.imageURL : dataFromTV.asset.series?.imageURL})` }}
                                                >

                                                    <div className="col p-0 d-flex justify-content-between align-items-start">
                                                        <div className="logo">
                                                            <div className="d-flex align-items-center">
                                                                <img src={dataFromTV.channel.logoURL!} alt="BBC Two" />
                                                                <span className="ml-2 date">{getDateStringTime(dataFromTV.startAt)}<br />{getDateStringDay(dataFromTV.startAt)}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="desc col d-flex justify-content-end flex-column">
                                                        <h6 className="title font-weight-bold">
                                                            {dataFromTV.title}
                                                        </h6>
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <div className="sub-title">S{dataFromTV.asset.season?.number} E{dataFromTV.asset.number}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </>

                )}
                <Pagination className='justify-content-center pb-5 mt-5 mb-0'>
                    <Pagination.First onClick={() => setActivePage(firstPage)} />
                    <Pagination.Prev onClick={() => setActivePage((prev) => prev - 1)} />
                    {renderPageItems()}
                    <Pagination.Next onClick={() => setActivePage((prev) => prev + 1)} />
                    <Pagination.Last onClick={() => setActivePage(lastPage)} />
                </Pagination>
            </div>
        </>
    )
}