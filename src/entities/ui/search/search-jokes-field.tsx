import {ChangeEvent, ComponentPropsWithoutRef, forwardRef} from "react";
import {Nullable} from "@/shared/types/nullable";
import {JokesResponse} from "@/entities/model/type/jokes";

type Props = {
  searchTerm: string;
  jokesData: Nullable<JokesResponse> | undefined;
  className?: string;
  handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
} & ComponentPropsWithoutRef<"input">;

export const SearchJokesField = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const {searchTerm, jokesData, className, handleSearch, ...rest} = props
  return (
    <div>
      <input
        {...rest}
        autoFocus
        ref={ref}
        placeholder={"Search jokes..."}
        type="text"
        className={className}
        value={searchTerm}
        onChange={handleSearch}
      />
      <span className={"pl-[40px] block mb-4"}>{`Total count: ${jokesData?.total}`}</span>
    </div>

  );
});

SearchJokesField.displayName = "Search";
