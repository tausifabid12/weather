import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import CityWeather from "./components/CityWeather/CityWeather";
import WeatherInfo from "./components/WeatherInfo/WeatherInfo";
import FullDetails from "./components/FullDetails/FullDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/weather/",
        element: <CityWeather />,
      },
      {
        path: "/weather/:cityName",
        loader: async ({ params }) => {
          return fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${params.cityName}&appid=46ad7457603b9b0104e633e78cd60e16&units=metric`
          );
        },
        element: <WeatherInfo />,
      },
      {
        path: "/weatherInfo/:id",
        loader: async ({ params }) => {
          console.log(params.id, "this is id");
          return fetch(
            `https://api.openweathermap.org/data/2.5/weather?id=${params.id}&appid=46ad7457603b9b0104e633e78cd60e16&units=metric`
          );
        },
        element: <FullDetails />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
