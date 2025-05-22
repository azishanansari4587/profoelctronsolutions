"use client"
import React, { useState } from 'react';
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
  const [isEditing, setIsEditing] = useState(false);
  const [currentPost, setCurrentPost] = useState(null);
  const { toast } = useToast();
  
  // Form state
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState("Draft");
  
  const resetForm = () => {
    setTitle("");
    setExcerpt("");
    setContent("");
    setCategory("");
    setAuthor("");
    setStatus("Draft");
    setIsEditing(false);
    setCurrentPost(null);
  };
  
  const handleEditPost = (post) => {
    setIsEditing(true);
    setCurrentPost(post);
    setTitle(post.title);
    setExcerpt(post.excerpt);
    setContent(post.content || "");
    setCategory(post.category);
    setAuthor(post.author);
    setStatus(post.status);
  };
  
  const handleDeletePost = (postId) => {
    setPosts(posts.filter(post => post.id !== postId));
    toast({
      title: "Post Deleted",
      description: "The blog post has been successfully deleted.",
      variant: "destructive",
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const date = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    
    if (isEditing && currentPost) {
      setPosts(posts.map(post => 
        post.id === currentPost.id 
          ? { ...post, title, excerpt, category, author, status, content, date }
          : post
      ));
      
      toast({
        title: "Post Updated",
        description: "The blog post has been successfully updated.",
      });
    } else {
      const newPost = {
        id: Date.now(),
        title,
        excerpt,
        category,
        date,
        author,
        status,
        content
      };
      
      setPosts([newPost, ...posts]);
      
      toast({
        title: "Post Created",
        description: "The new blog post has been successfully created.",
      });
    }
    
    resetForm();
  };

  return (
    <div className="min-h-screen flex flex-col">
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-tech-darkBlue to-tech-blue text-white py-10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Admin Dashboard</h1>
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
                <TabsTrigger value="posts">Blog Posts</TabsTrigger>
                <TabsTrigger value="create">Create/Edit Post</TabsTrigger>
              </TabsList>
              
              <TabsContent value="posts">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>Manage Blog Posts</span>
                      <Button 
                        variant="outline" 
                        onClick={resetForm}
                        className="flex items-center"
                      >
                        <Plus className="mr-2 h-4 w-4" />
                        New Post
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
                        {posts.map((post) => (
                          <TableRow key={post.id}>
                            <TableCell className="font-medium">{post.title}</TableCell>
                            <TableCell>{post.category}</TableCell>
                            <TableCell>
                              <span 
                                className={`px-2 py-1 rounded-full text-xs ${
                                  post.status === 'Published' 
                                    ? 'bg-green-100 text-green-700' 
                                    : 'bg-yellow-100 text-yellow-700'
                                }`}
                              >
                                {post.status}
                              </span>
                            </TableCell>
                            <TableCell>{post.date}</TableCell>
                            <TableCell>{post.author}</TableCell>
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
                                        Are you sure you want to delete "{post.title}"? This action cannot be undone.
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
              
              <TabsContent value="create">
                <Card>
                  <CardHeader>
                    <CardTitle>{isEditing ? 'Edit Blog Post' : 'Create New Blog Post'}</CardTitle>
                    <CardDescription>
                      {isEditing 
                        ? `You're editing "${currentPost?.title}"`
                        : "Fill in the details to create a new blog post"
                      }
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                            Project Name
                          </label>
                          <Input
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter the post title"
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
                            <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-1">
                              Author
                            </label>
                            <Input
                              id="author"
                              value={author}
                              onChange={(e) => setAuthor(e.target.value)}
                              placeholder="Author name"
                              required
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-1">
                            Excerpt
                          </label>
                          <Textarea
                            id="excerpt"
                            value={excerpt}
                            onChange={(e) => setExcerpt(e.target.value)}
                            placeholder="Brief description of the post"
                            required
                          />
                        </div>
                        
                        <div>
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
                          type="button" 
                          variant="outline" 
                          onClick={resetForm}
                        >
                          {isEditing ? "Cancel" : "Clear"}
                        </Button>
                        <Button 
                          type="submit"
                          className="bg-tech-blue hover:bg-tech-lightBlue"
                        >
                          {isEditing ? "Update Post" : "Create Post"}
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

export default Project;