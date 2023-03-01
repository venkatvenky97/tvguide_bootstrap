import { useMutation } from '@apollo/client';
import React from 'react'
import { Gender } from '../../gql/graphql';
import { UPDATEPROFILE } from '../mutations';

export default function UpdateProfileModal() {


  const [updateProfile, { data, loading, error }] = useMutation(
    UPDATEPROFILE,
    {
      context: {
        headers: {
          Authorization: "2ccb96dd-a4da-402f-b8d0-dc23f87e6655",
          "Content-Type": "application/json",
        },
      },
      variables: {
        input: {
          username: "Jack",
          birthDate: "1993-07-28",
          gender: Gender.F,
          platformId: "f55acb3b-a288-5ff7-962b-0da29811d046",
          regionId: "81e95d97-35fa-5c7b-9174-f1d74439d15d",
          netflix: true,
          amazon: false
        }
      },
    }
  );

  console.log("updateProfile" , data?.updateProfile.regionId)
}
