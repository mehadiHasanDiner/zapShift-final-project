import React from "react";

const HowItWorkCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="card bg-base-100 border border-base-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
      <div className="card-body items-start">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
          <Icon className="text-2xl text-primary" />
        </div>

        <h3 className="card-title text-lg font-semibold mt-2">{title}</h3>

        <p className="text-sm text-base-content/70 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default HowItWorkCard;
