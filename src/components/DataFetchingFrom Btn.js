import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetchingFromBtn() {
  const [post, setPost] = useState({});
  const [id, setID] = useState(1);
  const [idFromBtnClick, setIdFromBtnClick] = useState(1);

  const handleClick = () => {
    setIdFromBtnClick(id);
  };
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromBtnClick}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFromBtnClick]);
  return (
    <div>
      <input type="text" value={id} onChange={(e) => setID(e.target.value)} />
      <button type="button" onClick={handleClick}>
        Fetch Post
      </button>
      <div>{post.title}</div>
    </div>
  );
}
export default DataFetchingFromBtn;
