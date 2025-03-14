"use client";

import Image from "next/image";
import React from "react";

type Props = {
  data: any; 
};

const Weather: React.FC<Props> = ({ data }) => {
  console.log("Weather Data:", data);
  console.log("Icon Code:", data?.weather?.[0]?.icon);

  return (
    <div>
      {data?.weather?.[0]?.icon && (
        <Image 
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} 
          alt="Weather Icon"
          width={100}
          height={100}
          unoptimized={true} 
        />
      )}
    </div>
  );
};

export default Weather;
