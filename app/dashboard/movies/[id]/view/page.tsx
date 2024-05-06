import { fetchMovieById, fetchMovies, fetchMoviesPages } from "@/app/lib/data";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import Axis from "@/app/ui/movies/axis";
import CardWrapper from "@/app/ui/movies/cards";
import Info from "@/app/ui/movies/info";
import ParentalGuide from "@/app/ui/movies/parental-guide";
import Poster from "@/app/ui/movies/poster";
import Rank from "@/app/ui/movies/rank";
import Synopsis from "@/app/ui/movies/synopsis";
import Title from "@/app/ui/movies/title";
import { CardsSkeleton } from "@/app/ui/skeletons";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
    title: 'View Detail of Movie'
}

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const movie = await fetchMovieById(id);

    return (
        <main>
            <Breadcrumbs breadcrumbs={[
                { label: 'Movie', href: '/dashboard/movies' },
                {
                    label: 'View Detail of Movie',
                    href: `/dashboard/movies/${id}/vies`,
                    active: true
                }
            ]} />
            <div className="flex flex-col w-9/12" >
                <div className="pb-5">
                    <Title movie={movie} />
                </div>

                <div className="flex">
                    <div className="shrink-0">
                        <Poster movie={movie} />
                    </div>

                    <div className="grow">
                        <Info movie={movie} />
                    </div>
                    <div className="pl-4 border-l">
                        <Rank movie={movie} />
                    </div>

                </div>
                <div className="mb-7">
                    <Synopsis movie={movie} />
                </div>
                <div className="w-full h-20">
                    <ParentalGuide movie={movie}/>
                </div>

                {/* <Suspense fallback={<CardsSkeleton />}>
                    <CardWrapper movie={movie}/>
                </Suspense> */}
            </div>

        </main>
    )
}