import {ComponentPropsWithoutRef, forwardRef} from "react";
import {Nullable} from "@/shared/types/nullable";
import {JokesResponse} from "@/entities/jokes/jokes";

type Props = {
  keywords: string;
  jokesData: Nullable<JokesResponse>;
  className: string;
  setKeywords: (value: string) => void;
} & ComponentPropsWithoutRef<"input">;

export const Search = forwardRef<HTMLInputElement, Props>(({keywords, jokesData, className, setKeywords}, ref) => {
  return (
    <div className={``}>
      <input
        autoFocus
        ref={ref}
        placeholder={"Search jokes..."}
        type="text"
        className={className}
        value={keywords}
        onChange={(event) => setKeywords(event.target.value)}
      />
      <span className={" pl-[40px] block mb-4"}>{`Total count: ${jokesData?.total}`}</span>
    </div>

  );
});

Search.displayName = "Search";
