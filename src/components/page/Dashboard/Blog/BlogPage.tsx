// "use client";

// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Switch } from "@/components/ui/switch";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Textarea } from "@/components/ui/textarea";
// // import { BlogPostType, useBlog } from "@/contexts/BlogContext";
// import React, { useState } from "react";
// // import BlogEditor from "./BlogEditor";
// const BlogPage = () => {
//   //   const { posts, addPost, updatePost, deletePost } = useBlog();
//   const [activeTab, setActiveTab] = useState("new-post");
//   const [editingPost, setEditingPost] = useState(null);

//   const [formData, setFormData] = useState({
//     title: "",
//     excerpt: "",
//     author: "",
//     content: "",
//     published: false,
//   });

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSwitchChange = (checked: boolean) => {
//     setFormData({ ...formData, published: checked });
//   };

//   const handleEditorChange = (content: string) => {
//     setFormData({ ...formData, content });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (editingPost) {
//       updatePost(editingPost.id, {
//         ...formData,
//       });

//       setEditingPost(null);
//     } else {
//       addPost({
//         ...formData,
//       });
//     }

//     setFormData({
//       title: "",
//       excerpt: "",
//       author: "",
//       content: "",
//       published: false,
//     });

//     setActiveTab("all-posts");
//   };

//   const handleEdit = (post: BlogPostType) => {
//     setEditingPost(post);
//     setFormData({
//       title: post.title,
//       excerpt: post.excerpt,
//       author: post.author,
//       content: post.content,
//       published: post.published,
//     });
//     setActiveTab("new-post");
//   };

//   const handleDelete = (id: string) => {
//     deletePost(id);
//   };

//   const handleCancel = () => {
//     setEditingPost(null);
//     setFormData({
//       title: "",
//       excerpt: "",
//       author: "",
//       content: "",
//       published: false,
//     });
//   };

//   return (
//     <div className="">
//       <div className="flex justify-between items-center mb-6">
//         <div>
//           <h1 className="text-3xl font-bold">Blog Admin Dashboard</h1>
//           <p className="text-muted-foreground">Manage your blog posts</p>
//         </div>
//       </div>

//       <Tabs
//         defaultValue="new-post"
//         value={activeTab}
//         onValueChange={setActiveTab}
//       >
//         <TabsList className="grid w-full max-w-md grid-cols-2 mb-6">
//           <TabsTrigger value="new-post">
//             {editingPost ? "Edit Post" : "New Post"}
//           </TabsTrigger>
//           <TabsTrigger value="all-posts">All Posts</TabsTrigger>
//         </TabsList>

//         <TabsContent value="new-post" className="space-y-4">
//           <Card>
//             <CardHeader>
//               <CardTitle>
//                 {editingPost ? "Edit Post" : "Create New Post"}
//               </CardTitle>
//               <CardDescription>
//                 {editingPost
//                   ? "Update your existing blog post with the form below"
//                   : "Fill in the form below to create a new blog post"}
//               </CardDescription>
//             </CardHeader>
//             <CardContent>
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="space-y-2">
//                   <Label htmlFor="title">Post Title</Label>
//                   <Input
//                     id="title"
//                     name="title"
//                     value={formData.title}
//                     onChange={handleInputChange}
//                     placeholder="Enter post title"
//                     required
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="author">Author</Label>
//                   <Input
//                     id="author"
//                     name="author"
//                     value={formData.author}
//                     onChange={handleInputChange}
//                     placeholder="Enter author name"
//                     required
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="excerpt">Excerpt</Label>
//                   <Textarea
//                     id="excerpt"
//                     name="excerpt"
//                     value={formData.excerpt}
//                     onChange={handleInputChange}
//                     placeholder="Enter a short description of your post"
//                     required
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="content">Content</Label>
//                   {/* <BlogEditor
//                     value={formData.content}
//                     onChange={handleEditorChange}
//                   /> */}
//                 </div>

//                 <div className="flex items-center space-x-2">
//                   <Switch
//                     id="published"
//                     checked={formData.published}
//                     onCheckedChange={handleSwitchChange}
//                   />
//                   <Label htmlFor="published">Publish post</Label>
//                 </div>

//                 <div className="flex justify-end gap-2">
//                   {editingPost && (
//                     <Button
//                       type="button"
//                       variant="outline"
//                       onClick={handleCancel}
//                     >
//                       Cancel
//                     </Button>
//                   )}
//                   <Button type="submit">
//                     {editingPost ? "Update Post" : "Create Post"}
//                   </Button>
//                 </div>
//               </form>
//             </CardContent>
//           </Card>
//         </TabsContent>

//         <TabsContent value="all-posts">
//           <Card>
//             <CardHeader>
//               <CardTitle>All Blog Posts</CardTitle>
//               <CardDescription>Manage your existing blog posts</CardDescription>
//             </CardHeader>
//             <CardContent>
//               {/* <BlogPostsList
//                 posts={posts}
//                 onEdit={handleEdit}
//                 onDelete={handleDelete}
//                 isAdminView
//               /> */}
//             </CardContent>
//           </Card>
//         </TabsContent>
//       </Tabs>
//     </div>
//   );
// };

// export default BlogPage;
