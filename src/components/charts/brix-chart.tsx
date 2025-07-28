"use client"

import * as React from "react"
import { ResponsiveContainer, XAxis, YAxis, CartesianGrid, Area, AreaChart } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Brix data over time
const brixData = [
  { week: "Week 1", brix: 18.2 },
  { week: "Week 2", brix: 18.5 },
  { week: "Week 3", brix: 19.1 },
  { week: "Week 4", brix: 19.8 },
  { week: "Week 5", brix: 20.3 },
  { week: "Week 6", brix: 21.1 },
  { week: "Week 7", brix: 21.8 },
  { week: "Week 8", brix: 22.4 },
  { week: "Week 9", brix: 23.1 },
  { week: "Week 10", brix: 23.7 },
  { week: "Week 11", brix: 24.2 },
  { week: "Week 12", brix: 24.8 },
]

const brixConfig = {
  brix: {
    label: "Brix (°Bx)",
    color: "#F59E0B", // Orange for sugar content
  },
} satisfies ChartConfig

export function BrixChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Brix Progression</CardTitle>
        <CardDescription>
          Sugar content development over harvest season
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={brixConfig}>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={brixData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="week" 
                tick={{ fontSize: 12 }}
              />
              <YAxis 
                tick={{ fontSize: 12 }}
                domain={[17, 26]}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area
                type="monotone"
                dataKey="brix"
                stroke="#F59E0B"
                fill="#F59E0B"
                fillOpacity={0.3}
                strokeWidth={3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
} 