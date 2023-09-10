import React from "react";
import BlogHero from "./Components/BlogHero";
import BlogPost from "./Components/BlogPost";
import Subscribe from "../Components/Shared/Subsribe";

const page = () => {
  return (
    <>
      <BlogHero />
      <BlogPost />
      <Subscribe />
    </>
  );
};

export default page;
