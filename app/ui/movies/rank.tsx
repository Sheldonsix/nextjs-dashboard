'use client';


import { MoviesTable } from "@/app/lib/definitions";
import { StarIcon } from "@heroicons/react/24/solid";
import { lusitana } from "../fonts";

export default function Rank({movie}:{movie:MoviesTable}) {
    const Icon = StarIcon;
    return (
        <div className="rounded-xl bg-gray-50 p-2 shadow-sm w-40">
            <div className="flex p-4">
                {Icon ? <Icon className="h-5 w-5 text-yellow-400" /> : null}
                <h3 className="ml-2 text-sm font-medium">{'Rank'}</h3>
            </div>
            <p
                className={`${lusitana.className}
                truncate rounded-xl bg-white px-4 pt-8 pb-3 text-center text-xl mb-2 border relative`}
            >
                {`${movie.star}/10`}
                <span className="absolute top-0 left-0 bg-doubanGreen px-4 w-full text-sm font-normal text-white text-center pt-1">
                    豆瓣
                </span>
            </p>
            <p
                className={`${lusitana.className}
                truncate rounded-xl bg-white px-4 pt-8 pb-3 text-center text-xl mb-2 border relative`}
            >
                {`9.3/10`}
                <span className="absolute top-0 left-0 bg-IMDbYellow px-4 w-full text-sm font-bold text-black  text-center pt-1">
                    IMDb                    
                </span>
            </p>
        </div>
    )
}