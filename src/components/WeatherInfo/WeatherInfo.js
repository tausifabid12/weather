import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Wlogo from "../../images/wlogo.png";

const WeatherInfo = () => {
  const weatherData = useLoaderData();
  const { name, main, weather, id } = weatherData;

  console.log(weatherData);
  const goToFullDetail = useNavigate();
  const showFullDetail = () => {
    if (id) {
      goToFullDetail(`/weatherInfo/${id}`);
    }
  };
  return (
    <div className=" flex justify-center mt-10 ">
      <div className="  w-96 flex justify-center items-center flex-col space-y-2 ">
        <img src={Wlogo} className="w-40" alt="" />
        <h2 className="text-white text-3xl font-bold">{name}</h2>
        <p className="text-white text-3xl font-bold">
          {main.temp}
          <sup> o</sup> C
        </p>
        <p className="text-white font-semibold">{weather[0].main}</p>
        <button
          onClick={showFullDetail}
          className="btn glass text-white  px-7 py-3"
        >
          More Information
        </button>
      </div>
    </div>
  );
};

export default WeatherInfo;
