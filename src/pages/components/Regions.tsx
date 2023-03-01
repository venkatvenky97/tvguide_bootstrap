import { useQuery } from "@apollo/client";
import { GET_Regions } from "../queries";
import Dropdown from "react-bootstrap/Dropdown";

export default function Regions(props: any) {
  const { onChange } = props;
  const { loading, error, data } = useQuery(GET_Regions, {
    context: {
      headers: {
        Authorization: "2ccb96dd-a4da-402f-b8d0-dc23f87e6655",
        "Content-Type": "application/json",
      },
    },
    variables: {
      input: {
        platformId: "f55acb3b-a288-5ff7-962b-0da29811d046",
      },
    },
  });

  // console.log('regions===>', data?.regions)
  // if(loading) return <p>Loading data...</p>
  // if(error) return <p>No Option!</p>

  return (
    <>
      <Dropdown onChange={onChange}>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          Region
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {data &&
            data?.regions.map((dataFromRegions) => (
              <Dropdown.Item>{dataFromRegions.title}</Dropdown.Item>
            ))}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}
