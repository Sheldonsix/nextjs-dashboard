import Image from 'next/image';
import { UpdateMovie, DeleteMovie, ViewDetailOfMovie } from '@/app/ui/movies/buttons';
import { fetchFilteredMovies } from '@/app/lib/data';

export default async function MoviesTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const movies = await fetchFilteredMovies(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {movies?.map((movie) => (
              <div
                key={movie.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <Image
                        src={movie.image_url}
                        className="mr-2"
                        width={50}
                        height={50}
                        alt={`${movie.name}'s profile picture`}
                      />
                      <p>{movie.name}</p>
                    </div>
                    <p className="text-sm text-gray-500">{movie.douban_url}</p>
                    <p className="text-sm text-gray-500">{movie.star}</p>
                  </div>
                </div>
                <div className="flex justify-end gap-2">
                  <ViewDetailOfMovie id={movie.id} />
                  <UpdateMovie id={movie.id} />
                  <DeleteMovie id={movie.id} />
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Name
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Douban
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Star
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {movies?.map((movie) => (
                <tr
                  key={movie.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src={movie.image_url}
                        width={50}
                        height={50}
                        alt={`${movie.name}'s profile picture`}
                      />
                      <p>{movie.name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {movie.douban_url}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {movie.star}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <ViewDetailOfMovie id={movie.id} />
                      <UpdateMovie id={movie.id} />
                      <DeleteMovie id={movie.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
