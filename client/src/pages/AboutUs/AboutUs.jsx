import React from "react";
const tabContainers = [
  {
    id: 1,
    tabTitle: "Story",
    description:
      "Our story began with a simple vision: to make parcel delivery faster, safer, and more reliable for everyone. Over the years, we have grown into a trusted logistics partner, serving thousands of customers across the country with dedication and innovation. Our story began with a simple vision: to make parcel delivery faster, safer, and more reliable for everyone. Over the years, we have grown into a trusted logistics partner, serving thousands of customers across the country with dedication and innovation. Our story began with a simple vision: to make parcel delivery faster, safer, and more reliable for everyone. Over the years, we have grown into a trusted logistics partner, serving thousands of customers across the country with dedication and innovation. Our story began with a simple vision: to make parcel delivery faster, safer, and more reliable for everyone. Over the years, we have grown into a trusted logistics partner, serving thousands of customers across the country with dedication and innovation.",
  },
  {
    id: 2,
    tabTitle: "Mission",
    description:
      "Our mission is to provide efficient, affordable, and customer-focused delivery solutions. We strive to connect people and businesses through seamless logistics services while maintaining the highest standards of reliability and transparency.",
  },
  {
    id: 3,
    tabTitle: "Success",
    description:
      "Through continuous improvement and commitment to customer satisfaction, we have successfully delivered millions of parcels nationwide. Our achievements are driven by a passionate team, advanced technology, and the trust of our valued clients.",
  },
  {
    id: 4,
    tabTitle: "Terms",
    description:
      "By using our services, customers agree to follow our terms and conditions regarding parcel handling, delivery timelines, payment policies, and prohibited items. These terms ensure a safe and transparent experience for all parties involved.",
  },
  {
    id: 5,
    tabTitle: "Others",
    description:
      "In addition to our core delivery services, we offer various value-added solutions such as parcel tracking, customer support, corporate logistics, and customized shipping options tailored to meet diverse customer needs.",
  },
];

const AboutUs = () => {
  return (
    <div className="tabs tabs-border">
      {tabContainers.map((tab) => (
        <React.Fragment key={tab.id}>
          <input
            type="radio"
            name="about_tabs"
            className="tab"
            aria-label={tab.tabTitle}
            defaultChecked={tab.id === 1}
          />
          <div className="tab-content border-base-300 bg-base-100 p-10">
            {tab.description}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default AboutUs;
