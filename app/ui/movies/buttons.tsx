import { deleteMovie } from '@/app/lib/actions';
import { BookOpenIcon, PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export function ViewDetailOfMovie({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/movies/${id}/view`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <BookOpenIcon className="w-5" />
    </Link>
  )
}

export function CreateMovie() {
  return (
    <Link
      href="/dashboard/movies/create"
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Create Movie</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function UpdateMovie({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/movies/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeleteMovie({ id }: { id: string }) {
  const deleteMovieeWithId = deleteMovie.bind(null, id);
  return (
    <form action={deleteMovieeWithId}>
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
    </form>
  );
}
