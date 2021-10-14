import React from "react";

import Image from "next/image";

import { ThumbnailProps } from "../Results/Results";
import { ThumbUpIcon } from "@heroicons/react/outline";
import { forwardRef } from "react";

const Thumbnail = forwardRef(
  (
    { result }: { result: ThumbnailProps },
    ref: React.ForwardedRef<HTMLDivElement>
  ): JSX.Element => {
    const BASE_URL = "https://image.tmdb.org/t/p/original/";

    const {
      poster_path,
      backdrop_path,
      overview,
      title,
      original_title,
      release_date,
      vote_count,
    } = result;

    return (
      <div
        ref={ref}
        className="p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50"
      >
        <Image
          layout="responsive"
          src={`${BASE_URL}${backdrop_path || poster_path}`}
          height={1080}
          width={1920}
        />
        <div className="p-2">
          <p className="truncate max-w-md">{overview}</p>
          <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
            {title || original_title}
          </h2>
          <p className="flex items-center opacity-0 group-hover:opacity-100 ">
            {release_date}
            {""}
            <ThumbUpIcon className="h-5 mx-2" />
            {vote_count}
          </p>
        </div>
      </div>
    );
  }
);

export default Thumbnail;
