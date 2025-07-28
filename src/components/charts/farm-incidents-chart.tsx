"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
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

// Description for the chart
export const description =
  "A linear line chart showing soil moisture for 5 different blocks, each with a rainfall spike and slow decrease"

// Helper to generate slightly different soil moisture data for each block
function generateSoilMoistureData(offset: number, spike: number, decay: number) {
  const data = []
  for (let i = 0; i < 23; i++) {
    data.push({ hour: i.toString().padStart(2, "0"), moisture: 32 + offset })
  }
  // Rainfall spike
  data.push({ hour: "23", moisture: spike })
  // After spike, slow decrease
  let moisture = spike
  for (let i = 24; i < 46; i++) {
    moisture = Math.max(32 + offset, moisture - decay)
    data.push({ hour: i.toString(), moisture: Math.round(moisture) })
  }
  return data
}

// Generate data for 5 blocks with slight differences
const blocks = [
  {
    name: "Block A",
    color: "var(--chart-1, #3B82F6)",
    data: generateSoilMoistureData(0, 80, 2.2),
    description: "Block A: Typical rainfall spike and moderate decrease",
  },
  {
    name: "Block B",
    color: "var(--chart-2, #10B981)",
    data: generateSoilMoistureData(2, 85, 2.5),
    description: "Block B: Slightly higher baseline and spike",
  },
  {
    name: "Block C",
    color: "var(--chart-3, #F59E42)",
    data: generateSoilMoistureData(-2, 75, 1.8),
    description: "Block C: Lower baseline, gentler decrease",
  },
  {
    name: "Block D",
    color: "var(--chart-4, #6366F1)",
    data: generateSoilMoistureData(1, 78, 2.0),
    description: "Block D: Slightly higher baseline, moderate decrease",
  },
  {
    name: "Block E",
    color: "var(--chart-5, #EF4444)",
    data: generateSoilMoistureData(-1, 82, 2.7),
    description: "Block E: Lower baseline, sharper decrease",
  },
]

// Chart config for legend
const soilMoistureConfig: ChartConfig = {
  moisture: {
    label: "Soil Moisture (%)",
    color: "var(--chart-1)",
  },
}

// Merge all block data into a single array for the LineChart
// Each data point will have hour and a moisture value for each block
const mergedData: Array<{ hour: string } & Record<string, number>> = (() => {
  // Assume all blocks have the same hours
  const hours = blocks[0].data.map((d) => d.hour)
  return hours.map((hour, idx) => {
    const entry: { hour: string } & Record<string, number> = { hour }
    blocks.forEach((block) => {
      entry[block.name] = block.data[idx]?.moisture ?? null
    })
    return entry
  })
})()

export function FarmIncidentsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Soil Moisture</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={soilMoistureConfig}>
          <LineChart
            width={700}
            height={320}
            data={mergedData}
            margin={{
              left: 12,
              right: 12,
              top: 8,
              bottom: 8,
            }}
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="hour"
              type="category"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={2}
              label={{
                value: "",
                position: "insideBottom",
                offset: -6,
                style: { textAnchor: "middle", fill: "#6B7280" },
              }}
              tickFormatter={(value) => {
                // Show only every 4th hour for clarity
                return parseInt(value) % 4 === 0 ? value : ""
              }}
              allowDuplicatedCategory={false}
            />
            <YAxis
              domain={[28, 90]}
              tick={{ fontSize: 12, fill: "#6B7280" }}
              axisLine={false}
              tickLine={false}
              label={{
                value: "Soil Moisture (%)",
                angle: -90,
                position: "insideLeft",
                style: { textAnchor: "middle", fill: "#6B7280" },
              }}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            {blocks.map((block) => (
              <Line
                key={block.name}
                dataKey={block.name}
                type="linear"
                stroke={block.color}
                strokeWidth={2}
                dot={false}
                isAnimationActive={false}
                name={block.name}
              />
            ))}
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="text-muted-foreground leading-none font-mono text-xs">
          Integrate in-field sensors to inform better decision-making.
        </div>
      </CardFooter>
    </Card>
  )
}