import React from "react";

import { Content } from "../../components";
import { BlogNav, BlogHeader, Posts } from "../../components";

const Blog = ({ isNavOpen, setIsNavOpen }) => {
  return (
    <>
      <BlogNav setIsNavOpen={setIsNavOpen} isNavOpen={isNavOpen} />
      <Content isNavOpen={isNavOpen}>
        <BlogHeader id="home" />
        <main>
          <Posts />
        </main>
      </Content>
    </>
  );
};
export default Blog;
