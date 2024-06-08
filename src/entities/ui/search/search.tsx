'use client'

import { useEffect, useRef, useState } from 'react'

import { Nullable } from '@/shared/types/nullable'
import { Flex } from '@/shared/ui/flex'
import { SearchJokesListSkeleton } from 'src/shared/ui/skeleton'

import { useSearch } from '../../model/hooks/use-search'
import { SearchField } from './search-field'
import { SearchJokesList } from './search-jokes-list'

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
              handleSearch={handleSearch}
              jokesData={jokesData}
              ref={inputRef}
              searchTerm={searchTerm}
            />
          </div>
          {isSuccess && <SearchJokesList jokesData={jokesData} />}
        </Flex>
      )}
    </>
  )
}
