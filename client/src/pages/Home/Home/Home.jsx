import React from "react";
import Banner from "../Banner";
import HowItWorks from "../HowItWorks/HowItWorks";
import ServicesSection from "../ServiceSection/ServiceSection";
import Brands from "../Brands";
import Review from "../Review/Review";

const reviewsPromise = fetch("/reviews.json").then((res) => res.json());

const Home = () => {
  return (
    <div>
      <Banner />
      <HowItWorks />
      <ServicesSection />
      <Brands />
      <Review reviewsPromise={reviewsPromise} />
    </div>
  );
};

export default Home;
