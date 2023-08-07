import { MovieI } from "@/globalTypes/movie";
import React from "react";
interface Props {
  results: MovieI[];
}
const MoviesList = ({ results }: Props) => {
  return (
    <ul>
      {results.map((item, i) => (
        <li key={i}>{item.title || item.name}</li>
      ))}
    </ul>
  );
};

export default MoviesList;
