"use client";

import data from "@/data/analytics";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
export default function AnalyticsChart() {
  return (
    <>
      <Card className="my-3">
        <CardHeader>
          <CardTitle>Analytics for this year.</CardTitle>
          <CardDescription>View per month.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-full h-72">
            <ResponsiveContainer>
              <LineChart width={1100} height={300} data={data}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
