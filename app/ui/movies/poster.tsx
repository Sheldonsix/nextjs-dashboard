'use client';


import { MoviesTable } from "@/app/lib/definitions";
import Image from "next/image";

export default function Poster({movie}: {movie: MoviesTable}) {
    return (
        <div className="mr-4">
            <Image className="rounded-xl bg-white" width={120} height={120} src={movie.image_url} alt={`${movie.name}'s poster`} layout="intrinsic"/>
        </div>
    )
}