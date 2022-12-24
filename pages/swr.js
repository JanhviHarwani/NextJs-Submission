import React from "react";
import useSwr from "swr";
import { POSTS_URL } from "../utils/urls";
const fetcher = async () => {
  const reponse = await fetch(POSTS_URL);
  const data = await reponse.json();
  return data;
};
function Swr() {
  const { data, error } = useSwr("data-from-swr", fetcher);
  if (error) {
    return <div>Error</div>;
  }
  if (!data) {
    return <div>Loading</div>;
  }
  return (
    <>
      <h1>Titles</h1>
      <div style={{ margin: "10px" }}>
        {data.map((obj) => (
          <>
            <div key={obj.id}>{obj.title}</div>
            <hr />
          </>
        ))}
      </div>
    </>
  );
}

export default Swr;
