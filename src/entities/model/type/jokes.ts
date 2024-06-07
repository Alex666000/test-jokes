
export type JokesResponse = {
  total: number;
  result: Joke[];
};

type Joke = {
  created_at: string;
  id: string;
  value: string;
} & Partial<{
  categories: string[];
  icon_url: string;
  updated_at: string;
  url: string;
}>;

//  const [jokesData, setJokesData] = useState<Nullable<JokesResponse>>(null);
//   const [keywords, setKeywords] = useState("");
//   const inputRef = useRef<Nullable<HTMLInputElement>>(null);
//
//   const debouncedKeywords = useDebounce(keywords, 1500);
//
//   const fetchJokes = async () => {
//     try {
//       const response = await getJokes(debouncedKeywords);
//       setJokesData(response);
//     } catch (error) {
//       console.error(error);
//     }
//   };
//
//   useEffect(() => {
//     fetchJokes();
//   }, [debouncedKeywords]);
//
//   useEffect(() => {
//     if (inputRef.current) {
//       inputRef.current.focus();
//     }
//   }, []);
//   console.log(keywords);
