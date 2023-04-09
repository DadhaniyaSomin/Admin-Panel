import React from "react";
import BlogList from "../componant/BlogList";
import Layout from "../componant/Layout";

const Blog = () => {
  return (
    <>
      <Layout>
        <div className="home">
           <BlogList />
        </div>
      </Layout>
    </>
  );
};

export default Blog;
