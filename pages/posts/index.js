import Post from "../../components/Post/Post";

import React from "react";

import useApiManipulate from "../../hooks/useApiManipulate";
import axios from "axios";
import css from "./posts.module.css";
import Router from "next/router";
import CustomButton from "../../components/UI/CustomButton/CustomButton";
import Card from "../../components/UI/Card/Card";
import { POSTS_URL } from "../../utils/urls";
export const fetchData = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

function Posts({ postsData }) {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    setPosts(postsData);
  }, [postsData]);

  const handleBack = () => {
    Router.push("/");
  };
  return (
    <>
      <header className={css.listingContainerHeading}>
        <h2>Posts</h2>
        <CustomButton onClick={handleBack} className={css.customized}>
          Create post ↠
        </CustomButton>
      </header>
      <hr style={{ width: "100%" }} />
      <div className={css.cardsContaniner}>
        {posts.length ? (
          posts?.map((obj) => {
            if (obj === undefined) {
              return;
            } else {
              return (
                <Card key={obj.id}>
                  <Post post={obj} />
                </Card>
              );
            }
          })
        ) : (
          <h3>No Posts Yet!</h3>
        )}
      </div>
    </>
  );
}
export async function getStaticProps() {
  let data = await fetchData(POSTS_URL);
  return {
    props: {
      postsData: data,
    },
  };
}
export default Posts;
// http://localhost:3000/api/posts-data
