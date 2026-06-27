import React, { use } from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "./ReviewCard";

const Review = ({ reviewsPromise }) => {
  const reviews = use(reviewsPromise);
  return (
    <div>
      <div className="text-center">
        <h3 className="text-3xl text-center mt-15 mb-4 font-bold">Review</h3>
        <p className="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sint
          animi, optio rerum non hic nihil. Autem praesentium, sapiente
          voluptatum maxime at quam ipsa aperiam magni alias aut saepe neque
          debitis ullam quaerat totam a iure facere, quidem mollitia culpa sint
        </p>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        loop={true}
        coverflowEffect={{
          rotate: 20,
          stretch: "50%",
          depth: 300,
          modifier: 0.75,
          scale: 0.75,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {reviews.map((reviewData) => (
          <SwiperSlide key={reviewData.id}>
            <ReviewCard reviewData={reviewData}></ReviewCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Review;
