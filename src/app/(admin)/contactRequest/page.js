"use client"
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { DataTable } from '@/components/data-table'
import React from 'react'
import { Eye, Trash2 } from 'lucide-react'
import { useState, useEffect } from 'react'
import Spinner from '@/components/Spinner'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { toast } from 'react-toastify'







const ContactRequest = () => {
  
    const [subscribers, setSubscribers] = useState([]);
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
    const [editData, setEditData] = useState(null);
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
    const [deleteData, setDeleteData] = useState(null);

    const [loading, setLoading] = useState(true);

    const handleEdit = (data) => {
      setEditData(data);
      setIsEditDialogOpen(true);
    };

    const handleDelete = (data) => {
      setDeleteData(data);
      setIsDeleteDialogOpen(true);
    };
    

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


    const confirmDelete = async () => {
      try {
        const res = await fetch(`/api/contact?id=${deleteData.id}`, {
          method: "DELETE",
        });
    
        if (res.ok) {
          setSubscribers((prev) =>
            prev.filter((item) => item.id !== deleteData.id)
          );
          setIsDeleteDialogOpen(false);
          setDeleteData(null);
          toast.success("Contact deleted successfully");
        } else {
          toast.error("Failed to delete contact");
          console.error("Failed to delete contact");
        }
      } catch (error) {
        toast.error("Something went wrong while deleting");
        console.error("Error deleting contact:", error);
      }
    };
    
    
    

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

      {/* View Open Dialoge */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen} className="max-w-7xl">
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Contact Request Details</DialogTitle>
            <DialogDescription>
              Here is the detailed information for the selected consultation request.
            </DialogDescription>
          </DialogHeader>
          
          {editData && (
            <div className="space-y-2">
              <p><strong>Name:</strong> {editData.name}</p>
              <p><strong>Email:</strong> {editData.email}</p>
              <p><strong>Service:</strong> {editData.subject}</p>
              <p><strong>Message:</strong> {editData.message}</p>
              <p>
                <strong>Date:</strong>{" "}
                {new Date(editData.created_at).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </p>

              <p>
                <strong>Time:</strong>{" "}
                {new Date(editData.created_at).toLocaleTimeString("en-GB", {
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                })}
              </p>
              {/* Add more fields if available */}
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Delete Modal */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Confirmation</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete{" "}
              <strong>{deleteData?.name}</strong>? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end gap-4 mt-4">
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={confirmDelete}>
              Yes, Delete
            </Button>
          </div>
        </DialogContent>
      </Dialog>

    </div>
  )
}

export default ContactRequest