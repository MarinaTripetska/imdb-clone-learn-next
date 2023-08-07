import { FetchGenre } from "@/globalTypes/fetchGenre";

const API_KEY = process.env.API_KEY;
type Genre = FetchGenre.trending | FetchGenre.topRated | undefined;

const fetchGenre = async (genre: Genre) => {
  const genreFetchLine =
    genre === FetchGenre.topRated ? "movie/top_rated" : "trending/all/week";

  const res = await fetch(
    `https://api.themoviedb.org/3/${genreFetchLine}?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data!");
  }

  return await res.json();
};

export default fetchGenre;
