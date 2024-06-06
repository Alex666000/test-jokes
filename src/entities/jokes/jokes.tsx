"use client";

import {useEffect, useState} from "react";
import {getJokes} from "@/shared/api/get-jokes";
import {Nullable} from "@/shared/types/nullable";
import SkeletonLoader from "@/shared/ui/skeleton-loader/skeleton-loader";
import Link from "next/link";

export const Jokes = () => {
  const [jokesData, setJokesData] = useState<Nullable<JokesResponse>>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [keywords] = useState("");

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
    <>
      {isLoading ? <SkeletonLoader/> : (
        <>
          <div className={"flex flex-col m-[128px_auto_60px] w-[50%]"}>
            <input type="text" className={`p-[20px_35px] shadow-[0_7px_12px_1px_rgba(99,99,110,0.2)]
            mb-5 border-none bg-transparent outline-none text-[20px] text-[#656ec2]`}/>
            <span className={"pl-[40px]"}>{`Total count: ${jokesData?.total}`}</span>
          </div>
          <ul className={`w-full max-w-[1560px] min-h-[250px] flex`}>
            {jokesData?.result.map(joke => (
              <ul key={joke.id} className={"w-full flex flex-wrap gap-20 justify-center mb-[60px]"}>
                <Link
                  className={`w-[calc(50%_ - _10px)] min-h-[260px] p-[40px] shadow-[0_7px_12px_1px_rgba(99,99,110,0.2)]
                  flex flex-col justify-between
                  text-[#282626] text-regular-text-16
                  `}
                  href={`${process.env.SERVER_URL}/jokes/${joke.id}`}
                  target={"_blank"}>
                  <p className={`w-full`}>{joke.value}</p>
                  <p className={`w-full flex justify-between text-[#767676] `}>
                    <span>{joke.id}</span>
                    <span>{joke.created_at}</span>
                  </p>
                </Link>
              </ul>
            ))}
          </ul>
        </>
      )}
    </>
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



