'use client';

import { MoviesTable } from "@/app/lib/definitions";
import Image from "next/image";

export default function Title({ movie }: { movie: MoviesTable }) {
    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-700 leading-none">
                {movie.name}
                <span>
                    <a className="p-0.5 font-normal rounded text-sm m-1 border-none text-white bg-doubanGreen" href={movie.douban_url}>豆瓣</a>
                </span>
                <span>
                    <a className="p-0.5 rounded text-sm m-1 border-none text-black bg-IMDbYellow" href='https://www.imdb.com/title/tt0111161/'>IMDb</a>
                </span>
            </h1>
        </div>
    )
}