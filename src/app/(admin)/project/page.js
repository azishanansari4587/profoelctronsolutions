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
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from 'react-toastify';
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
import { Trash, Pencil } from "lucide-react";

import { useRef } from 'react'
import TiptapEditor from '@/components/TiptapEditor';
import Spinner from '@/components/Spinner';

// Sample blog posts data
const initialPosts = [
  {
    id: 1,
    title: "The Future of Cloud Computing: Trends to Watch",
    excerpt: "Explore emerging trends in cloud computing and how they're reshaping business infrastructure.",
    category: "Cloud Computing",
    date: "May 5, 2025",
    author: "John Smith",
    status: "Published"
  },
  {
    id: 2,
    title: "Cybersecurity Best Practices for Remote Teams",
    excerpt: "Learn how to protect your business data with a distributed workforce.",
    category: "Cyber Security",
    date: "May 1, 2025",
    author: "Emily Johnson",
    status: "Published"
  },
  {
    id: 3,
    title: "Leveraging Big Data for Business Intelligence",
    excerpt: "How modern data analysis techniques can drive strategic business decisions.",
    category: "Data Analysis",
    date: "April 28, 2025",
    author: "Michael Wang",
    status: "Draft"
  },
];

// Categories for blog posts
const categories = [
  "Cloud Computing",
  "Cyber Security",
  "Data Analysis",
  "Web Development",
  "Custom Software",
  "Database Management"
];

// Status options for blog posts
const statusOptions = ["Published", "Draft"];


const Project = () => {
  const [posts, setPosts] = useState(initialPosts);
  const fileInputRef = useRef(null);

  const [openEditDialog, setOpenEditDialog]= useState(false);
  const [editBlogData, setEditBlogData] = useState(null);

  // Form state
  const [name, setName] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [clientName, setClientName] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [contact, setContact] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [image, setImage] = useState("");
  const [status, setStatus] = useState("Draft");


  

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
  
    const formData = new FormData();
    formData.append("file", file);
  
    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });
  
    const data = await res.json();
    if (data.url) {
      setImage(data.url); // Store Cloudinary image URL
    }
  };


  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/blogs");
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
  


