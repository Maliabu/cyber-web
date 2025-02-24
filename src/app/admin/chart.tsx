"use client"

import * as React from "react"
// import { Bar, BarChart, CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis } from "recharts"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
]
const CustomTooltip = () => {
    return (
      <div className="transparent-dark p-5 rounded-md">
        <p className="label">Data</p>
      </div>
    );
}

export function Chart() {
  const [opacity, setOpacity] = React.useState({
    uv: 1,
    pv: 1,
  });
  const handleMouseEnter = (o: any) => {
    const { dataKey } = o;

    setOpacity((op) => ({ ...op, [dataKey]: 0.5 }));
  };
  const handleMouseLeave = (o: any) => {
    const { dataKey } = o;

    setOpacity((op) => ({ ...op, [dataKey]: 1 }));
  };

  return (
          <div className="pb-12 border-t mt-6">
            <p className="my-4 text-sm">Statistics of users activity over time(on a monthly basis)</p>
            <div className="mt-12 h-[250px]">
              {/* <ResponsiveContainer width="100%" height="100%">
              <LineChart width={400} height={400} data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
              <XAxis dataKey="name" />
              <CartesianGrid stroke="#00000000" />
              <Line type="monotone" dataKey="goal" stroke="#02a5fa" yAxisId={0} />
              <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
            </LineChart>
              </ResponsiveContainer> */}
              <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={500}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#00000000" />
          {/* <XAxis dataKey="name" className="text-md" /> */}
          {/* <YAxis /> */}
          <Tooltip content={<CustomTooltip/>}/>
          <Legend onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
          <Area type="monotone" dataKey="uv" stroke="#02a5fa" fill="#02a5fa" />
          <Area type="monotone" dataKey="pv" stroke="#02a5fa" fill="#02a5fa" />
          <Area type="monotone" dataKey="amt" stroke="#02a5fa" fill="#02a5fa" />
        </AreaChart>
      </ResponsiveContainer>
            </div>
          </div>
  )
}
