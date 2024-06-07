import {ChangeEvent, useState} from "react";
import {useDebounce} from "@/shared/lib/hooks/useDebounce";
import {useQuery} from "@tanstack/react-query";
import {JokesAPI} from "@/entities/api/jokes-api";

export const useSearch = () => {
  const [searchTerm, setSearchTerm] = useState("hell");
  const debouncedSearch = useDebounce(searchTerm, 1500);

  const {data, isLoading, isSuccess} = useQuery({
    queryKey: ["key", searchTerm],
    queryFn: () => {
      return JokesAPI.getJokes(searchTerm)
    }
  });

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return {debouncedSearch,searchTerm,handleSearch,data,isLoading, isSuccess}
};
