import axios from "axios";

// https://api.chucknorris.io/jokes/search?query=asan
export const getJokes = async (query: string) => {
  try {
    const response = await axios.get(`${process.env.SERVER_URL}/jokes/search`, {
      params: {query}
    });
    return response.data;

  } catch (error) {
    console.log(error);
  }
};

export const getJokesCategories = async () => {
  try {
    const response = await axios.get(`${process.env.SERVER_URL}/jokes/categories`, {
      params: {}
    });
    return response.data;

  } catch (error) {
    console.log(error);
  }
};

