import {ChangeEvent, useState} from "react";
import {useDebounce} from "@/shared/lib/hooks/useDebounce";
import {useQuery} from "@tanstack/react-query";
import {JokesAPI} from "@/entities/api/jokes-api";

export const useSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm, 1500);

  const {data, isLoading, isSuccess} = useQuery({
    queryKey: ["key", debouncedSearch],
    queryFn: () => {
      return JokesAPI.getJokes(debouncedSearch);
    },
    enabled: debouncedSearch.length >= 4,
  });

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return {debouncedSearch, searchTerm, handleSearch, data, isLoading, isSuccess};
};
