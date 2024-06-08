import { ChangeEvent, useState } from 'react'

import { useDebounce } from '@/shared/lib/hooks/useDebounce'
import { useQuery } from '@tanstack/react-query'

import { JokesAPI } from '../../api/jokes-api'

export const useSearch = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearch = useDebounce(searchTerm, 1500)

  const { data, isFetching, isLoading, isSuccess } = useQuery({
    enabled: debouncedSearch.length >= 4,
    queryFn: () => {
      return JokesAPI.getJokes(debouncedSearch)
    },
    queryKey: ['key', debouncedSearch],
  })

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  return {
    data,
    debouncedSearch,
    handleSearch,
    isFetching,
    isLoading,
    isSuccess,
    searchTerm,
  }
}
