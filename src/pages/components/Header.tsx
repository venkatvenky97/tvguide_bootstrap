import React, { useEffect } from "react";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { SIGNUPWITHEMAIL } from "../mutations";
import { Alert, Button, Modal, Form } from "react-bootstrap";

export default function Header() {
  const [searchParams] = useSearchParams();
  const [name, setName] = useState("");
  const [show, setShow] = React.useState(false);
  const [signName, setSignName] = useState("");
  const [modalPop, setModalPop] = useState(false);
  const [errorShow, setErrorShow] = useState(false);
  const email = searchParams.get("email");
  const token = searchParams.get("token");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    signUpWithEmail();
  };

  const [signUpWithEmail, { data, loading, error }] = useMutation(
    SIGNUPWITHEMAIL,
    {
      context: {
        headers: {
          Authorization: "2ccb96dd-a4da-402f-b8d0-dc23f87e6655",
          "Content-Type": "application/json",
        },
      },
      variables: {
        input: {
          email: name,
        },
      },
    }
  );

  useEffect(() => {
    if (data && data?.signUpWithEmail.id) {
      // setTimeout(() => {
      //   window.location.href = "http://localhost:3000/";
      // }, 8000);
      setShow(true);
    }

    if (error) {
      setErrorShow(true);
      setTimeout(() => {
        // window.location.href = "http://localhost:3000/";
        setErrorShow(false);
      }, 3000);
    }
  }, [data?.signUpWithEmail.id, error]);

  return (
    <>
      <div className="page home-page">
        <header id="main-header">
          <div className="ad text-center d-none d-sm-block">
            <Link to="/">
              <img
                className="img-fluid"
                src="assets/images/banner.jpg"
                style={{ width: "872px" }}
              />
            </Link>
          </div>

          <div className="position-relative d-flex flex-column align-items-center header-content no-bg">
            <div className="nav-wrapper w-100 nav-wrapper-js">
              <div className="container-fluid">
                <div className="justify-content-between align-items-start d-none d-xl-flex">
                  <nav className="nav-a">
                    <ul className="list-unstyled d-flex m-0">
                      <li>
                        <Link to="/">
                          <img src="assets/images/logo.png" alt="TVGuide" />
                        </Link>
                      </li>
                      <li>
                        <Link to="/tv-listings">TV Listings</Link>
                      </li>
                      <li className="active">
                        <Link to="/new-on-tv"> New on TV</Link>
                      </li>
                      <li>
                        <Link to="/new-films">New Films</Link>
                      </li>
                    </ul>
                  </nav>

                  <div className="d-flex align-items-center flex-grow-1 justify-content-end">
                    {email && token ? (
                      <Link
                        to="#"
                        className="sign-in"
                        data-toggle="modal"
                        data-backdrop="static"
                      >
                        Sign Out
                      </Link>
                    ) : (
                      <>
                        <Link
                          to="#"
                          className="sign-in"
                          data-toggle="modal"
                          data-target="#sign-in-modal"
                          data-backdrop="static"
                        >
                          Sign In
                        </Link>
                      </>
                    )}
                  </div>
                </div>
                <div className="d-flex d-xl-none justify-content-between align-items-center align-items-xl-start text-white mobile-nav mr-2">
                  <div className="d-flex">
                    <Link to="#" className="d-flex align-items-center">
                      <img src="assets/images/logo.png" />
                    </Link>
                  </div>
                  <div className="d-flex align-items-center">
                    <nav className="navbar navbar-dark ">
                      <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarToggleExternalContent"
                        aria-controls="navbarToggleExternalContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        <span className="navbar-toggler-icon"></span>
                      </button>
                    </nav>
                    <Link
                      to="#"
                      data-toggle="modal"
                      data-target="#sign-in-modal"
                      data-backdrop="static"
                      className="user-nav-btn"
                    >
                      <span className="icon-user-solid-circle"></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div
          className="modal fade tv_m"
          id="sign-in-modal"
          role="dialog"
          aria-labelledby="sign-in-modal"
          aria-hidden="true"
          style={{ background: "#1b2739e3", border: "none !important" }}
        >
          <div className="modal-dialog mx-auto" role="document">
            <>
              <Alert show={show} variant="success">
                <p>
                  {" "}
                  Click the link we sent to {name} to sign in to TVGuide.co.uk.
                </p>
              </Alert>
              <Alert show={errorShow} variant="danger">
                <p>Error(s) occurred. Please try again.</p>
              </Alert>
            </>
            <div className="modal-content tv__model_pop text-white px-md-0">
              <form onSubmit={handleSubmit} className="">
                <div className="row justify-content-center">
                  <div className="col-lg-9 p-0 mb-5 mb-lg-0">
                    <div className="pl-0">
                      <h2 className="mb-0 mobile-view">Sign In</h2>
                    </div>
                    <div className="form-group mt-4 mb-4 p-0">
                      <label htmlFor="sign-in-field" className="mobile-view1">
                        Email
                      </label>
                      <input
                        className="tv__form_input form-control"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        id="sign-in-field"
                        name="email"
                        required
                      />
                    </div>
                    <div className="row">
                      <div className="col-sm-12 button">
                        <div className="text-sm-end">
                          <button className="d-block d-sm-inline-block btn c-button success mb-4">
                            Sign In
                          </button>
                          <button
                            className="d-block d-sm-inline-block btn ms-sm-3 c-button px-0 text-bg-secondary cancel mb-4"
                            data-dismiss="modal"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div
          className="tvg__signup modal fade"
          id="sign-up-modal"
          role="dialog"
          aria-labelledby="sign-in-modal"
          aria-hidden="true"
          style={{}}
        >
          <div className="modal-dialog mx-auto" role="document">
            <div className="modal-content tv__model_pop text-white px-4">
              <div className="d-flex justify-content-between align-items-start mb-4">
                <h2 className="m-0">Update Profile</h2>
              </div>
              <form action="" className="d-flex flex-column flex-lg-row">
                <div className="col-lg-7 p-0 mb-4 mb-lg-0">
                  <div className="input-group flex-column mb-5">
                    <label className="font-weight-bold m-0">Username</label>
                    <input className="username_length" type="text" />
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
                    <div className="d-flex flex-column gender justify-content-between tv__gender">
                      <div className="font-weight-bold mb-1 checkbox-label">
                        Gender
                      </div>
                      <div className="d-flex">
                        <div className="input-group checkbox mr-2 mr-sm-0">
                          <label className="m-0">
                            <span className="d-sm-none">F</span>
                            <span className="d-none d-sm-inline">Female</span>
                            <input type="checkbox" />
                            <span className="icon"></span>
                          </label>
                        </div>
                        <div className="input-group checkbox justify-content-end">
                          <label className="m-0">
                            <span className="d-sm-none">M</span>
                            <span className="d-none d-sm-inline">Male</span>
                            <input type="checkbox" />
                            <span className="icon"></span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h4 className="mb-2 mb-sm-3">Select Provider and Region</h4>
                  <div className="d-flex justify-content-between mb-4 mb-sm-5 tv_d_flex">
                    <div className="c-select mr-3 mr-sm-0 tv__cselect1">
                      <div className="dropdown bootstrap-select">
                        <select className="">
                          <option value="1">Providers</option>
                          <option value="2">Test 1</option>
                          <option value="3">Test 2</option>
                        </select>
                        <button
                          type="button"
                          className="btn dropdown-toggle btn-light"
                          data-toggle="dropdown"
                          role="button"
                          title="Freeview"
                          aria-expanded="false"
                        >
                          <div className="filter-option">
                            <div className="filter-option-inner">
                              <div className="filter-option-inner-inner">
                                Providers
                              </div>
                            </div>
                          </div>
                        </button>
                        <div
                          className="dropdown-menu"
                          role="combobox"
                          style={{
                            maxHeight: "572.28px",
                            overflow: "hidden",
                            minHeight: "0px",
                            position: "absolute",
                            willChange: "transform",
                            top: "0px",
                            left: "0px",
                            transform: "translate3d(0px, -2px, 0px)",
                          }}
                          x-placement="top-start"
                        >
                          <div
                            className="inner show"
                            role="listbox"
                            aria-expanded="false"
                            style={{
                              maxHeight: "556.28px",
                              overflowY: "auto",
                              minHeight: "0px",
                            }}
                          >
                            <ul className="dropdown-menu inner show">
                              <li className="selected active">
                                <a
                                  role="option"
                                  className="dropdown-item selected active"
                                  aria-disabled="false"
                                  aria-selected="true"
                                >
                                  <span className="text">Freeview</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  role="option"
                                  className="dropdown-item"
                                  aria-disabled="false"
                                  aria-selected="false"
                                >
                                  <span className="text">Test 1</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  role="option"
                                  className="dropdown-item"
                                  aria-disabled="false"
                                  aria-selected="false"
                                >
                                  <span className="text">Test 2</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="outline"></div>
                    </div>

                    <div className="c-select tv__cselect">
                      <div className="dropdown bootstrap-select">
                        <select className="">
                          <option value="1">Region</option>
                          <option value="2">Test 1</option>
                          <option value="3">Test 2</option>
                        </select>
                        <button
                          type="button"
                          className="btn dropdown-toggle btn-light"
                          data-toggle="dropdown"
                          role="button"
                          title="Region"
                        >
                          <div className="filter-option">
                            <div className="filter-option-inner">
                              <div className="filter-option-inner-inner">
                                Region
                              </div>
                            </div>
                          </div>
                        </button>
                        <div className="dropdown-menu " role="combobox">
                          <div
                            className="inner show"
                            role="listbox"
                            aria-expanded="false"
                          >
                            <ul className="dropdown-menu inner show"></ul>
                          </div>
                        </div>
                      </div>
                      <div className="outline"></div>
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-2 mb-sm-3">Do you use any of these?</h4>
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
                    <div className="mt-4 justify-content-end d-none d-xl-flex">
                      <button className="c-button s-md success font-weight-bold large_screen_profile">
                        Updated Profile{" "}
                      </button>
                    </div>
                  </div>

                  <div className="col-lg pr-0 mt-4 ml-0 w-25 p-1 d-flex flex-column button">
                    <button className="c-button s-md success font-weight-bold ml-1 mb-4 d-xl-none d-inline-flex updated_profile">
                      Update Profile
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
