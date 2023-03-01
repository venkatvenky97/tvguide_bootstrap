import { useMutation } from "@apollo/client";
import { graphql } from "../gql";

export const SIGNUPWITHEMAIL = graphql(`
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
`);

export const UPDATEPROFILE = graphql(`
mutation UpdateProfile($input: UpdateProfileInput!) {
  updateProfile(input: $input) {
    id
    email
    profileCreated
    username
    platformId
    regionId
  }
}
`);


// function UpProfile () {
//    const { loading, error, data } = useMutation(UPDATEPROFILE,
//     {
//       context: {
//         headers: {
//           Authorization: "2ccb96dd-a4da-402f-b8d0-dc23f87e6655",
//           "Content-Type": "application/json",
//         },
//       },
//       variables: {
//         input: {
//           username: "ram",
//           birthDate: "1993-07-28",
//           gender: "male",
//           platformId: "f55acb3b-a288-5ff7-962b-0da29811d046",
//           regionId: "81e95d97-35fa-5c7b-9174-f1d74439d15d",
//           netflix: true,
//           amazon: false
//         }
//       },
//     }
//   );
// }