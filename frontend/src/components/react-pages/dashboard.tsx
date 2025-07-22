import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { useGetPosts, useGetPublicPosts } from "@/hooks/use-post";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { bodyParser } from "@/lib/body-parser";
// import { useAuthorName } from "../hooks/use-author-name";
import { Plus } from "lucide-react";
import { useAtom } from "jotai";
import { userAtom } from "@/store/user";

function DashboardPage() {
  const [filter, setFilter] = useState<"published" | "draft">("published");
  const [user] = useAtom(userAtom);
  const { posts } = useGetPosts(filter);
  const { publicPosts } = useGetPublicPosts(filter);
  //   const { getAuthorName } = useAuthorName();

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
        </header>
        <div className="w-full p-4 flex flex-col">
          <Tabs
            defaultValue="published"
            onValueChange={(value) => setFilter(value as "draft" | "published")}
          >
            <TabsList>
              {user.role.name === "editor" && (
                <TabsTrigger value="draft">Draft</TabsTrigger>
              )}
              <TabsTrigger value="published">Published</TabsTrigger>
            </TabsList>
            <TabsContent value="draft">
              <div className="py-4 flex flex-col gap-5">
                <div className="text-xl font-semibold">Draft Thoughts</div>
                {posts?.length === 0 || posts === undefined ? (
                  <div className="w-full h-130 flex justify-center items-center">
                    <div className="text-gray-400 text-xl font-semibold">
                      Belum ada draft posts
                    </div>
                  </div>
                ) : (
                  <div className="flex gap-4 flex-wrap">
                    {" "}
                    {posts?.map((post, postIdx) => {
                      return (
                        <Card key={postIdx} className="w-70 h-80">
                          <CardHeader>
                            <CardTitle>{post.title}</CardTitle>
                            <CardDescription>
                              Author: {post.author.first_name}
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="h-35 overflow-hidden">
                            <p className="text-justify leading-relaxed tracking-normal hyphens-auto">
                              {bodyParser(post.body)}
                            </p>
                          </CardContent>
                          <CardFooter>
                            <Button
                              onClick={() =>
                                (window.location.href = `/editor/${post.id}`)
                              }
                              variant={"outline"}
                              className="w-max"
                            >
                              Edit Thought
                            </Button>
                          </CardFooter>
                        </Card>
                      );
                    })}
                  </div>
                )}
              </div>
            </TabsContent>
            <TabsContent value="published">
              <div className="py-4 flex flex-col gap-5">
                <div className="text-xl font-semibold">Published Thoughts</div>
                {publicPosts?.length === 0 || publicPosts === undefined ? (
                  <div className="w-full h-130 flex justify-center items-center">
                    <div className="text-gray-400 text-xl font-semibold">
                      Belum ada published posts
                    </div>
                  </div>
                ) : (
                  <div className="flex gap-4 flex-wrap">
                    {publicPosts?.map((post, postIdx) => {
                      return (
                        <Card key={postIdx} className="w-70 h-80">
                          <CardHeader>
                            <CardTitle>{post.title}</CardTitle>
                            <CardDescription>
                              Author: {post.author.first_name}
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="h-35 overflow-hidden">
                            <p className="text-justify leading-relaxed tracking-normal hyphens-auto">
                              {bodyParser(post.body)}
                            </p>
                          </CardContent>
                          <CardFooter>
                            <Button
                              onClick={() =>
                                (window.location.href = `/post/${post.slug}`)
                              }
                              className="w-max"
                            >
                              Read More
                            </Button>
                          </CardFooter>
                        </Card>
                      );
                    })}
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
        {user.role.name === "editor" && (
          <Button
            className="fixed bottom-15 right-15 rounded-full w-14 h-14 p-0 shadow-lg z-50"
            variant="default"
            onClick={() => (window.location.href = "/editor/new")}
          >
            <Plus className="w-6 h-6" />
          </Button>
        )}
      </SidebarInset>
    </SidebarProvider>
  );
}

export default DashboardPage;
