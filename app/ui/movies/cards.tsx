import { MoviesTable } from "@/app/lib/definitions";
import { BanknotesIcon, FilmIcon, LinkIcon, PhotoIcon, StarIcon } from "@heroicons/react/24/outline";
import { lusitana } from "../fonts";
import Image from "next/image";

const iconMap = {
    douban_url: LinkIcon,
    star: StarIcon,
    image_url: PhotoIcon,
    name: FilmIcon
};

export default function CardWrapper({
    movie
}: {
    movie: MoviesTable,
}) {
    const { name, star, douban_url, image_url } = movie;

    return (
        <>
            <Card title="Movie" value={name} type="name" />
            <Card title="Star" value={`${star}/10`} type="star" />
            <Card title="Douban" value={douban_url} type="douban_url" />
            <Card title="Poster" value={image_url} type="image_url" />
        </>
    )
}

export function Card({
    title, value, type
}: {
    title: string;
    value: number | string;
    type: 'douban_url' | 'image_url' | 'name' | 'star'
}) {
    const Icon = iconMap[type];
    if (type === 'image_url') {
        return (
            <div className="rounded-xl bg-gray-50 p-2 shadow-sm flex">
                <div className="flex p-4">
                    {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
                    <h3 className="ml-2 text-sm font-medium">{title}</h3>
                </div>
                <Image
                    src={value as string}
                    className="rounded-xl bg-white justify-center"
                    width={25}
                    height={25}
                    layout="responsive"
                    alt={`Movie poster`}
                    objectFit="contain"
                />
            </div>
        )
    }
    return (
        <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
            <div className="flex p-4">
                {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
                <h3 className="ml-2 text-sm font-medium">{title}</h3>
            </div>
            <p
                className={`${lusitana.className}
                truncate rounded-xl bg-white px-4 py-8 text-center text-xl`}
            >
                {value}
            </p>
        </div>
    )
}