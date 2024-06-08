'use client'

import { useJokesData } from '@/entities/model/hooks/use-jokes-data'
import { SearchJokesListSkeleton } from '@/shared/ui/skeleton'

import { Search } from '../search/search'

export const Jokes = () => {
  const { handleSearch, isFetching, isLoading, isSuccess, jokesData, searchTerm } = useJokesData()

  return (
    <>
      {isFetching || isLoading ? (
        <SearchJokesListSkeleton />
      ) : (
        <Search
          data={jokesData}
          handleSearch={handleSearch}
          isSuccess={isSuccess}
          searchTerm={searchTerm}
        />
      )}
    </>
  )
}
