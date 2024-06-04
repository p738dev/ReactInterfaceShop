import React from "react";

const ServiceCards = ({ services }) => {
  return (
    <>
      {services.map((service, index) => (
        <div
          className="flex gap-2 items-center bg-gray-100 px-5 py-7"
          key={index}
        >
          {service.icon}
          <div>
            <h3 className="font-medium text-xl pb-2">{service.title}</h3>
            <h5 className="text-grey-500">{service.desc}</h5>
          </div>
        </div>
      ))}
    </>
  );
};

export default ServiceCards;
