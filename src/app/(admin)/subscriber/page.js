"use client"
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { DataTable } from '@/components/data-table'
import React from 'react'
import { Edit, Trash2 } from 'lucide-react'
import { useState, useEffect } from 'react'
import Spinner from '@/components/Spinner'
import { toast } from 'react-toastify'
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog";



const Subscriber = () => {
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSubscriber, setSelectedSubscriber] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);


  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        const res = await fetch("/api/subscriber");
        const data = await res.json();
        setSubscribers(data.subscribers);
      } catch (error) {
        console.error("Error fetching subscribers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSubscribers();
  }, []);

  if (loading) return <Spinner/>;


  const handleDeleteSubscriber = async (id) => {
    try {
      const res = await fetch(`/api/subscriber?id=${id}`, {
        method: "DELETE",
      });
  
      const data = await res.json();
  
      if (res.ok) {
        toast.success("Subscriber deleted");
        setSubscribers((prev) => prev.filter((s) => s.id !== id));
      } else {
        toast.error(data.message || "Delete failed");
      }
    } catch (err) {
      toast.error("Error deleting subscriber");
    } finally {
      setIsDialogOpen(false);
      setSelectedSubscriber(null);
    }
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
      accessorKey: "email",
      header: "Email",
      cell: ({ row }) => (
        <div>{row.getValue("email")}</div>
      )
    },
  
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => {
        const subscriber = row.original;
        return (
          <div className="flex gap-2">
            <Button
              variant="destructive"
              className="h-8 w-8 p-0"
              onClick={() => {
                setSelectedSubscriber(subscriber);
                setIsDialogOpen(true);
              }}
            >
              <Trash2 />
            </Button>
          </div>
        );
      },
    }
    
  ]

  
  
  


  return (
    <div className="flex flex-1 flex-col">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-tech-darkBlue to-tech-blue text-white py-10">
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Subscriber</h1>
            <p className="text-lg max-w-2xl mx-auto opacity-90">
            Manage your Newsletter Subscriber content efficiently
            </p>
        </div>
        </section>

        {subscribers.length === 0 ? ( 
          <p className='flex items-center justify-center h-screen w-full'> No Subscriber Found</p>
        ) : (
          <div className="@container/main flex flex-1 flex-col gap-2">
              <div className="flex flex-col gap-4 p-4 md:gap-6 md:p-6">
                  <DataTable columns={userColumns} data={subscribers} filterColumn="email" filterPlaceholder="Search email..." />
              </div>
          </div>
        )}
        {/** Dilaog Box for Delete */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Confirm Deletion</DialogTitle>
              <DialogDescription>
                Are you sure you want to delete <strong>{selectedSubscriber?.email}</strong>? This action cannot be undone.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button
                variant="destructive"
                onClick={() => handleDeleteSubscriber(selectedSubscriber?.id)}
              >
                Delete
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

    </div>
  )
}

export default Subscriber