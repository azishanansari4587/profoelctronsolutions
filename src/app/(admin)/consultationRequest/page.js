"use client"
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { DataTable } from '@/components/data-table'
import React from 'react'
import { Eye, Trash2 } from 'lucide-react'
import { useState, useEffect } from 'react'
import Spinner from '@/components/Spinner'



const userColumns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        className="border-black"
        checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
        // onChange={(e) => table.toggleAllPageRowsSelected(!!e.target.checked)}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
      className="border-black"
        checked={row.getIsSelected()}
        // onChange={(e) => row.toggleSelected(!!e.target.checked)}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("name")}</div>
    )
  },

  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => (
      <div>{row.getValue("email")}</div>
    )
  },

  {
    accessorKey: "phone",
    header: "Contact",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("phone")}</div>
    )
  },

  {
    accessorKey: "company_name",
    header: "Company",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("company_name")}</div>
    )
  },

  {
    accessorKey: "service",
    header: "Service",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("service")}</div>
    )
  },

  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const consultation = row.original
      return (
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleEdit(consultation)}
          >
            <Eye/>
          </Button>
          <Button
            variant="destructive"
            // size="sm"
            className="h-8 w-8 p-0"
            onClick={() => handleDelete(consultation)}
          >
            <Trash2/>
          </Button>
        </div>
      )
    },
  },
]

const ConsultationRequest = () => {

  const [subscribers, setConsultation] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchConsultations = async () => {
      try {
        const res = await fetch("/api/consultation");
        const data = await res.json();
        setConsultation(data.subscribers);
      } catch (error) {
        console.error("Error fetching subscribers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchConsultations();
  }, []);

  if (loading) return <Spinner/>;


  return (
    <div className="flex flex-1 flex-col">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-tech-darkBlue to-tech-blue text-white py-10">
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Consultation Request</h1>
            <p className="text-lg max-w-2xl mx-auto opacity-90">
            Manage your Consultation Request content efficiently
            </p>
        </div>
        </section>

        {subscribers.length === 0 ? ( 
          <p className='flex items-center justify-center h-screen w-full'> No Consultation Request Found</p>
        ) : (
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 p-4 md:gap-6 md:p-6">
              <DataTable columns={userColumns} data={subscribers} filterColumn="name" filterPlaceholder="Search name..." />
            </div>
          </div>
        )} 
    </div>
  )
}

export default ConsultationRequest