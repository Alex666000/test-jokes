'use client'

import {useEffect, useState} from "react";
import Image from "next/image";
import axios, {AxiosResponse} from "axios";
import {Inter} from "next/font/google";

const inter = Inter({subsets: ["latin"]});

type ChuckNorrisResponse = {
  categories: string[];
  created_at: string;
  icon_url: string;
  id: string;
  updated_at: string;
  url: string;
  value: string;
}

export const Jokes = () => {
  const [jokeData, setJokeData] = useState<ChuckNorrisResponse | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<null, AxiosResponse<ChuckNorrisResponse>, null>(`${process.env.APP_SERVER_URL}/random`);
        setJokeData(response.data);
      } catch (error) {
        throw new Error("Error fetching Chuck Norris joke:");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="joke-card">
      {jokeData && (
        <div>
          <Image src={jokeData.icon_url} alt="Chuck Norris" fill/>
          <br/>
          <h3>{jokeData.id}</h3>
          <p>{jokeData.value}</p>
          <p>Updated At: {jokeData.updated_at}</p>
        </div>
      )}
    </div>
  );
};
