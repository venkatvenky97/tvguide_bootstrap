import { useMutation } from '@apollo/client'
import { graphql } from '../gql'
import { Spinner } from 'react-bootstrap'

const SIGNUPWITHEMAIL = graphql(`
mutation SignUpWithEmail($input: SignUpWithEmailInput!) {
    signUpWithEmail(input: $input) {
      id
      email
      profileCreated
      username
      platformId
      regionId
    }
  }
`)

function MuteSign() {
    const [signUpWithEmail, { data, loading, error }] = useMutation(SIGNUPWITHEMAIL, {
        context: {
            headers: {
                'Authorization': '2ccb96dd-a4da-402f-b8d0-dc23f87e6655',
                'Content-Type': 'application/json'
            }
        },
        variables: {
            input: {
                email: "hariram@shenll.com"
            }
        }
    })
    if (error) return <p>Error...</p>
    return (
        <div>
            {loading ? (
                <div className='tv__loader'>
                    <Spinner animation="border" variant="info" style={{ width: "4rem", height: "4rem" }} role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            ) : (

                <>
                    <section style={{ backgroundColor: "#292929" }}>
                        <div className='container'>
                            <div className="row">
                                <div className="desc col d-flex justify-content-end flex-column">
                                    <h6 className="title font-weight-bold text-white">
                                        ID:{data?.signUpWithEmail.id}
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </section>
                </>

            )}

            <h2>{ }</h2>


        </div>
    )
}

export default MuteSign