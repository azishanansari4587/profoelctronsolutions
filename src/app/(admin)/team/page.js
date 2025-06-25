"use client"
import React, { useState, useEffect } from 'react';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
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
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { trash, edit, plus, Plus, Trash, Edit } from "lucide-react";
import Spinner from '@/components/Spinner';

// Sample blog posts data
const initialPosts = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Mohammad Zishan Ansari",
    position: "SDE-I Full Stack Developer",
    category: "Developer",
    date: "May 5, 2025",
    author: "John Smith",
    status: "Active"
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Azam Ansari",
    position: "Cyber Security Head",
    category: "Cyber Security",
    date: "May 1, 2025",
    author: "Emily Johnson",
    status: "Active"
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Leveraging Big Data for Business Intelligence",
    excerpt: "How modern data analysis techniques can drive strategic business decisions.",
    category: "Data Analysis",
    date: "April 28, 2025",
    author: "Michael Wang",
    status: "Inactive"
  },
];



const Team = () => {
  const [form, setForm] = useState({
    name: '',
    position: '',
    role: '',
    description: '',
    image: null,
    status: 'active'
  });

  const statusOptions = ["Active", "Deactive"];
  const [status, setStatus] = useState("Active");

  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/teamMember");
        const data = await res.json();
        setSubscribers(data.subscribers);
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <Spinner/>;


  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setForm({ ...form, image: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Upload image to Cloudinary
      const imageForm = new FormData();
      imageForm.append('file', form.image);

      const uploadRes = await fetch('/api/upload', {
        method: 'POST',
        body: imageForm,
      });

      const { url } = await uploadRes.json();

      // 2. Send form data + image URL to /api/team
      const res = await fetch('/api/teamMember', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          position: form.position,
          role: form.role,
          description: form.description,
          imageUrl: url,
          status: form.status,
        }),
      });

      const result = await res.json();
      setLoading(false);

      if (res.ok) {
        alert('Team member added successfully');
        setForm({
          name: '',
          position: '',
          role: '',
          description: '',
          image: null,
          status: '',
        });
      } else {
        alert('Failed: ' + result.message);
      }
    } catch (error) {
      console.error('Submit error:', error);
      setLoading(false);
      alert('Something went wrong');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-tech-darkBlue to-tech-blue text-white py-10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Team Memebers</h1>
            <p className="text-lg max-w-2xl mx-auto opacity-90">
              Manage your Team Memebers efficiently
            </p>
          </div>
        </section>
        
        {/* Admin Panel */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="team_members" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
                <TabsTrigger value="team_members">Team Memebers</TabsTrigger>
                <TabsTrigger value="add_team_members">Add Team Memebers</TabsTrigger>
              </TabsList>
              
              <TabsContent value="team_members">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>Manage Team Members</span>
                      <Button 
                        variant="outline" 
                        // onClick={resetForm}
                        className="flex items-center"
                      >
                        Total Members :
                        <span className='rounded-full bg-primary text-white px-2 py-1'>{subscribers.length}</span>
                      </Button>
                    </CardTitle>
                    <CardDescription>
                      View, edit or delete your team members
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableCaption>A list of your team members.</TableCaption>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Image</TableHead>
                          <TableHead>Name</TableHead>
                          <TableHead>Role</TableHead>
                          <TableHead>Position</TableHead>
                          <TableHead>Joining Date</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {subscribers.map((post) => (
                          <TableRow key={post.id}>
                            <TableCell className="font-medium">
                                <img src={post.image} alt="" width="100" height="100" />
                            </TableCell>
                            <TableCell>{post.name}</TableCell>
                            <TableCell>{post.role}</TableCell>
                            <TableCell>{post.position}</TableCell>
                            <TableCell>{new Date(post.joining_date).toLocaleDateString('en-GB', {
                              day: '2-digit',
                              month: 'short',
                              year: 'numeric',
                            })}</TableCell>
                            <TableCell>
                              <span 
                                className={`px-2 py-1 rounded-full text-xs capitalize ${
                                  post.status === 'active' 
                                    ? 'bg-green-100 text-green-700' 
                                    : 'bg-yellow-100 text-yellow-700'
                                }`}
                              >
                                {post.status}
                              </span>
                            </TableCell>
                            <TableCell className="text-right">
                              <div className="flex justify-end gap-2">
                                <Button 
                                  variant="outline" 
                                  size="sm" 
                                  onClick={() => handleEditPost(post)}
                                >
                                  <Edit className="h-4 w-4" />
                                </Button>
                                
                                <Dialog>
                                  <DialogTrigger asChild>
                                    <Button variant="outline" size="sm" className="text-red-500">
                                      <Trash className="h-4 w-4" />
                                    </Button>
                                  </DialogTrigger>
                                  <DialogContent>
                                    <DialogHeader>
                                      <DialogTitle>Confirm Deletion</DialogTitle>
                                      <DialogDescription>
                                        Are you sure you want to delete &quot;{post.name}&quot;? This action cannot be undone.
                                      </DialogDescription>
                                    </DialogHeader>
                                    <DialogFooter>
                                      <DialogClose asChild>
                                        <Button variant="outline">Cancel</Button>
                                      </DialogClose>
                                      <DialogClose asChild>
                                        <Button 
                                          variant="destructive" 
                                          onClick={() => handleDeletePost(post.id)}
                                        >
                                          Delete
                                        </Button>
                                      </DialogClose>
                                    </DialogFooter>
                                  </DialogContent>
                                </Dialog>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="add_team_members">
                <Card>
                  <CardHeader>
                    {/* <CardTitle>{isEditing ? 'Edit Blog Post' : 'Create New Blog Post'}</CardTitle> */}
                    {/* <CardDescription>
                      {isEditing 
                        ? `You're editing "${currentPost?.title}"`
                        : "Fill in the details to create a new blog post"
                      }
                    </CardDescription> */}
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Team Member Name
                          </label>
                          <Input
                            type="text"
                            id="name"
                            name= "name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Enter the team member name"
                            required
                          />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          
                          <div>
                            <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">
                              Postion
                            </label>
                            <Input
                              id="position"
                              name="position"
                              value={form.position}
                              onChange={handleChange}
                              placeholder="Position in Company"
                              required
                            />
                          </div>

                          <div>
                            <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                              Role of Member
                            </label>
                            <Input
                              id="role"
                              name="role"
                              value={form.role}
                              onChange={handleChange}
                              placeholder="Enter the role"
                              required
                            />
                          </div>

                        </div>
                        
                        <div>
                          <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
                            Image
                          </label>
                          <Input
                            type="file"
                            id="image"
                            name="image"
                            accept="image/*"
                            onChange={handleChange}
                            required
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                            Content
                          </label>
                          <Textarea
                            id="description"
                            name="description"
                            value={form.description}
                            onChange={handleChange}
                            placeholder="Describe about the member"
                            className="h-40"
                            required
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
                            Status
                          </label>
                          <Select value={status} onValueChange={setStatus}>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select status" />
                            </SelectTrigger>
                            <SelectContent>
                              {statusOptions.map((stat) => (
                                <SelectItem key={stat} value={stat}>
                                  {stat}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      <div className="flex justify-end space-x-4">
                        <Button 
                          type="submit"
                          className="bg-tech-blue hover:bg-tech-lightBlue"
                        >
                          Add Team Member
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Team;