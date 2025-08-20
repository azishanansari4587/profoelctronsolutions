"use client"
import React, { useEffect, useState } from "react"
import { TrendingDownIcon, TrendingUpIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function SectionCards() {
  const [stats, setStats] = useState({
    projectCount: 0,
    projectGrowth: 0,

    subscriberCount: 0,
    subscriberGrowth: 0,

    teamMemberCount: 0,
    teamMemberGrowth: 0,

    blogCount: 0,
    blogGrowth: 0,

    consultationCount: 0,
    consultationGrowth: 0,

    contactCount: 0,
    contactGrowth: 0,
  })

  useEffect(() => {
    fetch("/api/counts")
      .then((res) => {
        if (!res.ok) throw new Error(`API Error: ${res.status}`)
        return res.json()
      })
      .then((data) => setStats(data))
      .catch((err) => {
        console.error("❌ Failed to fetch stats:", err.message)
      })
  }, [])

  const cards = [
    {
      title: "Total Projects",
      count: stats.projectCount,
      growth: stats.projectGrowth,
      description: "Compared to last month",
    },
    {
      title: "Subscribers",
      count: stats.subscriberCount,
      growth: stats.subscriberGrowth,
      description: "Newsletter performance",
    },
    {
      title: "Team Members",
      count: stats.teamMemberCount,
      growth: stats.teamMemberGrowth,
      description: "Team expansion update",
    },
    {
      title: "Contacts",
      count: stats.contactCount,
      growth: stats.contactGrowth,
      description: "Inbound inquiries trend",
    },
    {
      title: "Consultations",
      count: stats.consultationCount,
      growth: stats.consultationGrowth,
      description: "Client interest over time",
    },
    {
      title: "Blogs",
      count: stats.blogCount,
      growth: stats.blogGrowth,
      description: "Content engagement metric",
    },
  ]

  return (
    <div className="grid grid-cols-2 gap-4 px-4 lg:grid-cols-3 2xl:grid-cols-4 lg:px-6">
      {cards.map((card, index) => (
        <Card key={index} className="@container/card">
          <CardHeader className="relative">
            <CardDescription>{card.title}</CardDescription>
            <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
              {card.count}
            </CardTitle>
            <div className="absolute right-4 top-4">
              <Badge
                variant="outline"
                className={`flex gap-1 rounded-lg text-xs ${
                  card.growth >= 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                {card.growth >= 0 ? (
                  <TrendingUpIcon className="size-3" />
                ) : (
                  <TrendingDownIcon className="size-3" />
                )}
                {card.growth}%
              </Badge>
            </div>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1 text-sm">
            <div className="flex gap-2 font-medium">
              {card.growth >= 0
                ? "Growing this month"
                : "Falling this month"}{" "}
              {card.growth >= 0 ? (
                <TrendingUpIcon className="size-4" />
              ) : (
                <TrendingDownIcon className="size-4" />
              )}
            </div>
            <div className="text-muted-foreground">{card.description}</div>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
