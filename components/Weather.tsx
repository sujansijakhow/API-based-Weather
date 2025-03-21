"use client";

import Image from "next/image";
import React from "react";

interface WeatherData {
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  weather: {
    main: string;
    icon: string;
  }[];
  wind: {
    speed: number;
  };
  name: string;
}

type Props = {
  data: WeatherData | null;
};

const Weather: React.FC<Props> = ({ data }) => {
  if (!data) return null; // Ensure no rendering before data is available

  // console.log("Weather Data:", data);
  // console.log("Icon Code:", data.weather?.[0]?.icon);

  return (
    <div className="relative flex flex-col justify-evenly gap-25 max-w-[500px] w-full h-[90vh] m-auto p-4 text-gray-300 z-10">
      {/* Top Section */}
      <div className="relative flex justify-between pt-12">
        <div className="flex flex-col items-center">
          {data.weather?.[0]?.icon && (
            <Image
              src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              alt="Weather Icon"
              width={80}
              height={80}
              loading="lazy"
            />
          )}
          <p className="text-xl">{data.weather?.[0]?.main}</p>
        </div>
        <p className="text-9xl">{data.main.temp.toFixed(0)}&#176;</p>
      </div>

      {/* Bottom Section */}
      <div className="bg-black/50 relative p-8 rounded-md">
        <p className="text-2xl text-center pb-6">Weather in {data.name}</p>
        <div className="flex justify-between text-center">
          <div>
            <p className="font-bold text-2xl">{data.main.feels_like.toFixed(0)}&#176;</p>
            <p className="text-xl">Feels Like</p>
          </div>
          <div>
            <p className="font-bold text-2xl">{data.main.humidity}%</p>
            <p className="text-xl">Humidity</p>
          </div>
          <div>
            <p className="font-bold text-2xl">{data.wind.speed.toFixed(0)} MPH</p>
            <p className="text-xl">Winds</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
