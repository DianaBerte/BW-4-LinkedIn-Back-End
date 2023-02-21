import "../css/SidebarStyles.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchAllProfilesAction } from "../actions";
import { useAppDispatch } from "../hooks/hooks";
import React from "react";
import Profile from "./Profile";
import Analytics from "./Analytics";
import Resources from "./Resources";
import Activity from "./Activity";
import About from "./About";

const Sidebar = () => {
  const [toggleCards, setToggleCards] = useState(false);
  // const profiles = useAppSelector(state => state.allProfiles.results)
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllProfilesAction());
    // console.log(profiles)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container className="my-5">
      <Row>
        <Col className="col-12 col-sm-8 pr-0 overflow-hidden">

          <Profile />
          <Analytics />
          <Resources />
          <About />
          <Activity />
        </Col>
        <Col className="col-12 col-sm-4 px-4 profiles-container">
          <div className="sidebar-card">
            <div className="card-spacing">
              <div className="d-flex align-items-center">
                <Link to={"/"}>Edit public profile & URL</Link>
                <svg
                  className="ml-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  data-supported-dps="16x16"
                  fill="currentColor"
                  width="16"
                  height="16"
                  focusable="false"
                >
                  <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zm0 11.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zM8.82 9H7v-.95l.93-.46C8.64 7.24 9 6.89 9 6.6S8.57 6 8 6a6.49 6.49 0 00-3 .91V4.84A6.35 6.35 0 018.1 4c2 0 2.9 1 2.9 2.4 0 .9-.5 1.83-2.18 2.6z"></path>
                </svg>
              </div>
              <hr />
              <div className="d-flex align-items-center">
                <Link to={"/"}>Add profile in another language</Link>
                <svg
                  className="ml-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  data-supported-dps="16x16"
                  fill="currentColor"
                  width="16"
                  height="16"
                  focusable="false"
                >
                  <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zm0 11.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zM8.82 9H7v-.95l.93-.46C8.64 7.24 9 6.89 9 6.6S8.57 6 8 6a6.49 6.49 0 00-3 .91V4.84A6.35 6.35 0 018.1 4c2 0 2.9 1 2.9 2.4 0 .9-.5 1.83-2.18 2.6z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="sidebar-card my-2">
            <div className="card-spacing">
              <h2>People also viewed</h2>
              <div className="d-flex">
                <div className="image-container">
                  <img
                    src="https://images.unsplash.com/photo-1536590158209-e9d615d525e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                    alt=""
                  />
                </div>
                <div>
                  <Link className="username" to={"/"}>
                    Name Surname
                  </Link>{" "}
                  <span>• 2nd</span>
                  <p className="profession">Profession</p>
                  <Button variant="outline-secondary">
                    <svg
                      className="mr-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      data-supported-dps="16x16"
                      fill="currentColor"
                      width="16"
                      height="16"
                      focusable="false"
                    >
                      <path d="M9 4a3 3 0 11-3-3 3 3 0 013 3zM6.75 8h-1.5A2.25 2.25 0 003 10.25V15h6v-4.75A2.25 2.25 0 006.75 8zM13 8V6h-1v2h-2v1h2v2h1V9h2V8z"></path>
                    </svg>{" "}
                    Connect
                  </Button>
                </div>
              </div>
              <hr />
              <div className="d-flex">
                <div className="image-container">
                  <img
                    src="https://images.unsplash.com/photo-1536590158209-e9d615d525e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                    alt=""
                  />
                </div>
                <div>
                  <Link className="username" to={"/"}>
                    Name Surname
                  </Link>{" "}
                  <span>• 2nd</span>
                  <p className="profession">Profession</p>
                  <Button variant="outline-secondary">
                    <svg
                      className="mr-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      data-supported-dps="16x16"
                      fill="currentColor"
                      width="16"
                      height="16"
                      focusable="false"
                    >
                      <path d="M9 4a3 3 0 11-3-3 3 3 0 013 3zM6.75 8h-1.5A2.25 2.25 0 003 10.25V15h6v-4.75A2.25 2.25 0 006.75 8zM13 8V6h-1v2h-2v1h2v2h1V9h2V8z"></path>
                    </svg>{" "}
                    Connect
                  </Button>
                </div>
              </div>
              <hr />
              <div className="d-flex">
                <div className="image-container">
                  <img
                    src="https://images.unsplash.com/photo-1536590158209-e9d615d525e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                    alt=""
                  />
                </div>
                <div>
                  <Link className="username" to={"/"}>
                    Name Surname
                  </Link>{" "}
                  <span>• 2nd</span>
                  <p className="profession">Profession</p>
                  <Button variant="outline-secondary">
                    <svg
                      className="mr-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      data-supported-dps="16x16"
                      fill="currentColor"
                      width="16"
                      height="16"
                      focusable="false"
                    >
                      <path d="M9 4a3 3 0 11-3-3 3 3 0 013 3zM6.75 8h-1.5A2.25 2.25 0 003 10.25V15h6v-4.75A2.25 2.25 0 006.75 8zM13 8V6h-1v2h-2v1h2v2h1V9h2V8z"></path>
                    </svg>{" "}
                    Connect
                  </Button>
                </div>
              </div>
            </div>
            <div className="toggle">
              Show more{" "}
              <svg
                className="ml-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                data-supported-dps="16x16"
                fill="currentColor"
                width="16"
                height="16"
                focusable="false"
              >
                <path d="M1 5l7 4.61L15 5v2.39L8 12 1 7.39z"></path>
              </svg>
            </div>
          </div>
          <div className="sidebar-card my-2">
            <div className="card-spacing">
              <h2>People you may know</h2>
              <div className="d-flex">
                <div className="image-container">
                  <img
                    src="https://images.unsplash.com/photo-1536590158209-e9d615d525e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                    alt=""
                  />
                </div>
                <div>
                  <Link className="username" to={"/"}>
                    Name Surname
                  </Link>{" "}
                  <span>• 2nd</span>
                  <p className="profession">Profession</p>
                  <Button variant="outline-secondary">
                    <svg
                      className="mr-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      data-supported-dps="16x16"
                      fill="currentColor"
                      width="16"
                      height="16"
                      focusable="false"
                    >
                      <path d="M9 4a3 3 0 11-3-3 3 3 0 013 3zM6.75 8h-1.5A2.25 2.25 0 003 10.25V15h6v-4.75A2.25 2.25 0 006.75 8zM13 8V6h-1v2h-2v1h2v2h1V9h2V8z"></path>
                    </svg>{" "}
                    Connect
                  </Button>
                </div>
              </div>
              <hr />
              <div className="d-flex">
                <div className="image-container">
                  <img
                    src="https://images.unsplash.com/photo-1536590158209-e9d615d525e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                    alt=""
                  />
                </div>
                <div>
                  <Link className="username" to={"/"}>
                    Name Surname
                  </Link>{" "}
                  <span>• 2nd</span>
                  <p className="profession">Profession</p>
                  <Button variant="outline-secondary">
                    <svg
                      className="mr-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      data-supported-dps="16x16"
                      fill="currentColor"
                      width="16"
                      height="16"
                      focusable="false"
                    >
                      <path d="M9 4a3 3 0 11-3-3 3 3 0 013 3zM6.75 8h-1.5A2.25 2.25 0 003 10.25V15h6v-4.75A2.25 2.25 0 006.75 8zM13 8V6h-1v2h-2v1h2v2h1V9h2V8z"></path>
                    </svg>{" "}
                    Connect
                  </Button>
                </div>
              </div>
              <hr />
              <div className="d-flex">
                <div className="image-container">
                  <img
                    src="https://images.unsplash.com/photo-1536590158209-e9d615d525e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                    alt=""
                  />
                </div>
                <div>
                  <Link className="username" to={"/"}>
                    Name Surname
                  </Link>{" "}
                  <span>• 2nd</span>
                  <p className="profession">Profession</p>
                  <Button variant="outline-secondary">
                    <svg
                      className="mr-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      data-supported-dps="16x16"
                      fill="currentColor"
                      width="16"
                      height="16"
                      focusable="false"
                    >
                      <path d="M9 4a3 3 0 11-3-3 3 3 0 013 3zM6.75 8h-1.5A2.25 2.25 0 003 10.25V15h6v-4.75A2.25 2.25 0 006.75 8zM13 8V6h-1v2h-2v1h2v2h1V9h2V8z"></path>
                    </svg>{" "}
                    Connect
                  </Button>
                </div>
              </div>
              <hr />
              <div className={toggleCards ? "d-flex" : "d-none"}>
                <div className="image-container">
                  <img
                    src="https://images.unsplash.com/photo-1536590158209-e9d615d525e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                    alt=""
                  />
                </div>
                <div>
                  <Link className="username" to={"/"}>
                    Name Surname
                  </Link>{" "}
                  <span>• 2nd</span>
                  <p className="profession">Profession</p>
                  <Button variant="outline-secondary">
                    <svg
                      className="mr-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      data-supported-dps="16x16"
                      fill="currentColor"
                      width="16"
                      height="16"
                      focusable="false"
                    >
                      <path d="M9 4a3 3 0 11-3-3 3 3 0 013 3zM6.75 8h-1.5A2.25 2.25 0 003 10.25V15h6v-4.75A2.25 2.25 0 006.75 8zM13 8V6h-1v2h-2v1h2v2h1V9h2V8z"></path>
                    </svg>{" "}
                    Connect
                  </Button>
                </div>
              </div>
            </div>
            <div
              className="toggle"
              onClick={() => {
                setToggleCards(!toggleCards);
              }}
            >
              {toggleCards ? (
                <>
                  Show less{" "}
                  <svg
                    className="ml-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    data-supported-dps="16x16"
                    fill="currentColor"
                    width="16"
                    height="16"
                    focusable="false"
                  >
                    <path d="M15 11L8 6.39 1 11V8.61L8 4l7 4.61z"></path>
                  </svg>
                </>
              ) : (
                <>
                  Show more{" "}
                  <svg
                    className="ml-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    data-supported-dps="16x16"
                    fill="currentColor"
                    width="16"
                    height="16"
                    focusable="false"
                  >
                    <path d="M1 5l7 4.61L15 5v2.39L8 12 1 7.39z"></path>
                  </svg>
                </>
              )}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Sidebar;