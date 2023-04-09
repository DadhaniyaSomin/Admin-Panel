import React from "react";
import FeaturedInfo from "../componant/FeaturedInfo";
import Layout from "../componant/Layout";
const Home = () => {
  return (
    <>
      <Layout>
        <div className="home">
          <FeaturedInfo />
        </div>
      </Layout>
    </>
  );
};

export default Home;
