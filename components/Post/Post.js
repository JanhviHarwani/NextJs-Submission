import axios from "axios";
import Link from "next/link";
import Router from "next/router";
import React from "react";
import useApiManipulate from "../../hooks/useApiManipulate";
import { fetchData } from "../../pages/posts";
import { POSTS_URL } from "../../utils/urls";
import BasicButton from "../UI/BasicButton";
import css from "./post.module.css";
async function postDelete(id) {
  axios.delete(`${POSTS_URL}/${id}`);
}
function Post({ post }) {
  const handleClick = () => {
    Router.push(`/posts/${post?.id}`);
  };
  const deletePostHandler = (id) => {
    postDelete(id);
    window.location.reload();
  };
  return (
    <>
      <div style={{ "font-size": "40px" }}>🎀</div>
      <h3>{post?.title}</h3>
      <hr />

      <div className={css.buttonsContainer}>
        <BasicButton
          style={{ "background-color": "rgb(0 124 124 / 62%)" }}
          onClick={handleClick}
        >
          Tap to view more
        </BasicButton>
        <BasicButton
          style={{ "background-color": "rgb(242 41 82 / 68%)" }}
          type="button"
          onClick={() => deletePostHandler(post.id)}
        >
          Delete
        </BasicButton>
      </div>

      {/* <div>{post.body}</div> */}
    </>
  );
}

export default Post;
// http://localhost:3003/_next/data/development/posts/6.json
// http://localhost:3003/_next/data/development/posts/1.json
