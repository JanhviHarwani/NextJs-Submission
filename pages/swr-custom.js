import React from "react";
import useSwrCustom from "../hooks/useSwrCustom";
import { POSTS_URL } from "../utils/urls";
function SwrCustom() {
  const { titles, error } = useSwrCustom(POSTS_URL);
  if (error) return <div>{err}</div>;
  return (
    <div>
      {titles && titles.map((obj) => <div key={obj.id}>{obj.titles}</div>)}
    </div>
  );
}

export default SwrCustom;
