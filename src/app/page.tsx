import MoviesList from "@/components/MoviesList";
import { FetchGenre } from "@/globalTypes/fetchGenre";
import fetchGenre from "@/utils/APIrequests";

type Props = {
  searchParams: {
    genre: FetchGenre.trending | FetchGenre.topRated | undefined;
  };
};

export default async function Home({ searchParams }: Props) {
  const genre = searchParams.genre || FetchGenre.trending;
  const { results } = await fetchGenre(genre);

  return (
    <main>
      <MoviesList results={results} />
    </main>
  );
}
