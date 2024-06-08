import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { Nullable } from '@/shared/types/nullable'
import Link from 'next/link'

import { JokesResponse } from '../../model/type/jokes'

type Props = {
  className?: string
  jokesData: Nullable<JokesResponse> | undefined
} & ComponentPropsWithoutRef<'ul'>

export const SearchJokesList = forwardRef<HTMLUListElement, Props>((props, ref) => {
  const { className, jokesData, ...rest } = props

  return (
    <ul
      ref={ref}
      {...rest}
      className={`mb-[60px] flex h-auto w-[1280px] flex-wrap justify-center gap-[20px] rounded-md`}
    >
      {jokesData?.result?.map(({ created_at, id, value }, index) => {
        const linkClass =
          index < 2
            ? 'w-[800px)] flex h-[260px] flex-col justify-between text-balance p-[40px] text-regular-text-16' +
              'text-[#282626] shadow-[0_7px_12px_1px_rgba(99,99,110,0.2)]'
            : 'w-full grow w-[420px] h-[120px] px-4 flex flex-col justify-between text-balance p-[10px] text-regular-text-16 text-[#282626]' +
              'text-[#282626] shadow-[0_7px_12px_1px_rgba(99,99,110,0.2)]'

        return (
          <Link className={linkClass} href={`${process.env.SERVER_URL}/jokes/${id}`} key={id}>
            <p className={`line-clamp-2 min-h-[38px] w-full max-w-[547px]`}>{value}</p>
            <p className={`flex w-full justify-between text-[#767676] `}>
              <span>{id}</span>
              <span>{created_at}</span>
            </p>
          </Link>
        )
      })}
    </ul>
  )
})

SearchJokesList.displayName = 'SearchJokesList'
