"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

// Crew management data for vineyard block tasks
const crewTaskData = [
  { block: "Block A", suckering: 8, pruning: 5, spraying: 2, harvesting: 0 },
  { block: "Block B", suckering: 6, pruning: 4, spraying: 3, harvesting: 1 },
  { block: "Block C", suckering: 10, pruning: 6, spraying: 1, harvesting: 0 },
  { block: "Block D", suckering: 4, pruning: 3, spraying: 2, harvesting: 2 },
  { block: "Block E", suckering: 7, pruning: 5, spraying: 2, harvesting: 0 },
  { block: "Block F", suckering: 9, pruning: 7, spraying: 3, harvesting: 1 },
  { block: "Block G", suckering: 5, pruning: 2, spraying: 2, harvesting: 0 },
  { block: "Block H", suckering: 6, pruning: 4, spraying: 1, harvesting: 0 },
  { block: "Block I", suckering: 8, pruning: 5, spraying: 2, harvesting: 1 },
  { block: "Block J", suckering: 3, pruning: 2, spraying: 1, harvesting: 0 },
]

const crewTaskConfig = {
  suckering: {
    label: "Suckering",
    color: "#10B981", // Green
  },
  pruning: {
    label: "Pruning",
    color: "#6366F1", // Indigo
  },
  spraying: {
    label: "Spraying",
    color: "#F59E42", // Orange
  },
  harvesting: {
    label: "Harvesting",
    color: "#EF4444", // Red
  },
} satisfies ChartConfig

export function NDVIMap() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Crew Management</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={crewTaskConfig}>
          <BarChart accessibilityLayer data={crewTaskData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="block"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  hideLabel
                  indicator="dot"
                  labelFormatter={(value) => `Block: ${value}`}
                />
              }
            />
            <Bar
              dataKey="suckering"
              stackId="a"
              fill={crewTaskConfig.suckering.color}
              radius={[0, 0, 0, 0]}
              name={crewTaskConfig.suckering.label}
            />
            <Bar
              dataKey="pruning"
              stackId="a"
              fill={crewTaskConfig.pruning.color}
              radius={[0, 0, 0, 0]}
              name={crewTaskConfig.pruning.label}
            />
            <Bar
              dataKey="spraying"
              stackId="a"
              fill={crewTaskConfig.spraying.color}
              radius={[0, 0, 0, 0]}
              name={crewTaskConfig.spraying.label}
            />
            <Bar
              dataKey="harvesting"
              stackId="a"
              fill={crewTaskConfig.harvesting.color}
              radius={[0, 0, 0, 0]}
              name={crewTaskConfig.harvesting.label}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="text-muted-foreground leading-none font-mono text-xs">
          Manage your crew at a block level to make the most use of every hour.
        </div>
      </CardFooter>
    </Card>
  )
}