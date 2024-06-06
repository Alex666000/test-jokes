"use client";

import {useEffect, useState} from "react";
import {Inter} from "next/font/google";
import {getJokes, getJokesCategories} from "@/shared/api/get-jokes";
import {Nullable} from "@/shared/types/nullable";
import {Flex} from "@/shared/ui/flex";
import SkeletonLoader from "@/shared/ui/skeleton-loader/skeleton-loader";

const inter = Inter({subsets: ["latin"]});

export const Jokes = () => {
  const [jokesData, setJokesData] = useState<Nullable<JokesResponse>>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [keywords, setKeywords] = useState("");

  const fetchJokes = async () => {
    try {
      setIsLoading(true);
      const response = await getJokes("sos");
      setJokesData(response);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJokes();
  }, [keywords]);

  return (
    <div className={inter.className}>
      {isLoading ? <SkeletonLoader/> : (
        <div className={`bg-Light-100 text-Dark-700 w-full max-w-[690px] min-h-[180px]`}>
          {jokesData?.result.map(joke => (
            <div key={joke.id}>
              <div>{`Total count: ${jokesData?.total}`}</div>
              <span className="text-center text-balance">{joke.value}</span>
              <Flex justify="spaceBetween" className="w-[600px]">
                <span>{joke.id}</span>
                <span>{joke.created_at}</span>
              </Flex>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};


// types
export type JokesResponse = {
  total: number;
  result: Jokes[];
}
export type Jokes = {
  categories: string[];
  created_at: string;
  icon_url: string;
  id: string;
  updated_at: string;
  url: string;
  value: string;
}



