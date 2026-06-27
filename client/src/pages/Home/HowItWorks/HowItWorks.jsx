import React from "react";

import {
  FaMapMarkedAlt,
  FaMoneyBillWave,
  FaWarehouse,
  FaBuilding,
} from "react-icons/fa";
import HowItWorkCard from "./HowItWorkCard";

const services = [
  {
    icon: FaMapMarkedAlt,
    title: "Booking Pick & Drop",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    icon: FaMoneyBillWave,
    title: "Cash On Delivery",
    description:
      "Safe and secure cash collection service with quick settlement.",
  },
  {
    icon: FaWarehouse,
    title: "Delivery Hub",
    description: "Manage and track all deliveries efficiently through our hub.",
  },
  {
    icon: FaBuilding,
    title: "Booking SME & Corporate",
    description:
      "Dedicated logistics solutions for SMEs and corporate clients.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-base-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10">How it Works</h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <HowItWorkCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
