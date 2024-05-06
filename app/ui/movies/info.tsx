'use client';


import { MoviesTable } from "@/app/lib/definitions";

export default function Info({ movie }: { movie: MoviesTable }) {
    return (
        <div>
            <span>
                <span className="leading-relaxed text-sm text-gray-600">导演：</span>
                <span>弗兰克·德拉邦特</span>
            </span>
            <br/>
            <span>
                <span className="leading-relaxed text-sm text-gray-600">编剧：</span>
                <span>弗兰克·德拉邦特</span>
            </span>
            <br/>
            <span>
                <span className="leading-relaxed text-sm text-gray-600">主演：</span>
                <span>蒂姆·罗宾斯</span>
            </span>
            <br/>
            <span>
                <span className="leading-relaxed text-sm text-gray-600">类型：</span>
                <span>剧情</span>
            </span>
            <br/>
            <span>
                <span className="leading-relaxed text-sm text-gray-600" >制片国家/地区：</span>
                <span>美国</span>
            </span>
            <br/>
            <span>
                <span className="leading-relaxed text-sm text-gray-600" >语言：</span>
                <span>英语</span>
            </span>
            <br/>
            <span>
                <span className="leading-relaxed text-sm text-gray-600" >上映日期：</span>
                <span> 1994-09-10(多伦多电影节) / 1994-10-14(美国)</span>
            </span>
            <br/>
            <span>
                <span className="leading-relaxed text-sm text-gray-600" >片长：</span>
                <span>142分钟</span>
            </span>
            <br/>
            <span>
                <span className="leading-relaxed text-sm text-gray-600" >又名：</span>
                <span>月黑高飞(港) / 刺激1995(台) / 地狱诺言 / 铁窗岁月 / 消香克的救赎</span>
            </span>
            <br/>
            <span>
                <span className="leading-relaxed text-sm text-gray-600" >IMDb：</span>
                <span>tt0111161</span>
            </span>
            <br/>
        </div>
    )
}