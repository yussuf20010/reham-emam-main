import React from "react";

const facilities = [
  {
    icon: "fas fa-truck",
    title: "Fast Local Delivery",
  },
  {
    icon: "fas fa-hand-holding-usd",
    title: "Easy Returns",
  },
  {
    icon: "fas fa-money-bill-wave",
    title: "Cash on Delivery",
  },
  {
    icon: "fas fa-headset",
    title: "24/7 Customer Support",
  },
];

const Facility = () => {
  return (
    <div className="facility-area py-10 bg-purple-50">
      <div className="container">
        <div className="row">
          {facilities.map((facility, index) => (
            <div key={index} className="col-lg-3 col-sm-6">
              <div className="facility-box text-center p-6">
                <div className="icon w-16 h-16 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 text-3xl mx-auto">
                  <i className={facility.icon}></i>
                </div>
                <h3 className="text-xl font-extrabold text-gray-800">
                  {facility.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Facility;
