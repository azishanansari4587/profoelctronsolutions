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
    accessorKey: "subject",
    header: "Subject",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("subject")}</div>
    )
  },

  {
    accessorKey: "message",
    header: "Message",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("message")}</div>
    )
  },

  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const contact = row.original
      return (
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleEdit(contact)}
          >
            <Eye/>
          </Button>
          <Button
            variant="destructive"
            // size="sm"
            className="h-8 w-8 p-0"
            onClick={() => handleDelete(contact)}
          >
            <Trash2/>
          </Button>
        </div>
      )
    },
  },
]

const ContactRequest = () => {
  
    const [subscribers, setSubscribers] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchContacts = async () => {
        try {
          const res = await fetch("/api/contact");
          const data = await res.json();
          setSubscribers(data.subscribers);
        } catch (error) {
          console.error("Error fetching subscribers:", error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchContacts();
    }, []);
  
    if (loading) return <Spinner/>;

  return (
    <div className="flex flex-1 flex-col">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-tech-darkBlue to-tech-blue text-white py-10">
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Request</h1>
            <p className="text-lg max-w-2xl mx-auto opacity-90">
            Manage your contact request content efficiently
            </p>
        </div>
        </section>

        {subscribers.length === 0 ? ( 
          <p className='flex items-center justify-center h-screen w-full'> No Contact Found</p>
        ) : (
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 p-4 md:gap-6 md:p-6">
              <DataTable columns={userColumns} data={subscribers} filterColumn="name" filterPlaceholder="Search name..." />
            </div>
          </div>
          )
        } 
    </div>
  )
}

export default ContactRequest