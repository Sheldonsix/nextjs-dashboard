import { fetchMoviesPages } from '@/app/lib/data';
import { lusitana } from '@/app/ui/fonts';
import Pagination from '@/app/ui/movies/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/movies/table'
import { Metadata } from 'next';
import { Suspense } from 'react';
import { MovieSkeleton } from '@/app/ui/skeletons';
import { CreateMovie } from '@/app/ui/movies/buttons';

export const metadata: Metadata = {
    title: 'Movies',
}

export default async function Page({
    searchParams
}: {
    searchParams?: {
        query?: string;
        page?: string;
    }
}) {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    const totalPages = await fetchMoviesPages(query);
    return (
        <div className='w-full'>
            <div className='flex-w-full items-center jestify-between'>
                <h1 className={`${lusitana.className} text-2xl`}>Movies</h1>
            </div>
            <div className='mt-4 flex items-center justify-between gap-2 md:mt-8'>
                <Search placeholder='Search Movies...' />
                <CreateMovie />
            </div>
            <Suspense key={query + currentPage} fallback={<MovieSkeleton />}>
                <Table query={query} currentPage={currentPage} />
            </Suspense>
            <div className="mt-5 flex w-full justify-center">
                <Pagination totalPages={totalPages} />
            </div>
        </div>
    )
}