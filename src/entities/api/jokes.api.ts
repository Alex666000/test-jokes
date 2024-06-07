import axios from "axios";
import {Nullable} from "@/shared/types/nullable";
import {JokesResponse} from "@/entities/model/type/jokes";

export const JokesApi = {
  async getJokes(query: string) {
    return axios.get(`${process.env.SERVER_URL}/jokes/search`, {
      params: query ? {query} : {}
    });
  }
};
