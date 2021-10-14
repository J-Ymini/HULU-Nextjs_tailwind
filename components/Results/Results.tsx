import React from "react";

import Thumbnail from "../Thumbnail/Thumbnail";
import FlipMove from "react-flip-move";

export default function Results({ results }: ResultsProps): JSX.Element {
  return (
    <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3  3xl:flex flex-wrap justify-center">
      {results.map((result: ThumbnailProps) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </FlipMove>
  );
}

export type ThumbnailProps = {
  id: number;
  genre_ids: number[];
  backdrop_path: string;
  original_title: string;
  original_language: string;
  overview: string;
  title: string;
  release_date: string;
  poster_path: string;
  popularity: number;
  vote_average: number;
  vote_count: number;
};

export type ResultsProps = {
  results: ThumbnailProps[];
};
