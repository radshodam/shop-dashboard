import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import "./chart.css";

export default function Chart({ title, data, dataKey, grid }) {
  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="10" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

// //

// // customize tooltip

// // replace Tooltip
// {
//   /* <Tooltip
//   content={<CustomTooltip />}
//   cursor={{ fill: "transparent" }}
//   /> */
// }

// // export const CustomTooltip = ({ active, payload, label }) => {
// //   if (active && payload && payload.length) {
// //     return (
// //       <div>
// //         <p >{`${label} : ${payload[0].value}`}</p>
// //         <div>
// //           {payload.map((pld) => (
// //             <div style={{ display: "inline-block", padding: 10 }}>
// //               <div style={{ color: pld.fill }}>{pld.value}</div>
// //               <div>{pld.dataKey}</div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     );
// //   }

// //   return null;
// // };

// // customize tooltip
