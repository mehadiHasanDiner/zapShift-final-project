import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const ReviewCard = ({ reviewData }) => {
  console.log(reviewData);
  const { userName, user_photoURL, review, ratings, date } = reviewData || {};
  return (
    <div
      className="
        card
        bg-base-100
        rounded-[30px]
        p-8
        shadow-sm
        border border-base-200
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-xl
      "
    >
      {/* Quote Icon */}
      <FaQuoteLeft className="text-5xl text-cyan-200 mb-6" />

      {/* Review */}
      <p className="text-gray-600 leading-8 text-lg">{review}</p>

      {/* Divider */}
      <div className="border-t-2 border-dashed border-cyan-300 my-8"></div>

      {/* User Info */}
      <div className="flex items-center gap-4">
        <img
          src={user_photoURL}
          alt={userName}
          className="
            w-16
            h-16
            rounded-full
            object-cover
            border-2
            border-primary/20
          "
        />

        <div className="flex-1">
          <h3 className="font-bold text-2xl text-slate-800">{userName}</h3>

          <div className="flex items-center gap-1 mt-1">
            {[...Array(Math.round(ratings))].map((_, index) => (
              <FaStar key={index} className="text-yellow-400 text-sm" />
            ))}
          </div>

          <p className="text-sm text-gray-500 mt-1">
            {new Date(date).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
