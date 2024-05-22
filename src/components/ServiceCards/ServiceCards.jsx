import React from "react";

const ServiceCards = ({ icon, title, desc }) => {
  return (
    <div className="flex gap-2 items-center bg-gray-100 px-5 py-7">
      {icon}
      <div>
        <h3 className="font-medium text-xl pb-2">{title}</h3>
        <p className="text-grey-500">{desc}</p>
      </div>
    </div>
  );
};

export default ServiceCards;
