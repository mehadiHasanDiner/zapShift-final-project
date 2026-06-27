import React from "react";
import ServiceCard from "./ServiceCard";

import {
  FaShippingFast,
  FaGlobeAsia,
  FaBoxes,
  FaHome,
  FaBuilding,
  FaUndo,
} from "react-icons/fa";

const services = [
  {
    icon: FaShippingFast,
    title: "Express & Standard Delivery",
    description:
      "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna and Rajshahi.",
  },
  {
    icon: FaGlobeAsia,
    title: "Nationwide Delivery",
    description:
      "We deliver parcels nationwide with home delivery in every district.",
  },
  {
    icon: FaBoxes,
    title: "Fulfillment Solution",
    description:
      "Inventory management, online order processing, packaging and after sales support.",
  },
  {
    icon: FaHome,
    title: "Cash on Home Delivery",
    description:
      "100% cash on delivery anywhere in Bangladesh with guaranteed safety.",
  },
  {
    icon: FaBuilding,
    title: "Corporate Service / Contract Logistics",
    description:
      "Customized corporate logistics services with warehouse support.",
  },
  {
    icon: FaUndo,
    title: "Parcel Return",
    description:
      "Customers can return or exchange their products through our reverse logistics.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto bg-secondary rounded-[30px] p-8 md:p-14">
        {/* Heading */}

        <div className="text-center text-white mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>

          <p className="max-w-3xl mx-auto text-gray-300">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              active={service.active}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
