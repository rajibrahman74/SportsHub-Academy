import React from "react";
import { Helmet } from "react-helmet";
import Header from "../Header/Header";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import SuccessStories from "../SuccessStories/SuccessStories";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home - SportsHub Academy</title>
      </Helmet>      <Header />
      <PopularClasses />
      <PopularInstructors />
      <SuccessStories/>
    </div>
  );
};

export default Home;