"use client";

import {useEffect, useRef, useState} from "react";
import {Nullable} from "@/shared/types/nullable";
import {JokesResponse} from "@/entities/jokes/jokes";
import {useDebounce} from "@/shared/lib/hooks/useDebounce";
import {getJokes} from "@/shared/api/get-jokes";
import {Search} from "@/entities/ui/search/search";
import {SearchJokesList} from "@/entities/ui/search-jokes-list/search-jokes-list";

export const Jokes = () => {
 const [jokesData, setJokesData] = useState<Nullable<JokesResponse>>(null);
  const [keywords, setKeywords] = useState("");
  const inputRef = useRef<Nullable<HTMLInputElement>>(null);

  const debouncedKeywords = useDebounce(keywords, 1500);

  const fetchJokes = async () => {
    try {
      const response = await getJokes(debouncedKeywords);
      setJokesData(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchJokes();
  }, [debouncedKeywords]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  console.log(debouncedKeywords);

  return (
    <>
      <div className={"m-[128px_auto_60px]"}>
        <Search
          className={`w-full max-w-[710px] p-[20px_35px] shadow-[0_7px_12px_1px_rgba(99,99,110,0.2)]
          mb-5 border-none bg-transparent outline-none text-[20px] text-[#656ec2]`}
          ref={inputRef}
          keywords={debouncedKeywords}
          setKeywords={setKeywords}
          jokesData={jokesData}/>
        <SearchJokesList
          jokesData={jokesData}
          className={`flex flex-wrap gap-[20px] justify-center w-[1280px] h-auto mb-[60px] rounded-md`}/>
      </div>

    </>
  );
};


