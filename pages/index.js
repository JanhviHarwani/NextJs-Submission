import React from "react";
import Router from "next/router";
import useApiManipulate from "../hooks/useApiManipulate";
import css from "./index.module.css";
import CustomButton from "../components/UI/CustomButton/CustomButton";
import BasicButton from "../components/UI/BasicButton";
function Home() {
  const { addPost } = useApiManipulate();
  const [postTitle, setPostTitle] = React.useState([]);
  const [postContent, setContent] = React.useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    addPost(postTitle, postContent);

    Router.push("/posts");
  };
  const handleRouting = () => {
    Router.push("/posts");
  };

  return (
    <>
      <header className={css.homePageHeader}>
        <h2>Create Posts Here 🎀</h2>
      </header>
      <hr />

      <form onSubmit={submitHandler} className={css.card}>
        <label htmlFor="addNewPost" className={css.label}>
          Title:
          <input
            type="text"
            placeholder="Title"
            required
            className={css.inputField}
            onChange={(event) => setPostTitle(event.target.value)}
          />
        </label>

        <label
          htmlFor="addNewPost"
          className={`${css.contentContainer} ${css.label}`}
        >
          Body:
          <textarea
            type="text"
            className={`${css.inputField} ${css.textAreaField}`}
            required
            height="10px"
            placeholder="Content"
            onChange={(event) => setContent(event.target.value)}
          />
        </label>
        <br />
        <div>
          <BasicButton className={css.customizedSubmitButton} type="submit">
            Add Post
          </BasicButton>
        </div>
      </form>

      <a
        onClick={handleRouting}
        style={{
          cursor: "pointer",
        }}
      >
        <CustomButton> Check out Posts ↠</CustomButton>
      </a>
    </>
  );
}

export default Home;
