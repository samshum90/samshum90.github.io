import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

import "./posts.scss";
import Post from "../Post";

const importAll = (r) => r.keys().map(r);
const markdownFiles = importAll(require.context("../../posts", false, /\.md$/))
  .sort()
  .reverse();

const Posts = () => {
  const [blogPostList, setBlogPostList] = useState([]);

  useEffect(() => {
    initializePosts();

    console.log(markdownFiles);
  }, []);

  async function initializePosts() {
    await Promise.all(
      markdownFiles.map((file) =>
        fetch(file)
          .then((res) => res.text())
          .then(
            (text) => setBlogPostList([...blogPostList, text]),
            console.log(blogPostList)
          )
      )
    ).catch((err) => console.error(err));
  }

  return (
    <div className="posts">
      {blogPostList.map((post, idx) => (
        <ReactMarkdown source={post} key={idx} />
      ))}
    </div>
  );
};
export default Posts;
