import {ComponentPropsWithoutRef, forwardRef} from "react";
import Link from "next/link";
import {Nullable} from "@/shared/types/nullable";
import {JokesResponse} from "../../model/type/jokes";

type Props = {
  jokesData: Nullable<JokesResponse> | undefined;
  className?: string;
} & ComponentPropsWithoutRef<"ul">;

export const SearchJokesList = forwardRef<HTMLUListElement, Props>((props, ref) => {
  const {jokesData, className, ...rest} = props;
  return (
    <ul ref={ref} {...rest} className={className}>
      {jokesData?.result?.map(({id, value, created_at}) => (
        <Link key={id}
              className={`flex flex-col justify-between w-[calc(50%_ - _10px)] h-[260px] p-[40px] text-balance shadow-[0_7px_12px_1px_rgba(99,99,110,0.2)]
                  text-[#282626] text-regular-text-16`}
              href={`${process.env.SERVER_URL}/jokes/${id}`}>
          <p className={`w-full max-w-[547px] min-h-[38px] line-clamp-2`}>{value}</p>
          <p className={`w-full flex justify-between text-[#767676] `}>
            <span>{id}</span>
            <span>{created_at}</span>
          </p>
        </Link>
      ))}
    </ul>
  );
});

SearchJokesList.displayName = "SearchJokesList";
