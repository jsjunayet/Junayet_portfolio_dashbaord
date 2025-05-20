// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { formatDistanceToNow } from "date-fns";
// import { Edit, Eye, Trash2 } from "lucide-react";
// import Link from "next/link";
// import React from "react";

// interface BlogPostsListProps {
//   //   posts: BlogPostType[];
//   onEdit?: (post: BlogPostType) => void;
//   onDelete?: (id: string) => void;
//   isAdminView?: boolean;
// }

// const BlogPostsList: React.FC<BlogPostsListProps> = ({
//   posts,
//   onEdit,
//   onDelete,
//   isAdminView = false,
// }) => {
//   const formatDate = (dateString: string) => {
//     try {
//       return formatDistanceToNow(new Date(dateString), { addSuffix: true });
//     } catch (err) {
//       console.log(err);
//       return "Invalid date";
//     }
//   };

//   return (
//     <div className="space-y-6">
//       {posts.length === 0 ? (
//         <div className="text-center py-12">
//           <h3 className="text-lg font-medium">No posts found</h3>
//           <p className="text-muted-foreground">
//             {isAdminView
//               ? "Create your first blog post by clicking 'New Post'"
//               : "Check back soon for new content"}
//           </p>
//         </div>
//       ) : (
//         posts.map((post) => (
//           <Card key={post.id} className="overflow-hidden">
//             <CardHeader>
//               <div className="flex justify-between items-start">
//                 <div>
//                   <CardTitle className="text-xl">{post.title}</CardTitle>
//                   <CardDescription>
//                     By {post.author} • {formatDate(post.date)}
//                   </CardDescription>
//                 </div>
//                 {isAdminView && (
//                   <Badge variant={post.published ? "default" : "outline"}>
//                     {post.published ? "Published" : "Draft"}
//                   </Badge>
//                 )}
//               </div>
//             </CardHeader>
//             <CardContent>
//               <p className="line-clamp-2 text-muted-foreground">
//                 {post.excerpt}
//               </p>
//             </CardContent>
//             <CardFooter className="flex justify-between bg-muted/30 bg-opacity-50 p-4">
//               <Button variant="outline" asChild>
//                 <Link href={`/blog/${post.id}`}>
//                   <Eye className="mr-2 h-4 w-4" />
//                   Read Post
//                 </Link>
//               </Button>
//               {isAdminView && onEdit && onDelete && (
//                 <div className="flex gap-2">
//                   <Button
//                     variant="outline"
//                     size="icon"
//                     onClick={() => onEdit(post)}
//                   >
//                     <Edit className="h-4 w-4" />
//                   </Button>
//                   <Button
//                     variant="destructive"
//                     size="icon"
//                     onClick={() => onDelete(post.id)}
//                   >
//                     <Trash2 className="h-4 w-4" />
//                   </Button>
//                 </div>
//               )}
//             </CardFooter>
//           </Card>
//         ))
//       )}
//     </div>
//   );
// };

// export default BlogPostsList;