const handleSubmit = async (e) => {
  e.preventDefault();

  const date = new Date().toISOString().split("T")[0];


  const postData = {
    name,
    shortDescription,
    clientName,
    category,
    company,
    contact,
    status,
    startDate,
    endDate,
    image,
  };

  try {
      // Create new post (POST request)
      const res = await fetch('/api/blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData),
      });

      if (!res.ok) throw new Error("Failed to create post");

      toast.success({
        title: "Post Created",
        description: "The new blog post has been successfully created.",
      });
      // ✅ Reset all fields after successful post
      setName("");
      setShortDescription("");
      setCategory("");
      setClientName("");
      setStatus("Draft");
      setCompany(""); // this will also reset TipTap
      setImage("");
      setStartDate("");
      setEndDate("");
      fileInputRef.current.value = ""; // reset file input (optional)

    } catch (error) {
    toast({
      title: "Error",
      description: error.message,
      variant: "destructive"
    });
  }
};


  return (
    <div className="min-h-screen flex flex-col">
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-tech-darkBlue to-tech-blue text-white py-10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Blogs</h1>
            <p className="text-lg max-w-2xl mx-auto opacity-90">
              Manage your blog content efficiently
            </p>
          </div>
        </section>
        
        {/* Admin Panel */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="posts" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
                <TabsTrigger value="posts">Projects</TabsTrigger>
                <TabsTrigger value="create">Create/Edit Projects</TabsTrigger>
              </TabsList>
              
              <TabsContent value="posts">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>Manage Projects</span>
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
                      View, edit or delete your blog posts
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableCaption>A list of your blog posts.</TableCaption>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Title</TableHead>
                          <TableHead>Category</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Author</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {subscribers?.length === 0 ? (
                          <TableRow>
                            <TableCell colSpan={6} className="text-center py-4">
                              No blog posts found.
                            </TableCell>
                          </TableRow>) 
                          : (subscribers.map((blog) => (
                          <TableRow key={blog.id}>
                            <TableCell className="font-medium max-w-[250px] truncate"
                              title={blog.title}
                            >
                              {blog.title}</TableCell>
                            <TableCell>{blog.category}</TableCell>
                            <TableCell>
                              <span 
                                className={`px-2 py-1 rounded-full text-xs ${
                                  blog.status === 'Published' 
                                    ? 'bg-green-100 text-green-700' 
                                    : 'bg-yellow-100 text-yellow-700'
                                }`}
                              >
                                {blog.status}
                              </span>
                            </TableCell>
                            <TableCell>{new Date(blog.date).toLocaleDateString('en-GB', {
                              day: '2-digit',
                              month: 'short',
                              year: 'numeric',
                            })}</TableCell>
                            <TableCell>{blog.author}</TableCell>
                            <TableCell className="text-right">
                              <div className="flex justify-end gap-2">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => {
                                  setEditBlogData(blog); // store blog data in state
                                  setOpenEditDialog(true); // open dialog
                                }}
                              >
                                <Pencil className="h-4 w-4" />
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
                                        Are you sure you want to delete &quot;{blog.title}&quot;? This action cannot be undone.
                                      </DialogDescription>
                                    </DialogHeader>
                                    <DialogFooter>
                                      <DialogClose asChild>
                                        <Button variant="outline">Cancel</Button>
                                      </DialogClose>
                                      <DialogClose asChild>
                                        <Button 
                                          variant="destructive" 
                                          onClick={() => handleDeletePost(blog.id)}
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
                        )))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="create">
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
                            Project Name
                          </label>
                          <Input
                            id="name"
                            value={name}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter the Project Name"
                            required
                          />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                              Category
                            </label>
                            <Select value={category} onValueChange={setCategory}>
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select category" />
                              </SelectTrigger>
                              <SelectContent>
                                {categories.map((cat) => (
                                  <SelectItem key={cat} value={cat}>
                                    {cat}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          
                          <div>
                            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                              Company Name
                            </label>
                            <Input
                              id="company"
                              value={company}
                              onChange={(e) => setAuthor(e.target.value)}
                              placeholder="Company Name"
                              required
                            />
                          </div>

                          <div>
                            <label htmlFor="client_name" className="block text-sm font-medium text-gray-700 mb-1">
                              Client Name
                            </label>
                            <Input
                              id="client_name"
                              value={clientName}
                              onChange={(e) => setAuthor(e.target.value)}
                              placeholder="Client Name"
                              required
                            />
                          </div>

                          <div>
                            <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-1">
                              Contact
                            </label>
                            <Input
                              id="contact"
                              value={contact}
                              onChange={(e) => setAuthor(e.target.value)}
                              placeholder="Contact"
                              required
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="short_description" className="block text-sm font-medium text-gray-700 mb-1">
                          Short Description
                          </label>
                          <Textarea
                            id="short_description"
                            value={shortDescription}
                            onChange={(e) => setExcerpt(e.target.value)}
                            placeholder="Brief description of the project"
                            required
                          />
                        </div>
                        {/* Featured Image */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Featured Image
                          </label>
                          {image && (
                            <div className="mb-2">
                              <img
                                src={image}
                                alt="Preview"
                                className="w-40 h-40 object-cover rounded"
                              />
                            </div>
                          )}
                          <Input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            ref={fileInputRef}
                          />
                        </div>
                        {/* <div>
                          <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
                            Content
                          </label>
                          <Textarea
                            id="content"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            placeholder="Full blog post content"
                            className="h-40"
                            required
                          />
                        </div> */}

                        
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
                        {/* <Button 
                          type="button" 
                          variant="outline" 
                          onClick={resetForm}
                        >
                          {isEditing ? "Cancel" : "Clear"}
                        </Button> */}
                        <Button 
                          type="submit"
                          className="bg-tech-blue hover:bg-tech-lightBlue"
                        >
                          Upload Post
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <Dialog open={openEditDialog} onOpenChange={setOpenEditDialog}>
          <DialogContent className="w-full max-w-7xl max-h-[80vh] p-6 overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Edit Blog</DialogTitle>
            </DialogHeader>
            {editBlogData && (
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  const res = await fetch("/api/blogs", {
                    method: "PUT",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(editBlogData),
                  });
                  const result = await res.json();
                  if (res.ok) {
                    toast.success("Blog updated!");
                    setOpenEditDialog(false);
                    // Optionally refresh blog list
                  } else {
                    toast.error(result.message || "Update failed");
                  }
                }}
                className="space-y-4"
              >
                <Input
                  value={editBlogData.title}
                  onChange={(e) =>
                    setEditBlogData({ ...editBlogData, title: e.target.value })
                  }
                  placeholder="Title"
                />
                <Input
                  value={editBlogData.excerpt}
                  onChange={(e) =>
                    setEditBlogData({ ...editBlogData, excerpt: e.target.value })
                  }
                  placeholder="Excerpt"
                />
                <Input
                  value={editBlogData.category}
                  onChange={(e) =>
                    setEditBlogData({ ...editBlogData, category: e.target.value })
                  }
                  placeholder="Category"
                />
                <Input
                  type="date"
                  value={editBlogData.date}
                  onChange={(e) =>
                    setEditBlogData({ ...editBlogData, date: e.target.value })
                  }
                />
                <Input
                  value={editBlogData.author}
                  onChange={(e) =>
                    setEditBlogData({ ...editBlogData, author: e.target.value })
                  }
                  placeholder="Author"
                />
                <Input
                  value={editBlogData.status}
                  onChange={(e) =>
                    setEditBlogData({ ...editBlogData, status: e.target.value })
                  }
                  placeholder="Status"
                />
                <TiptapEditor value={editBlogData.content} onChange={(e) =>
                    setEditBlogData({ ...editBlogData, content: e.target.value })
                  }  />
                
                <Input
                  value={editBlogData.image}
                  onChange={(e) =>
                    setEditBlogData({ ...editBlogData, image: e.target.value })
                  }
                  placeholder="Image URL"
                />
                <DialogFooter className="sticky">
                  <Button type="submit">Save Changes</Button>
                </DialogFooter>
              </form>
            )}
          </DialogContent>
        </Dialog>
      </main>
      
      <Footer />

      
    </div>



  );
};

export default Project;