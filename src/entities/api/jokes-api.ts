import axios from "axios";
import {Nullable} from "@/shared/types/nullable";
import {JokesResponse} from "@/entities/model/type/jokes";

 export const JokesAPI = {
   async getJokes(query: string) {
     return axios.get<Nullable<JokesResponse>>(`${process.env.SERVER_URL}/jokes/search`, {
       params: query
         ? {
           query,
         }
         : {},
     })
   },
 }

// export const getJokes = async (query: string) => {
//   try {
//     const response = await axios.get(`${process.env.SERVER_URL}/jokes/search`, {
//       params: {query}
//     });
//     return response.data;
//
//   } catch (error) {
//     console.log(error);
//   }
// };


