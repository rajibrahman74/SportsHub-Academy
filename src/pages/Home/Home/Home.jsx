import React from "react";
import { Helmet } from "react-helmet";
import Header from "../Header/Header";
import PopularClasses from "../PopularClasses/PopularClasses";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home - SportsHub Academy</title>
      </Helmet>
      <Header />
      <PopularClasses />
    </div>
  );
};

export default Home;