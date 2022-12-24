import React from "react";
import axios from "axios";
import Link from "next/link";
import css from "./posts.module.css";
import BasicButton from "../../components/UI/BasicButton";
import Card from "../../components/UI/Card/Card";
import { POSTS_URL } from "../../utils/urls";
function IndividualPost({ post }) {
  return (
    <>
      <h2>Individual Post Detail of: {post.id}</h2>
      <br />
      <Card className={css.customizedCard}>
        <div>
          <div className={css.detailsContainerTitle}>
            <h3 style={{ color: "white" }}>Title ❅</h3>
            <div className={css.detailsContainerValue}>{post.title}</div>
          </div>
          <div className={css.detailsContainerContent}>
            <h3>Content:</h3>
            <div>{post.body}</div>
          </div>
        </div>
        <br />
      </Card>
      <Link href="/posts" passHref>
        <BasicButton style={{ width: "200px" }}>Go back to list</BasicButton>
      </Link>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { postId: "1" },
      },
      {
        params: { postId: "2" },
      },
      {
        params: { postId: "3" },
      },
      {
        params: { postId: "4" },
      },
    ],
    fallback: true,
  };
}
export async function getStaticProps(context) {
  const { params } = context;
  const response = await axios.get(`${POSTS_URL}/${params.postId}`);
  return {
    props: {
      post: response.data,
    },
  };
}
export default IndividualPost;
