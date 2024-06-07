"use client";

import {useEffect, useRef, useState} from "react";
import {getJokes} from "@/shared/api/get-jokes";
import {Nullable} from "@/shared/types/nullable";
import Link from "next/link";

export const Jokes = () => {
  const [jokesData, setJokesData] = useState<Nullable<JokesResponse>>(null);
  const [keywords] = useState("");
  const inputRef = useRef<Nullable<HTMLInputElement>>(null);

  const fetchJokes = async () => {
    try {
      const response = await getJokes("hell");
      setJokesData(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchJokes();
  }, [keywords]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className={`flex flex-col`}>
      <div className={"flex flex-col m-[128px_auto_60px] w-[50%]"}>
        <input
          autoFocus
          ref={inputRef}
          placeholder={"Search jokes..."}
          type="text"
          className={`p-[20px_35px] shadow-[0_7px_12px_1px_rgba(99,99,110,0.2)]
              mb-5 border-none bg-transparent outline-none text-[20px] text-[#656ec2]`}
        />
        <span className={"pl-[40px]"}>{`Total count: ${jokesData?.total}`}</span>
      </div>
      <ul className={`flex flex-wrap gap-[20px] justify-center w-[1280px] h-auto mb-[60px] rounded-md`}>
        {jokesData?.result.map(joke => (
          <Link key={joke.id}
                className={`flex flex-col justify-between w-[calc(50%_ - _10px)] h-[260px] p-[40px] text-balance shadow-[0_7px_12px_1px_rgba(99,99,110,0.2)]
                  text-[#282626] text-regular-text-16
                  `}
                href={`${process.env.SERVER_URL}/jokes/${joke.id}`}>
            <p className={`w-full max-w-[547px] min-h-[38px] line-clamp-2`}>{joke.value}</p>
            <p className={`w-full flex justify-between text-[#767676] `}>
              <span>{joke.id}</span>
              <span>{joke.created_at}</span>
            </p>
          </Link>
        ))}
      </ul>
    </div>
  );
};

// types
export type JokesResponse = {
  total: number;
  result: Joke[];
}
export type Joke = {
  categories: string[];
  created_at: string;
  icon_url: string;
  id: string;
  updated_at: string;
  url: string;
  value: string;
}
