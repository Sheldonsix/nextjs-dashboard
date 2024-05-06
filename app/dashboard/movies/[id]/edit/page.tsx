import { fetchMovieById, fetchMovies, fetchMoviesPages } from "@/app/lib/data";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import { Metadata } from "next";
import Form from '@/app/ui/movies/edit-form'

export const metadata: Metadata = {
    title: 'Edit Detail of Movie'
}

export default async function Page({params}:{params: {id:string}}) {
    const id = params.id;
    const [movie, movies] = await Promise.all([
        fetchMovieById(id),
        fetchMovies()
    ])

    return (
        <main>
            <Breadcrumbs breadcrumbs={[
                {label: 'Movie', href:'/dashboard/movies'},
                {
                    label: 'View Detail of Movie',
                    href: `/dashboard/movies/${id}/vies`,
                    active: true
                }
            ]}/>
            <Form movie={movie} />
        </main>
    )
}