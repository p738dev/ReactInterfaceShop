import React from "react";

import { MdSupportAgent } from "react-icons/md";
import { SiMoneygram } from "react-icons/si";
import { ImTruck } from "react-icons/im";
import { MdDiscount } from "react-icons/md";
import ServiceCards from "../ServiceCards/ServiceCards";

const Services = () => {
  const services = [
    {
      icon: <ImTruck className="text-4xl" />,
      title: "Free delivery",
      desc: "Order with free delivery from PLN 1,200",
    },
    {
      icon: <SiMoneygram className="text-4xl" />,
      title: "Quick complaint and return",
      desc: "Possibility of quick complaint and express refund",
    },
    {
      icon: <MdDiscount className="text-4xl" />,
      title: "Unimaginable discounts",
      desc: "Big discounts on goods when purchasing for min. PLN 300",
    },
    {
      icon: <MdSupportAgent className="text-4xl" />,
      title: "24/7 support available",
      desc: "Immediate agent availability",
    },
  ];

  return (
    <div className="container mt-10 grid gap-1 sm: grid-cols-2 lg:grid-cols-4 ">
      <ServiceCards services={services} />
    </div>
  );
};

export default Services;
