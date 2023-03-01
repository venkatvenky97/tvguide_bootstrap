import React, { useContext, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import AuthContext from "../context/auth-context";
import { Auth } from "aws-amplify";
import { User } from "../common/types";
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { graphql } from "../gql";
import { getTokenFromSession } from "../common/helpers/session";
import { UPDATEPROFILE } from "./mutations";
import { Modal } from "react-bootstrap";
import { Gender } from "../gql/graphql";
import UpdateProfileModal from "./components/UpdateProfileModal";
import Platforms from "./components/Platforms";
import Regions from "./components/Regions";

const USER = graphql(`
  query User {
    user {
      id
      email
      profileCreated
      username
      platformId
      regionId
    }
  }
`);

function SignInWithLink() {
  const [searchParams] = useSearchParams();
  const [user, setUser] = useState<User>();
  const [modalPop, setModalPop] = useState(false);
  const [platfrom, setPlatform] = useState("");
  const [region, setRegion] = useState("");

  useEffect(() => {
    const email = searchParams.get("email") || "";
    const token = searchParams.get("token") || "";
    signInHandler(email, token).then(() => {});
  });

  const handleSignUp = (e: { target: any; preventDefault: () => void }) => {
    e.preventDefault();
    updateProfile();
    // setTimeout(() => {
    //   window.location.href = "http://localhost:3000/";
    // });

    // UpdateProfileModal()
    // console.log('e3', e.target?.elements?.username?.value)
    // console.log('amazon', e?.target?.amazon?.value)
    // console.log('netflix', e.target?.netlix?.value)
    // console.log('gender', e.target?.gender?.value)
  };

  const [updateProfile, { data: data2, loading: loading2, error: error2 }] =
    useMutation(UPDATEPROFILE, {
      context: {
        headers: {
          Authorization: getTokenFromSession(),
          "Content-Type": "application/json",
        },
      },
      variables: {
        input: {
          username: "Jacky",
          birthDate: "1993-07-28",
          gender: Gender.F,
          platformId: "f55acb3b-a288-5ff7-962b-0da29811d046",
          regionId: "81e95d97-35fa-5c7b-9174-f1d74439d15d",
          netflix: true,
          amazon: false,
        },
      },
    });

  console.log("updateProfile", data2?.updateProfile.platformId);

  const signInHandler = async (email: string, token: string) => {
    try {
      console.log("signInHandler start");
      await signOutHandler();
      const user = await Auth.signIn(email);
      await Auth.sendCustomChallengeAnswer(user, token);

      await setUserHandler();
      console.log("signInHandler end");
    } catch (e) {
      console.log("signInHandler error", e);
    }
  };

  const setUserHandler = async () => {
    try {
      console.log("setUserHandler start");
      const session = await Auth.currentSession();
      console.log("session", session);
      const user: User = {
        accessToken: {
          value: session.getAccessToken().getJwtToken(),
          expiresAt: new Date(session.getAccessToken().getExpiration() * 1000),
        },
      };
      setUser(user);
      localStorage.setItem(
        "AUTH_USER_TOKEN",
        session.getAccessToken().getJwtToken()
      );
      console.log("Auth_token", session.getAccessToken().getJwtToken());
      console.log("setUserHandler end");
    } catch (e) {
      console.log("setUserHandler error", e);
      setUser(undefined);
    }
  };

  const signOutHandler = async () => {
    try {
      console.log("signOutHandler start");
      await Auth.signOut();
      await setUserHandler();
      console.log("signOutHandler end");
    } catch (e) {
      console.log("signOutHandler error", e);
    }
  };

  const triggerModal = () => {
    setModalPop(true);
  };

  const hidePop = () => {
    setModalPop(false);
  };

  const { loading, error, data } = useQuery(USER, {
    context: {
      headers: {
        Authorization: getTokenFromSession(),
        "Content-Type": "application/json",
      },
    },
  });
  console.log("user_data_graphql", data?.user.email);
  console.log("profile_detail", data?.user);
  const profileUp = data?.user.profileCreated;
  const profileData = data?.user;
  console.log("profile_createdddd", profileUp);

  useEffect(() => {
    if (profileUp === false) {
      return setModalPop(true);
    }
  }, [profileData]);

  const handlePlatformChange = (e: any) => {
    e.preventDefault();
    setPlatform(e.targer.value);
  };
  console.log("handlePlatformChange", handlePlatformChange);

  const handleRegionChange = (e: any) => {
    e.preventDefault();
    setRegion(e.targer.value);
  };

  return (
    <>
      <div id="page-content">
        <div
          className="w-100 text-white d-none d-xl-flex flex-column justify-content-end"
          id="listing-search"
        >
          <div className="form-wrapper">
            {/* <h1>TV Listing ({token})</h1> */}
          </div>
        </div>

        <section id="listing-section">
          <div className="d-flex flex-column flex-lg-row">
            <div className="flex-fill content">
              <div className="row">
                <div className="col-lg grid-item">
                  <div className="c-card text-white d-flex flex-column justify-content-between channel bbc-two">
                    <div className="col p-0 d-flex justify-content-between align-items-start">
                      <div className="logo">
                        <div className="d-flex align-items-center">
                          <img
                            src="assets/images/channels/bbc-two.png"
                            alt="BBC Two"
                          />
                          <span className="ml-2 date">
                            6.00pm
                            <br />
                            Today
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="desc col d-flex justify-content-end flex-column">
                      <h6 className="title font-weight-bold">
                        Princess Margaret: The Rebel Royal
                      </h6>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="sub-title">S1 E8</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg grid-item">
                  <div className="c-card text-white d-flex flex-column justify-content-between channel bbc-two">
                    <div className="col p-0 d-flex justify-content-between align-items-start">
                      <div className="logo">
                        <div className="d-flex align-items-center">
                          <img
                            src="assets/images/channels/bbc-two.png"
                            alt="BBC Two"
                          />
                          <span className="ml-2 date">
                            6.00pm
                            <br />
                            Today
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="desc col d-flex justify-content-end flex-column">
                      <h6 className="title font-weight-bold">
                        Princess Margaret: The Rebel Royal
                      </h6>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="sub-title">S1 E8</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg grid-item">
                  <div className="c-card text-white d-flex flex-column justify-content-between channel bbc-two">
                    <div className="col p-0 d-flex justify-content-between align-items-start">
                      <div className="logo">
                        <div className="d-flex align-items-center">
                          <img
                            src="assets/images/channels/bbc-two.png"
                            alt="BBC Two"
                          />
                          <span className="ml-2 date">
                            6.00pm
                            <br />
                            Today
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="desc col d-flex justify-content-end flex-column">
                      <h6 className="title font-weight-bold">
                        Princess Margaret: The Rebel Royal
                      </h6>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="sub-title">S1 E8</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg grid-item">
                  <div className="c-card text-white d-flex flex-column justify-content-between channel bbc-two">
                    <div className="col p-0 d-flex justify-content-between align-items-start">
                      <div className="logo">
                        <div className="d-flex align-items-center">
                          <img
                            src="assets/images/channels/bbc-two.png"
                            alt="BBC Two"
                          />
                          <span className="ml-2 date">
                            6.00pm
                            <br />
                            Today
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="desc col d-flex justify-content-end flex-column">
                      <h6 className="title font-weight-bold">
                        Princess Margaret: The Rebel Royal
                      </h6>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="sub-title">S1 E8</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg grid-item">
                  <div className="c-card text-white d-flex flex-column justify-content-between channel bbc-two">
                    <div className="col p-0 d-flex justify-content-between align-items-start">
                      <div className="logo">
                        <div className="d-flex align-items-center">
                          <img
                            src="assets/images/channels/bbc-two.png"
                            alt="BBC Two"
                          />
                          <span className="ml-2 date">
                            6.00pm
                            <br />
                            Today
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="desc col d-flex justify-content-end flex-column">
                      <h6 className="title font-weight-bold">
                        Princess Margaret: The Rebel Royal
                      </h6>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="sub-title">S1 E8</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg grid-item">
                  <div className="c-card text-white d-flex flex-column justify-content-between channel bbc-two">
                    <div className="col p-0 d-flex justify-content-between align-items-start">
                      <div className="logo">
                        <div className="d-flex align-items-center">
                          <img
                            src="assets/images/channels/bbc-two.png"
                            alt="BBC Two"
                          />
                          <span className="ml-2 date">
                            6.00pm
                            <br />
                            Today
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="desc col d-flex justify-content-end flex-column">
                      <h6 className="title font-weight-bold">
                        Princess Margaret: The Rebel Royal
                      </h6>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="sub-title">S1 E8</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg grid-item">
                  <div className="c-card text-white d-flex flex-column justify-content-between channel bbc-two">
                    <div className="col p-0 d-flex justify-content-between align-items-start">
                      <div className="logo">
                        <div className="d-flex align-items-center">
                          <img
                            src="assets/images/channels/bbc-two.png"
                            alt="BBC Two"
                          />
                          <span className="ml-2 date">
                            6.00pm
                            <br />
                            Today
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="desc col d-flex justify-content-end flex-column">
                      <h6 className="title font-weight-bold">
                        Princess Margaret: The Rebel Royal
                      </h6>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="sub-title">S1 E8</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg grid-item">
                  <div className="c-card text-white d-flex flex-column justify-content-between channel bbc-two">
                    <div className="col p-0 d-flex justify-content-between align-items-start">
                      <div className="logo">
                        <div className="d-flex align-items-center">
                          <img
                            src="assets/images/channels/bbc-two.png"
                            alt="BBC Two"
                          />
                          <span className="ml-2 date">
                            6.00pm
                            <br />
                            Today
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="desc col d-flex justify-content-end flex-column">
                      <h6 className="title font-weight-bold">
                        Princess Margaret: The Rebel Royal
                      </h6>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="sub-title">S1 E8</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg grid-item">
                  <div className="c-card text-white d-flex flex-column justify-content-between channel bbc-two">
                    <div className="col p-0 d-flex justify-content-between align-items-start">
                      <div className="logo">
                        <div className="d-flex align-items-center">
                          <img
                            src="assets/images/channels/bbc-two.png"
                            alt="BBC Two"
                          />
                          <span className="ml-2 date">
                            6.00pm
                            <br />
                            Today
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="desc col d-flex justify-content-end flex-column">
                      <h6 className="title font-weight-bold">
                        Princess Margaret: The Rebel Royal
                      </h6>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="sub-title">S1 E8</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Modal
          show={modalPop}
          className="tvg__signup modal fade"
          id="sign-up-modal"
          role="dialog"
          aria-labelledby="sign-in-modal"
          aria-hidden="true"
          style={{ color: "#212529" }}
          fullscreen={true}
          onHide={hidePop}
        >
          <Modal.Body>
            <div
              className="modal-dialog mx-auto"
              style={{ background: "transparent" }}
              role="document"
            >
              <div className="modal-content tv__model_pop text-white px-sm-2 px-md-5 px-sm-0">
                <form onSubmit={handleSignUp}>
                  <div className="container">
                    <div className="row justify-content-center align-items-center">
                      <div className="col-lg-8 p-0 mb-2 mb-lg-0">
                        <div className="d-flex justify-content-between align-items-start mb-4">
                          <h2 className="m-0">Update Profile</h2>
                        </div>
                        <div className="input-group flex-column mb-5">
                          <label className="font-weight-bold m-0">
                            Username
                          </label>
                          <input
                            className="username_length"
                            type="text"
                            required
                          />
                        </div>
                        <div className="mb-4 mb-sm-5 d-flex justify-content-between">
                          <div className="d-flex flex-column birthdate justify-content-between">
                            <div className="font-weight-bold checkbox-label mb-1">
                              Birthdate
                            </div>
                            <div className="d-flex">
                              <input
                                type="text"
                                className="day mr-3 text-center"
                                placeholder="dd"
                              />
                              <input
                                type="text"
                                className="month mr-3 text-center"
                                placeholder="mm"
                              />
                              <input
                                type="text"
                                className="year text-center"
                                placeholder="yyyy"
                              />
                            </div>
                          </div>
                          <div className="d-flex flex-column gender justify-content-between">
                            <div className="font-weight-bold mb-1 checkbox-label">
                              Gender
                            </div>
                            <div className="d-flex">
                              <div className="input-group checkbox mr-2 mr-sm-0">
                                <label className="m-0 d-flex align-items-center">
                                  <span className="d-sm-none">F</span>
                                  <span className="d-none d-sm-inline">
                                    Female
                                  </span>
                                  <input type="checkbox" />
                                  <span className="icon"></span>
                                </label>
                              </div>
                              <div className="input-group checkbox justify-content-end">
                                <label className="m-0 d-flex align-items-center">
                                  <span className="d-sm-none">M</span>
                                  <span className="d-none d-sm-inline">
                                    Male
                                  </span>
                                  <input type="checkbox" />
                                  <span className="icon"></span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <h4 className="mb-2 mb-sm-3">
                          Select Provider and Region
                        </h4>
                        <div className="d-flex justify-content-between mb-4 mb-sm-5 tv_d_flex">
                          <Platforms onChange={handlePlatformChange} />
                          <div className="outline"></div>
                          <Regions onChange={handleRegionChange} />
                        </div>
                        <div>
                          <h4 className="mb-2 mb-sm-3">
                            Do you use any of these?
                          </h4>
                          <div className="d-flex">
                            <div className="input-group checkbox w-auto mr-4 mr-sm-5">
                              <label className="m-0">
                                Netflix <input type="checkbox" />
                                <span className="icon"></span>
                              </label>
                            </div>
                            <div className="input-group checkbox w-auto">
                              <label className="m-0">
                                Amazon <input type="checkbox" />
                                <span className="icon"></span>
                              </label>
                            </div>
                          </div>
                          <div className="text-sm-end">
                            <button className="d-block d-sm-inline-block btn c-button success mt-4 font-weight-bold">
                              Update
                            </button>
                          </div>
                          {/* <div className="text-sm-end">
                            <button className="d-block d-sm-inline-block btn c-button success mt-4">
                              Update
                            </button>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}

export default SignInWithLink;
