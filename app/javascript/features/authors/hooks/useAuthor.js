import useSWR from "swr";
const url = "http://localhost:3000/api/v1/authors";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
export function useAuthor (id) {
    const { data, error, isLoading } = useSWR(`${url}/${id}`, fetcher)
  
    return {
      author: data,
      isLoading,
      isError: error
    }
  }

