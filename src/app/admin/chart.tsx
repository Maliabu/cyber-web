"use client"

import * as React from "react"
import { Bar, BarChart, CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis } from "recharts"

const data = [
  {
    name: "A",
    goal: 400,
    pv: 50
  },
  {
    goal: 300,
    pv: 500
  },
  {
    goal: 200,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 239,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 349,
  },
]

export function Chart() {

  return (
          <div className="p-4 pb-0">
            <div className="mt-3 h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
              <LineChart width={400} height={400} data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
              <XAxis dataKey="name" />
              <CartesianGrid stroke="#00000000" />
              <Line type="monotone" dataKey="goal" stroke="#02a5fa" yAxisId={0} />
              <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
            </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
  )
}
