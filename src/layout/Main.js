import React from "react";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./Main.css";

const Main = () => {
  const [city, setCity] = useState();

  const cityName = (e) => {
    const value = e.target.value.toLowerCase();
    setCity(value);
  };

  const showWeather = useNavigate();
  const showCityWeather = () => {
    if (city) {
      showWeather(`/weather/${city}`);
    }
  };
  return (
    <div className="main-container">
      <h1 className="text-center text-5xl text-white pt-14 font-bold">
        Welcome to Ab weather
      </h1>
      <div>
        <div className="w-full flex items-center justify-center px-6">
          <input
            type="text"
            placeholder="Enter City Name"
            className=" input w-full  max-w-xs bg-white text-black font-bold dark:text-white dark:bg-gray-600 mt-10 text-center mr-4"
            onChange={cityName}
          />
          <button
            onClick={showCityWeather}
            className="btn glass text-white  mt-10 px-7"
          >
            Serach
          </button>
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
