import React from "react";

const NoRestaurant = ({ title }) => {
  return (
    <div className="w-[98vw] flex justify-center">
      <div className="w-fit">
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/server-down-of-restaurant-website-4344603-3605234.png"
          alt=""
        />
        <h1 className="font-bold text-3xl">{title}</h1>
      </div>
    </div>
  );
};

export default NoRestaurant;
