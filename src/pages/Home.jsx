import React from "react";
import FeaturedInfo from "../componant/FeaturedInfo";
import Layout from "../componant/Layout";
const Home = () => {
  return (
    <>
      <Layout>
        <div className="home">
          <FeaturedInfo total={50} title="Total Blog Posts" />
          <FeaturedInfo total={5} title="Total Blog Catgories"/>
        </div>
      </Layout>
    </>
  );
};

export default Home;
