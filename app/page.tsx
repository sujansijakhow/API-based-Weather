"use client";

import Head from "next/head";
import axios from "axios";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import Image from "next/image";
import Weather from "@/components/Weather";
import Spinner from "@/components/Spinner";

interface WeatherData {
  main: {
    temp: number;
  };
  weather: {
    description: string;
  }[];
  name: string;
}

export default function Home() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;
      const response = await axios.get(url);
      setWeather(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }

    setLoading(false);
    setCity('');
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      <Head>
        <title>Weather System</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[1]" />

      {/* Background */}
      <Image src="/background.avif" alt="Background Image" layout="fill" />

      {/* Search */}
      <div className="relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 text-white z-10">
        <form
          onSubmit={fetchWeather}
          className="flex justify-between items-center w-full m-auto p-3 bg-transparent border border-black-300 text-white rounded-2xl"
        >
          <input
            onChange={(e) => setCity(e.target.value)}
            type="text"
            placeholder="Search City"
            className="bg-transparent border-none text-white focus:outline-none text-2xl"
          />
          <button type="submit">
            <BsSearch size={20} />
          </button>
        </form>
      </div>

      {/* Weather Display */}
      {weather && <Weather data={weather} />}
    </div>
  );
}
