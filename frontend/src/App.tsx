import { useQuery } from "@tanstack/react-query";
import axios from "axios";

//todo: look into similar word suggestions for commonly mispelled words

const useGetWord = (word: string) => {
  return useQuery({
    queryFn: () =>
      axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`),
    queryKey: ["word", word],
  });
};

export default () => {
  const { isLoading, error, data } = useGetWord("hello");

  if (isLoading) return <>loading...</>;

  if (error) return <>error...</>;

  console.log(data);

  return <h1 className="font-bold text-4xl">Hello world</h1>;
};
