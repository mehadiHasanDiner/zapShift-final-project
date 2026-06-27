import React from "react";

const ServiceCard = ({ icon: Icon, title, description, active = false }) => {
  return (
    <div
      className={`
        group card rounded-3xl border-0
        transition-all duration-300 ease-in-out
        hover:-translate-y-2 hover:shadow-2xl 
        cursor-pointer
        
        ${
          active
            ? "bg-lime-400 text-slate-900"
            : "bg-base-100 text-slate-800 hover:bg-lime-400"
        }
      `}
    >
      <div className="card-body items-center text-center px-8 py-8">
        {/* Icon */}
        <div
          className="
            w-16 h-16 rounded-full
            bg-purple-100
            flex items-center justify-center
            mb-4
            transition-all duration-300
            group-hover:scale-110 
            
          "
        >
          <Icon
            className="text-3xl text-secondary 
               transition-all duration-500 ease-out    group-hover:-rotate-10
               group-hover:scale-120          
          "
          />
        </div>

        {/* Title */}
        <h3 className="font-bold text-xl leading-snug">{title}</h3>

        {/* Description */}
        <p className="text-sm mt-2 leading-7 opacity-80">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
