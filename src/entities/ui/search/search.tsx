"use client";

import {useEffect, useRef} from "react";
import {Nullable} from "@/shared/types/nullable";
import {useSearch} from "../../model/hooks/use-search";
import {SearchField} from "./search-field";
import {SearchJokesList} from "./search-jokes-list";

export const Search = () => {
  const inputRef = useRef<Nullable<HTMLInputElement>>(null);

  const {
    data: {data: jokesData} = {},
    searchTerm,
    handleSearch,
    isSuccess,
    isLoading
  } = useSearch();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className={`flex flex-col`}>
      <div className={"flex flex-col m-[128px_auto_60px] w-[50%]"}>
        <SearchField
          className={`w-full max-w-[710px] p-[20px_35px] shadow-[0_7px_12px_1px_rgba(99,99,110,0.2)]
          mb-5 border-none bg-transparent outline-none text-xl shadow-text-[#656ec2]
          placeholder:text-[#656ec2]`}
          searchTerm={searchTerm}
          jokesData={jokesData}
          handleSearch={handleSearch}/>
      </div>
      {isSuccess && <SearchJokesList
        className={`flex flex-wrap gap-[20px] justify-center w-[1280px] h-auto mb-[60px] rounded-md`}
        jokesData={jokesData}/>}
    </div>
  );
};

