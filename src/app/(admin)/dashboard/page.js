import React from 'react'
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards"
import data from "@/components/data.json"


export default function Dashboard() {
  return (
        <div className="flex flex-1 flex-col">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-tech-darkBlue to-tech-blue text-white py-10">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Admin Dashboard</h1>
                <p className="text-lg max-w-2xl mx-auto opacity-90">
                Manage your Dashboard content efficiently
                </p>
            </div>
            </section>

            <div className="@container/main flex flex-1 flex-col gap-2">
                <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                <SectionCards />
                <div className="px-4 lg:px-6">
                    <ChartAreaInteractive />
                </div>
                {/* <DataTable data={data} /> */}
                </div>
            </div>
        </div>
  )
}