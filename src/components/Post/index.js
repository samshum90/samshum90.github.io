import React from "react";
import PropTypes from "prop-types";

const Post = ({ post }) => {
  return (
    <div className="post">
      <h2>{post.title}</h2>
      <p>{post.date}</p>
      <p>{post.summary}</p>
      <img src={post.img} alt={post.title} />
    </div>
  );
};

Post.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      summary: PropTypes.string.isRequired,
      blog: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default Post;
