'use client';

import Link from 'next/link';
import {
    CurrencyDollarIcon,
    FilmIcon,
    LinkIcon,
    PhotoIcon,
    StarIcon,
    UserCircleIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { createMovie } from '@/app/lib/actions';
import { useFormState } from 'react-dom';
import React, { useState } from 'react';
import Image from 'next/image';

export default function Form() {
    const initialState = { message: null, errors: {} };
    const [state, dispatch] = useFormState(createMovie, initialState);
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log('handleImageChange called');
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e: ProgressEvent<FileReader>) => {
                setImagePreview(e.target?.result as string);
            };
            reader.readAsDataURL(file);
        }
        
    }
    return (
        <form action={dispatch}>
            <div className="rounded-md bg-gray-50 p-4 md:p-6" aria-describedby='any-error'>
                {/* Movie Name */}
                <div className="mb-4">
                    <label htmlFor="movie" className="mb-2 block text-sm font-medium">
                        The Movie
                    </label>
                    <div className="relative">
                        <input
                            id="movieName"
                            name="movieName"
                            type="string"
                            placeholder="Enter Movie name"
                            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            aria-describedby='movie-name-error'
                        />
                        <FilmIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                    </div>
                    <div id='movie-name-error' aria-live='polite' aria-atomic="true">
                        {state.errors?.name &&
                            state.errors.name.map((error: string) =>
                                (<p className='mt-2 text-sm text-red-500' key={error}>{error}</p>)
                            )
                        }
                    </div>
                </div>
                {/* Movie Star */}
                <div className="mb-4">
                    <label htmlFor="star" className="mb-2 block text-sm font-medium">
                        Input a star number
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="movie-star"
                                name="movie-star"
                                type="number"
                                step="0.1"
                                defaultValue="7.5"
                                placeholder="Enter star number"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                aria-describedby='star-error'
                            />
                            <StarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                        <div id='star-error' aria-live='polite' aria-atomic="true">
                            {state.errors?.star &&
                                state.errors.star.map((error: string) =>
                                    (<p className='mt-2 text-sm text-red-500' key={error}>{error}</p>)
                                )
                            }
                        </div>
                    </div>
                </div>

                {/* Movie Douban Url */}
                <div className="mb-4">
                    <label htmlFor="douban-url" className="mb-2 block text-sm font-medium">
                        Input a douabn url
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="douban-url"
                                name="douban-url"
                                type="string"
                                defaultValue='https://movie.douban.com/subject/1294638/'
                                placeholder="Enter a douban url"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                aria-describedby='douban-url-error'
                            />
                            <LinkIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                        <div id='douban-url-error' aria-live='polite' aria-atomic="true">
                            {state.errors?.douban_url &&
                                state.errors.douban_url.map((error: string) =>
                                    (<p className='mt-2 text-sm text-red-500' key={error}>{error}</p>)
                                )
                            }
                        </div>
                    </div>
                </div>

                {/* Movie Poster Image URL */}
                <div className="mb-4">
                    <label htmlFor="image-url" className="mb-2 block text-sm font-medium">
                        Input an image url
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="image-url"
                                name="image-url"
                                type="string"
                                defaultValue='https://img.003311.xyz/img/UJRHVPXT'
                                placeholder="Enter an image url"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                aria-describedby='image-url-error'
                            />
                            <PhotoIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>

                        <div id='image-url-error' aria-live='polite' aria-atomic="true">
                            {state.errors?.image_url &&
                                state.errors.image_url.map((error: string) =>
                                    (<p className='mt-2 text-sm text-red-500' key={error}>{error}</p>)
                                )
                            }
                        </div>
                    </div>
                </div>

                <div id='any-error' aria-live='polite' aria-atomic="true">
                    {<p className='mt-2 text-sm text-red-500' >{state.message}</p>}
                </div>
            </div>
            <div className="mt-6 flex justify-end gap-4">
                <Link
                    href="/dashboard/movies"
                    className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                >
                    Cancel
                </Link>
                <Button type="submit">Create Movie</Button>
            </div>
        </form>
    );
}
