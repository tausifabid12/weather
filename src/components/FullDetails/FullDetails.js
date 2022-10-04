import React from "react";
import { useLoaderData } from "react-router-dom";

const FullDetails = () => {
  const fullWData = useLoaderData();
  console.log(fullWData);
  const { name, main, weather, sys } = fullWData;

  const msToTime = (duration) => {
    let minutes = Math.floor((duration / (1000 * 60)) % 60);
    let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    return hours + ":" + minutes;
  };

  return (
    <div className="w-full flex justify-center mt-10">
      <div className="card card-side w-96 glass">
        {/* <figure>
          <img src={Wlogo} className="w-44 rounded-full" alt="car!" />
        </figure> */}
        <div className="card-body text-center">
          <h2 className=" text-white text-4xl font-bold">{name}</h2>
          <p className="text-white">
            Temperature: {main.temp}
            <sup>o</sup> C
          </p>
          <p className="text-white">
            Feels Like: {main.feels_like}
            <sup>o</sup> C
          </p>
          <p className="text-white">Weather: {weather[0].main}.</p>
          <p className="text-white">Sun Rise: {msToTime(sys.sunrise)} AM</p>
          <p className="text-white">Sun Set: {msToTime(sys.sunset)} PM</p>
        </div>
      </div>
    </div>
  );
};

export default FullDetails;
