'use client';

import * as d3 from "d3";
import { useEffect, useMemo, useRef, useState } from "react";
import { lusitana } from "../fonts";
import { MoviesTable } from "@/app/lib/definitions";
import Timeline from 'react-vis-timeline';



export default function ParentalGuide({movie}:{movie:MoviesTable}) {
  const options = {
    width: '100%',
    height: '100px',
    margin: {
      item: 20
    }
  };
  return (
    <>
    <h2 className="mt-6 mb-3 text-green-700">
         {`${movie.name} 的家长指南· · · · · ·`}
       </h2>
       <div className="flex flex-col h-64">
       <Timeline options={options}/>
       </div>
       
    </>
  )
}


// export default function TimeLine({
//   movie,
//   domain = [0, 142],
  
// }: { domain?: number[], movie: MoviesTable }) {
//   const svgRef = useRef<SVGSVGElement | null>(null);
//   const [svgWidth, setSvgWidth] = useState(10);
//   useEffect(() => {
//     const svgElement = svgRef.current;
//     if (svgElement) {
//       const width = svgElement.clientWidth;
//       setSvgWidth(width - 10);
//     }
//   }, []);
//   const range = [10, svgWidth];

//   const xScale = useMemo(() => d3.scaleLinear().domain(domain).range(range), [domain, range]);
//   const ticks = useMemo(() => {
//     const width = range[1] - range[0]
//     const pixelsPerTick = 30
//     const numberOfTicksTarget = Math.max(
//       1,
//       Math.floor(
//         width / pixelsPerTick
//       )
//     )

//     return xScale.ticks(numberOfTicksTarget)
//       .map((value) => ({
//         value,
//         xOffset: xScale(value)
//       }))
//   }, [
//     domain.join("-"),
//     range.join("-")
//   ])
//   const [isTextVisible, setTextVisible] = useState(false);
//   const handleClick = () => {
//     setTextVisible(!isTextVisible);
//   };
//   const handleMouseEnter = () => {
//     setTextVisible(true);
//   };
//   const handleMouseLeave = () => {
//     setTextVisible(false);
//   }
//   const highlightRange = [50, 51]
//   const highlightStart = xScale(highlightRange[0]);
//   const highlightEnd = xScale(highlightRange[1]);
//   return (
//     <>
//       <h2 className="mt-6 mb-3 text-green-700">
//         {`${movie.name} 的家长指南· · · · · ·`}
//       </h2>
//       <div className="flex flex-col items-center w-full h-64 overflow-auto">
//         <svg ref={svgRef} width='100%' height={25}>
//           <path
//             d={[
//               "M", range[0], 6,
//               "v", -6,
//               "H", range[1],
//               "v", 6,
//             ].join(" ")}
//             fill="none"
//             stroke="currentColor"
//           />
//           {(
//             <g transform={`translate(${range[0]}, 0)`}>
//               <line y2="6" stroke="currentColor" />
//               <text
//                 style={{
//                   fontSize: "10px",
//                   textAnchor: "middle",
//                   transform: "translateY(20px)"
//                 }}
//               >
//                 {domain[0]}
//               </text>
//             </g>
//           )}
//           {(
//             <g transform={`translate(${range[1]}, 0)`}>
//               <line y2="6" stroke="currentColor" />
//               <text
//                 style={{
//                   fontSize: "10px",
//                   textAnchor: "middle",
//                   transform: "translateY(20px)"
//                 }}
//               >
//                 {domain[1]}
//               </text>
//             </g>
//           )}

//           <rect onClick={handleClick} x={highlightStart} width={highlightEnd - highlightStart} height={16} y={0} fill="red" />
//         </svg>
//         {isTextVisible && (
//           <div className="rounded-xl bg-gray-50 p-2 shadow-sm w-1/4 flex items-center">
//             {/* <text
//             x={(highlightStart + highlightEnd) / 2}  // 让文本在矩形下方居中
//             y={26}  // 调整 y 以设置文本的垂直位置
//             textAnchor="middle"  // 文本居中对齐
//             fill="black"
//             fontSize="10px"
//             className="rounded-xl bg-white  px-4 py-1 text-center text-pretty"
//           >
//             Buttocks shown in the background of two scenes. Not graphic.
//           </text> */}
//             <p className={`${lusitana.className} rounded-xl bg-white  px-4 py-1 text-center text-pretty`}>
//               {`${highlightRange[0]}min-${highlightRange[1]}min: `}
//               <br />
//               Buttocks shown in the background of two scenes. Not graphic.
//             </p>
//           </div>
//         )}
//       </div>
//     </>


//   )
// }