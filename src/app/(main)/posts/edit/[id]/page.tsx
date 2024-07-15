"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import BackButton from "@/components/BackButton";
import posts from "@/data/posts";
import { useToast } from "@/components/ui/use-toast";

interface PageProps {
  params: {
    id: string;
  };
}

export default function PostEditPage({ params }: PageProps) {
  const post = posts.find((post) => post.id === params.id);
  const { toast } = useToast();

  const formSchema = z.object({
    title: z.string().min(4, {
      message: "Title is required.",
    }),
    body: z.string().min(5, {
      message: "Body is required.",
    }),
    author: z.string().min(4, {
      message: "Author is required.",
    }),
    date: z.string().min(4, {
      message: "Date is required.",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: post?.title || "",
      body: post?.body || "",
      author: post?.author || "",
      date: post?.date || "",
    },
  });
  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    toast({
      title: "Post has been updated.",
      description: `Updated by ${post?.author} on ${post?.date}.`,
    });
  };

  return (
    <>
      <BackButton text="Go Back." link="/posts" />
      <h3 className="text-2xl font-bold mb-3">Edit Post</h3>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="space-y-8 px-4"
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase font-bold text-xs text-neutral-500 dark:text-white">
                  Title
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter title"
                    className="bg-neutral-100 dark:bg-neutral-600 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="body"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase font-bold text-xs text-neutral-500 dark:text-white">
                  Body
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter body"
                    className="bg-neutral-100 dark:bg-neutral-600 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="author"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase font-bold text-xs text-neutral-500 dark:text-white">
                  Author
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter author"
                    className="bg-neutral-100 dark:bg-neutral-600 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase font-bold text-xs text-neutral-500 dark:text-white">
                  Date
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter date"
                    className="bg-neutral-100 dark:bg-neutral-600 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            className="w-full dark:bg-slate-700 dark:text-white rounded-lg my-6"
            type="submit"
            variant={"default"}
          >
            Update
          </Button>
        </form>
      </Form>
    </>
  );
}
