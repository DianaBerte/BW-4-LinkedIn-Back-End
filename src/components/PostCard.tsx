import {
  Row,
  Col,
  Dropdown,
  Modal,
  Button,
  Form,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import { ChatRightText, Share, ThreeDots } from "react-bootstrap-icons";
import { useEffect } from "react";

import {
  // addToLikesAction,
  editPostAction,
  fetchPostsAction,
  // removeFromLikesAction,
} from "../actions";
import { useAppSelector, useAppDispatch } from "../hooks/hooks";

import moment from "moment";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp as liked } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp as disliked } from "@fortawesome/free-regular-svg-icons";

import { useState } from "react";
import { deletePost } from "../actions";
import React from "react";
import { IPost } from "../interfaces/IPost";

interface IProps {
  reloadPosts: boolean;
  addedNewPost: React.Dispatch<React.SetStateAction<boolean>>;
}
let idToEdit: string;
const PostCard = (props: IProps) => {
  const [show, setShow] = useState(false);
  const [editPost, setEditPost] = useState({
    text: "",
  });

  const [likes, setLikes] = useState({ post: {}, numberOfLikes: Number });
  const [changed, setChanged] = useState(false);
  // const [isLikedd, setIsLikedd] = useState(false);
  const [comment, setComment] = useState({ comm: "", user: "" });

  const handleClose = () => setShow(false);
  const submitComment = async (id: String) => {
    try {
      let response = await fetch(
        `${process.env.REACT_APP_BE_URL}/posts/${id}/comments`,
        {
          method: "POST",
          body: JSON.stringify({ comment: comment.comm, user: prof._id }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        console.log("posted");
        let data = await response.json();
        dispatch(fetchPostsAction());

        return data;
      } else {
        console.log("Error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleShow = (id: string) => {
    const found = post.find((p: IPost) => p._id === id);

    setEditPost(found);
    setShow(true);
    idToEdit = id;
  };
  let prof = useAppSelector((state) => state.myProfile.results);

  const post = useAppSelector((state) => state.posts.results);
  const allUsers = useAppSelector((state) => state.allProfiles.results);

  const [numberOfLikes, setNumberOfLikes] = useState(0);

  const isLiked = useAppSelector((state) => state.likes.results);
  const dispatch = useAppDispatch();
  const [file, setFile] = useState<File | null>(null);
  // const handleLike = async (singlePost) => {
  //     try {
  //       const res = await fetch(`${process.env.REACT_APP_BE_URL}/posts/${singlePost._id}/like`, {
  //         method: "PUT",
  //         body: JSON.stringify({_id: profileDataID}),
  //         headers: {"Content-Type": "application/json"}
  //       })
  //       if (res.ok) {
  //         const data = await res.json()
  //         console.log(data)
  //         setIsLiked(data.isLiked)
  //         setLikes(data.totalLikes)
  //         dispatch(getAllPosts())
  //       }
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   };

  const addToLikesAction = async (like: any, userId: string) => {
    try {
      let response = await fetch(
        `${process.env.REACT_APP_BE_URL}/posts/${like._id}/like`,
        {
          method: "POST",
          body: JSON.stringify({ userId: userId }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        console.log("liked");
        let likesss = await response.json();
        console.log(likesss);
        setLikes(likesss);
        setNumberOfLikes(likes?.numberOfLikes);
        setChanged(true);

        // console.log("likes", likes);
        // return {
        //   type: ADD_TO_LIKES,
        //   payload: like,
        // };
      } else {
        alert("Error");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    dispatch(fetchPostsAction());

    setTimeout(() => {
      props.addedNewPost(false);
    }, 5000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, props.reloadPosts]);
  useEffect(() => {
    dispatch(fetchPostsAction());
    setTimeout(() => {
      setChanged(false);
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [changed]);
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(fetchPostsAction());
    }, 120000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    if (file) {
      handleImageUpload(file, idToEdit);
    }

    dispatch(editPostAction(editPost, idToEdit));
    props.addedNewPost(true);
    setShow(false);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setFile(files[0]);
    } else {
      setFile(null);
    }
  };

  const handleImageUpload = async (file: any, postId: any) => {
    try {
      const formData = new FormData();
      formData.append("post", file);
      let response = await fetch(
        `${process.env.REACT_APP_BE_URL}/posts/${postId}/image`,
        {
          method: "POST",
          body: formData,
        }
      );
      if (response.ok) {
        console.log("You made it!");
      } else {
        console.log("Try harder!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Row>
      {Array.isArray(post) && post.length > 0 ? (
        post
          .slice(0)
          .reverse()
          .map((singlePost) => (
            <>
              {console.log(singlePost)}
              <Col className="mt-3 sub-sections" xs={12} key={singlePost._id}>
                <div className="d-flex justify-content-between mt-3">
                  <div className="d-flex">
                    <div className="image-container align-self-start">
                      <img src={singlePost.user[0]?.image} alt="" />
                    </div>
                    <div>
                      <Link
                        to={"/user/" + singlePost.user[0]?._id}
                        className="post-profile-link"
                        style={{
                          lineHeight: "24px",
                          fontWeight: "600",
                          fontSize: "16px",
                        }}
                      >
                        {singlePost.user[0]?.name +
                          " " +
                          singlePost.user[0]?.surname}
                      </Link>

                      <p className="place" style={{ fontSize: "12px" }}>
                        {moment(singlePost.createdAt).fromNow()}
                      </p>
                    </div>
                  </div>

                  {prof._id === singlePost.user[0]?._id ? (
                    <>
                      <Dropdown className="drop-down align-self-start">
                        <Dropdown.Toggle
                          variant="secondary"
                          id="dropdown-basic"
                          size="sm"
                          className="special-dropdown icons-bg-hover"
                        >
                          <ThreeDots color="black" />
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="special-dropdown-menu">
                          <Dropdown.Item
                            onClick={() => {
                              handleShow(singlePost._id);
                            }}
                            style={{ fontWeight: "100", lineHeight: "2" }}
                          >
                            Edit post
                          </Dropdown.Item>
                          <Dropdown.Item
                            style={{ fontWeight: "100", lineHeight: "2" }}
                            onClick={() => {
                              dispatch(deletePost(singlePost._id));
                              props.addedNewPost(true);
                            }}
                          >
                            Delete post
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                          <Modal.Title>Edit Post</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <Form.Group>
                            <Form.Label
                              className="place"
                              style={{ backgroundColor: "white" }}
                            >
                              {" "}
                              Edit your post
                            </Form.Label>
                            <Form.Control
                              as="textarea"
                              rows={5}
                              value={editPost.text}
                              onChange={(e) => {
                                setEditPost({
                                  ...editPost,
                                  text: e.target.value,
                                });
                              }}
                            />
                            <Form.Control
                              className="inputs"
                              type="file"
                              onChange={handleFileUpload}
                            />
                          </Form.Group>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button
                            variant="primary"
                            onClick={(e) => {
                              handleSubmit(e);
                            }}
                            style={{ fontSize: "14px" }}
                            className="rounded-pill py-1 px-2"
                          >
                            Update
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    </>
                  ) : (
                    ""
                  )}
                </div>
                <p className="about">{singlePost.text}</p>
                <div className="post-image-container">
                  {singlePost.image ? (
                    <img src={singlePost.image} alt="" />
                  ) : (
                    ""
                  )}
                </div>
                <hr />
                <div className="d-flex justify-content-between mb-2">
                  <div className="about about-btn p-3">
                    {singlePost.likes.includes(prof._id) ? (
                      <FontAwesomeIcon
                        icon={liked}
                        style={{ color: "rgb(92, 153, 214)" }}
                        onClick={() => addToLikesAction(singlePost, prof._id)}
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={disliked}
                        onClick={() => addToLikesAction(singlePost, prof._id)}
                      />
                    )}
                    {singlePost.likes.length} Like
                  </div>
                  <div className="about about-btn p-3">
                    {" "}
                    <ChatRightText className="mr-1" /> Comment
                  </div>
                  <div className="about about-btn p-3">
                    {" "}
                    <Share className="mr-1" /> Share{" "}
                  </div>
                </div>

                <Form>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Comment"
                      onChange={(e) => {
                        setComment({
                          ...comment,
                          comm: e.target.value,
                        });
                      }}
                    />
                  </Form.Group>
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) => {
                      e.preventDefault();
                      submitComment(singlePost._id);
                    }}
                  >
                    Submit
                  </Button>
                </Form>

                <ListGroup>
                  {singlePost.comments.map(
                    (c: { _id: String; comment: String }) => (
                      <ListGroupItem>{c.comment}</ListGroupItem>
                    )
                  )}
                </ListGroup>
              </Col>
            </>
          ))
      ) : (
        <p>Loading...</p>
      )}
    </Row>
  );
};
export default PostCard;
