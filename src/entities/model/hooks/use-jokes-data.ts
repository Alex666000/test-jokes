import { useEffect, useState } from 'react'

import { useSearch } from '../../model/hooks/use-search'

export const useJokesData = () => {
  const [isLoading, setIsLoading] = useState(true)

  const {
    data: { data: jokesData } = {},
    handleSearch,
    isFetching,
    isSuccess,
    searchTerm,
  } = useSearch()

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

  return { handleSearch, isFetching, isLoading, isSuccess, jokesData, searchTerm }
}
