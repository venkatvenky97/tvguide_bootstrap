import { useQuery } from "@apollo/client";
import { GET_Platforms } from "../queries";
import Dropdown from "react-bootstrap/Dropdown";

export default function Platforms(props: any) {
  const { onChange } = props;
  const { loading, error, data } = useQuery(GET_Platforms, {
    context: {
      headers: {
        Authorization: "2ccb96dd-a4da-402f-b8d0-dc23f87e6655",
        "Content-Type": "application/json",
      },
    },
  });

  // console.log('platforms===>', data?.platforms)
  // if(loading) return <p>Loading data...</p>
  // if(error) return <p>No Option!</p>

  return (
    <>
      <Dropdown onChange={onChange}>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          Provider
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {data &&
            data?.platforms.map((dataFromPlatfroms) => (
              <Dropdown.Item>{dataFromPlatfroms.title}</Dropdown.Item>
            ))}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}
