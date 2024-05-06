import { MoviesTable } from "@/app/lib/definitions";

export default function Axis({ movie }: { movie: MoviesTable }) {
    return (
        <div>
            <h2 className="mt-6 mb-3 text-green-700">
                {`${movie.name} 的 highpoint· · · · · ·`}
            </h2>
            <div className="flex justify-center items-center">

                <div className="w-4/5 bg-gray-100 p-4 rounded-lg shadow-md">
                    <div className="relative h-2 bg-gray-300">
                        <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-0.5 bg-black"></div>

                        <div className="flex justify-between">
                            <div className="relative">
                                <div className="w-1 h-4 bg-red-500 absolute top-[-2px]"></div>
                                <div className="text-center text-sm mt-2">A</div>
                            </div>
                            <div className="relative">
                                <div className="w-1 h-4 bg-red-500 absolute top-[-2px]"></div>
                                <div className="text-center text-sm mt-2">B</div>
                            </div>
                            <div className="relative">
                                <div className="w-1 h-4 bg-red-500 absolute top-[-2px]"></div>
                                <div className="text-center text-sm mt-2">C</div>
                            </div>
                            <div className="relative">
                                <div className="w-1 h-4 bg-red-500 absolute top-[-2px]"></div>
                                <div className="text-center text-sm mt-2">D</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}