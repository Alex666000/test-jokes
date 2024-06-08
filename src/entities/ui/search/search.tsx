'use client'
import { useEffect, useRef, useState } from 'react'

import { SearchField } from '@/entities/ui/search/search-field'
import { SearchJokesList } from '@/entities/ui/search/search-jokes-list'
import { Nullable } from '@/shared/types/nullable'
import { SearchJokesListSkeleton } from '@/shared/ui/Skeleton/search-list-skeleton'
import { Flex } from '@/shared/ui/flex'

import { useSearch } from '../../model/hooks/use-search'

export const Search = () => {
  const inputRef = useRef<Nullable<HTMLInputElement>>(null)
  const [isLoading, setIsLoading] = useState(true)

  const {
    data: { data: jokesData } = {},
    handleSearch,
    isFetching,
    isSuccess,
    searchTerm,
  } = useSearch()

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  useEffect(() => {
    if (isFetching) {
      setIsLoading(true)
    } else {
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 1000)

      return () => clearTimeout(timer)
    }
  }, [isFetching])

  return (
    <>
      {isFetching || isLoading ? (
        <SearchJokesListSkeleton />
      ) : (
        <Flex direction={'column'}>
          <div className={'m-[128px_auto_60px] flex w-[50%] flex-col'}>
            <SearchField
              className={`shadow-text-[#656ec2] mb-5 w-full max-w-[632px]
          border-none bg-transparent p-[20px_35px] text-xl shadow-[0_7px_12px_1px_rgba(99,99,110,0.2)] outline-none
          placeholder:text-[#656ec2]`}
              handleSearch={handleSearch}
              jokesData={jokesData}
              ref={inputRef}
              searchTerm={searchTerm}
            />
          </div>
          {isSuccess && (
            <SearchJokesList
              className={`mb-[60px] flex h-auto w-[1280px] flex-wrap justify-center gap-[20px] rounded-md`}
              jokesData={jokesData}
            />
          )}
        </Flex>
      )}
    </>
  )
}
