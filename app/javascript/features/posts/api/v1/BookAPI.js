import useSWR from "swr";
import axios from "axios";
const url = "http://localhost:3000/api/v1/posts";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const allBooks = () => {
  const { data, error, isLoading } = useSWR(url, fetcher);
  console.log(data)
  return {
    books: data,
    isLoading,
    isError: error,
  };
};


export const publishBook = async ({ props }) => {
  const response = await axios.post(url, ...props);
  return response.data;
};
