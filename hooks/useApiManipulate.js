import axios from "axios";
import React, { useReducer, useEffect } from "react";
import { POSTS_URL } from "../utils/urls";
const initialState = {
  posts: [],
  loading: false,
  error: null,
};
const ACTIONS = {
  LOADING: "loading-state",
  ACTION_FETCH: "fetch-data",
  ERROR: "error-state",
  ACTION_POST: "post-data",
};
function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ACTION_FETCH:
      return { ...state, posts: [...state.posts, payload], loading: false };
      break;

    case ACTIONS.ACTION_POST:
      return { ...state, posts: [...state.posts, payload], loading: false };
      break;

    case ACTIONS.LOADING:
      return { ...state, loading: true };
      break;

    case ACTIONS.ERROR:
      return { ...state, error: payload };
      break;

    default:
      return state;
      break;
  }
}
function useApiManipulate(url) {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    dispatch({ type: ACTIONS.LOADING });
    axios
      .get(url)
      .then((response) => {
        dispatch({ type: ACTIONS.ACTION_FETCH, payload: response.data });
      })

      .catch((error) =>
        dispatch({ type: ACTIONS.ERROR, payload: error.error })
      );
  }, [url]);
  const addPost = (postTitle, postContent) => {
    axios
      .post(POSTS_URL, {
        title: postTitle,
        body: postContent,
      })
      .then((response) => {
        dispatch({ type: ACTIONS.ACTION_POST, payload: response.data });
      });
  };

  // postDataApi();
  // router.push("/posts");

  return { state, addPost };
}

export default useApiManipulate;
