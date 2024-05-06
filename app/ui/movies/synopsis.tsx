'use client';


import { MoviesTable } from "@/app/lib/definitions";

export default function Synopsis({ movie }: { movie: MoviesTable }) {
    return (
        <div>
            <h2 className="mt-6 mb-3 text-green-700">
                {`${movie.name} 的剧情简介· · · · · ·`}
            </h2>
            <div >
                <p className="indent-8">
                    一场谋杀案使银行家安迪（蒂姆•罗宾斯 Tim Robbins 饰）蒙冤入狱，谋杀妻子及其情人的指控将囚禁他终生。在肖申克监狱的首次现身就让监狱“大哥”瑞德（摩根•弗里曼 Morgan Freeman 饰）对他另眼相看。瑞德帮助他搞到一把石锤和一幅女明星海报，两人渐成患难 之交。很快，安迪在监狱里大显其才，担当监狱图书管理员，并利用自己的金融知识帮助监狱官避税，引起了典狱长的注意，被招致麾下帮助典狱长洗黑钱。偶然一次，他得知一名新入狱的小偷能够作证帮他洗脱谋杀罪。燃起一丝希望的安迪找到了典狱长，希望他能帮自己翻案。阴险伪善的狱长假装答应安迪，背后却派人杀死小偷，让他唯一能合法出狱的希望泯灭。沮丧的安迪并没有绝望，在一个电闪雷鸣的风雨夜，一场暗藏几十年的越狱计划让他自我救赎，重获自由！老朋友瑞德在他的鼓舞和帮助下，也勇敢地奔向自由。
                    <br />
                </p>
                <p className="indent-8">
                    本片获得1995年奥斯卡10项提名，以及金球奖、土星奖等多项提名。
                </p>

            </div>
        </div>
    )
}