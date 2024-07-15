import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import posts from "@/data/posts";
import { Post } from "@/types/posts";

interface PostsTableProps {
  limit?: number;
  title?: string;
}

export default function PostsTable({ limit, title }: PostsTableProps) {
  const sortedPosts = posts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const filterPosts = limit ? sortedPosts.slice(0, limit) : sortedPosts;
  return (
    <div className="mt-10">
      <h3 className="text-2xl mb-4 font-semibold">{title ? title : "Posts"}</h3>
      <Table>
        {/* <TableCaption>A list of recent posts.</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead className="hidden md:table-cell">Author</TableHead>
            <TableHead className="hidden md:table-cell text-right">
              Date
            </TableHead>
            <TableHead>View</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filterPosts.map((post) => {
            return (
              <TableRow key={post.id}>
                <TableCell>
                  <Link href={`/posts/${post.id}`}>
                    <span className="font-semibold text-neutral-600 dark:text-white">
                      {post.title}
                    </span>
                  </Link>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {post.author}
                </TableCell>
                <TableCell className="hidden md:table-cell text-right">
                  {post.date}
                </TableCell>
                <TableCell>
                  <Link href={`/posts/edit/${post.id}`}>
                    <button
                      type="button"
                      className="bg-blue-500 hover:bg-blue-700 text-white duration-300 transition-all rounded-md text-sm font-bold py-2 px-4"
                    >
                      Edit
                    </button>
                  </Link>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
