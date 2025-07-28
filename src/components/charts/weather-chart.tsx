"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Weather data with temperature, humidity, and dewpoint
// Generate stochastic hourly weather data for a single day (2024-01-01) in Fahrenheit
function generateStochasticWeatherDataForDayF(dateStr: string) {
  const data = []
  // Base values for the day (Celsius)
  const baseTempC = 18 + Math.random() * 4 // 18-22°C at midnight
  const baseHumidity = 60 + Math.random() * 10 // 60-70% at midnight
  const baseDewC = baseTempC - (3 + Math.random() * 2) // dewpoint a few degrees below temp

  for (let hour = 0; hour < 24; hour++) {
    // Simulate a diurnal temperature curve (warmer in afternoon, cooler at night)
    const tempVariationC =
      8 * Math.sin(((Math.PI * (hour - 6)) / 12)) + (Math.random() - 0.5) * 1.5
    const temperatureC = baseTempC + tempVariationC

    // Humidity inversely related to temperature, with some noise
    const humidity =
      Math.max(
        40,
        Math.min(
          95,
          baseHumidity -
            0.7 * tempVariationC +
            (Math.random() - 0.5) * 5
        )
      )

    // Dewpoint tracks temperature, but with less diurnal swing
    const dewpointC =
      baseDewC + 0.2 * tempVariationC + (Math.random() - 0.5) * 0.7

    // Convert to Fahrenheit
    const temperatureF = Math.round((temperatureC * 9) / 5 + 32)
    const dewpointF = Math.round((dewpointC * 9) / 5 + 32)

    data.push({
      date: `${dateStr}T${hour.toString().padStart(2, "0")}:00`,
      temperature: temperatureF,
      humidity: Math.round(humidity),
      dewpoint: dewpointF,
    })
  }
  return data
}

const weatherData = generateStochasticWeatherDataForDayF("2024-01-01")

const weatherConfig = {
  temperature: {
    label: "Temperature (°C)",
    color: "#EF4444", // Red for temperature
  },
  humidity: {
    label: "Humidity (%)",
    color: "#3B82F6", // Blue for humidity
  },
  dewpoint: {
    label: "Dew Point (°C)",
    color: "#8B5CF6", // Purple for dew point
  },
} satisfies ChartConfig

export function WeatherChart() {
  const [timeRange] = React.useState("30d") // setTimeRange is unused, so omit

  const filteredData = weatherData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date("2024-01-30")
    let daysToSubtract = 30
    if (timeRange === "7d") {
      daysToSubtract = 7
    } else if (timeRange === "14d") {
      daysToSubtract = 14
    }
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    return date >= startDate
  })

  return (
    <Card className="pt-0">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1">
          <CardTitle>Microclimate Monitoring</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={weatherConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillTemperature" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="#EF4444"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="#EF4444"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillHumidity" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="#3B82F6"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="#3B82F6"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillDewpoint" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="#8B5CF6"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="#8B5CF6"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="dewpoint"
              type="natural"
              fill="url(#fillDewpoint)"
              stroke="#8B5CF6"
              stackId="a"
            />
            <Area
              dataKey="humidity"
              type="natural"
              fill="url(#fillHumidity)"
              stroke="#3B82F6"
              stackId="a"
            />
            <Area
              dataKey="temperature"
              type="natural"
              fill="url(#fillTemperature)"
              stroke="#EF4444"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="text-muted-foreground leading-none font-mono text-xs">
          Track 25+ microclimatic conditions in real-time at a block-level.
        </div>
      </CardFooter>
    </Card>
  )
} 