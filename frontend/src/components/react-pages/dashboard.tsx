import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { useGetPosts, useGetPublicPosts } from "@/hooks/use-post";
import { useEffect, useState } from "react";
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
import { Plus } from "lucide-react";
import { useAtom } from "jotai";
import { directuseUserAtom } from "@/store/user";
import { Input } from "../ui/input";
import { useDebounce } from "@/hooks/use-debounce";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";
import { marked } from "marked";
import type { DirectusUser } from "@/type/user";
import { directusTokenAtom } from "@/store/token";
import { SkeletonCard } from "../ui/skeleton-card";

function DashboardPage({ user, token }: { user: DirectusUser; token: string }) {
  const [filter, setFilter] = useState<"published" | "draft">("published");
  const [, setUser] = useAtom(directuseUserAtom);
  const [, setToken] = useAtom(directusTokenAtom);
  const [title, setTitle] = useState("");
  const [createdBy, setCreatedBy] = useState(false);
  const [page, setPage] = useState(1);
  const debouncetitle = useDebounce(title, 500);
  const { posts, loading: draftLoading } = useGetPosts(
    filter,
    debouncetitle,
    createdBy,
    user.id,
    token,
    page
  );
  const { publicPosts, isLoading } = useGetPublicPosts(
    filter,
    debouncetitle,
    createdBy,
    user.id,
    page
  );

  useEffect(() => {
    setUser(user);
    setToken(token);
  }, []);

  useEffect(() => {
    setPage(1);
  }, [debouncetitle, createdBy]);

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
              <TabsTrigger value="draft">Draft</TabsTrigger>
              <TabsTrigger value="published">Published</TabsTrigger>
            </TabsList>
            <TabsContent value="draft">
              <div className="py-4 flex flex-col gap-5">
                <div className="text-xl font-semibold flex flex-col gap-4">
                  <div>Published Thoughts</div>
                  <div className="flex items-center justify-between gap-4 pr-50">
                    <Input
                      placeholder="Search article"
                      onChange={(e) => setTitle(e.target.value)}
                      className="w-100"
                    />
                    <div className="flex gap-2">
                      <Switch
                        checked={createdBy}
                        onCheckedChange={(checked) => setCreatedBy(checked)}
                        id="own"
                      />
                      <Label className="text-sm" htmlFor="own">
                        Own Thought
                      </Label>
                    </div>
                  </div>
                </div>
                {draftLoading && (
                  <div className="flex gap-4 flex-wrap">
                    {Array.from({ length: 8 }).map((_, index) => (
                      <SkeletonCard key={index} />
                    ))}
                  </div>
                )}
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
                      const contentBody = marked(
                        post?.body.split(" ").length > 10
                          ? `${post?.body
                              .split(" ")
                              .slice(0, 10)
                              .join(" ")} ...`
                          : post?.body
                      );
                      return (
                        <Card key={postIdx} className="w-70 h-80">
                          <CardHeader>
                            <CardTitle>{post.title}</CardTitle>
                            <CardDescription>
                              Author:{" "}
                              {post.author.first_name +
                                post.author.last_name ===
                              user.first_name + user.last_name
                                ? "Me"
                                : post.author.first_name +
                                  " " +
                                  post.author.last_name}
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="h-35 overflow-hidden">
                            <p
                              className="leading-relaxed tracking-normal hyphens-auto"
                              dangerouslySetInnerHTML={{
                                __html: contentBody ?? "",
                              }}
                            >
                              {/* {post.body.split(" ").length > 10
                                ? `${post.body
                                    .split(" ")
                                    .slice(0, 10)
                                    .join(" ")} ...`
                                : post.body} */}
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
                {posts.length > 0 && (
                  <div className="w-full flex justify-center gap-4 mt-4">
                    <Button
                      variant="outline"
                      onClick={() => setPage((p) => Math.max(p - 1, 1))}
                      disabled={page === 1}
                    >
                      Previous
                    </Button>
                    <span className="text-sm text-gray-500 self-center">
                      Page {page}
                    </span>
                    <Button
                      variant="outline"
                      onClick={() => {
                        if (publicPosts?.length === 8) setPage((p) => p + 1);
                      }}
                      disabled={publicPosts?.length < 8}
                    >
                      Next
                    </Button>
                  </div>
                )}
              </div>
            </TabsContent>
            <TabsContent value="published">
              <div className="py-4 flex flex-col gap-5">
                <div className="text-xl font-semibold flex flex-col gap-4">
                  <div>Published Thoughts</div>
                  <div className="flex items-center justify-between gap-4 pr-50">
                    <Input
                      placeholder="Search article"
                      onChange={(e) => setTitle(e.target.value)}
                      className="w-100"
                    />
                    <div className="flex gap-2">
                      <Switch
                        checked={createdBy}
                        onCheckedChange={(checked) => setCreatedBy(checked)}
                        id="own"
                      />
                      <Label className="text-sm" htmlFor="own">
                        Own Thought
                      </Label>
                    </div>
                  </div>
                </div>
                {isLoading && (
                  <div className="flex gap-4 flex-wrap">
                    {Array.from({ length: 8 }).map((_, index) => (
                      <SkeletonCard key={index} />
                    ))}
                  </div>
                )}
                {publicPosts?.length === 0 || publicPosts === undefined ? (
                  <div className="w-full h-130 flex justify-center items-center">
                    <div className="text-gray-400 text-xl font-semibold">
                      Belum ada published posts
                    </div>
                  </div>
                ) : (
                  <div className="flex gap-4 flex-wrap">
                    {publicPosts?.map((post, postIdx) => {
                      const contentBody = marked(
                        post?.body.split(" ").length > 10
                          ? `${post?.body
                              .split(" ")
                              .slice(0, 10)
                              .join(" ")} ...`
                          : post?.body
                      );
                      return (
                        <Card key={postIdx} className="w-70 h-80">
                          <CardHeader>
                            <CardTitle>{post.title}</CardTitle>
                            <CardDescription>
                              Author:{" "}
                              {post.author.first_name +
                                post.author.last_name ===
                              user.first_name + user.last_name
                                ? "Me"
                                : post.author.first_name +
                                  " " +
                                  post.author.last_name}
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="h-35 overflow-hidden">
                            <p
                              className="leading-relaxed tracking-normal hyphens-auto"
                              dangerouslySetInnerHTML={{
                                __html: contentBody ?? "",
                              }}
                            ></p>
                          </CardContent>
                          <CardFooter>
                            <Button
                              onClick={() =>
                                (window.location.href = `/post/${post.slug}`)
                              }
                              className="w-max bg-blue-600"
                            >
                              Read More
                            </Button>
                          </CardFooter>
                        </Card>
                      );
                    })}
                  </div>
                )}
                {publicPosts.length > 0 && (
                  <div className="w-full flex justify-center gap-4 mt-4">
                    <Button
                      variant="outline"
                      onClick={() => setPage((p) => Math.max(p - 1, 1))}
                      disabled={page === 1}
                    >
                      Previous
                    </Button>
                    <span className="text-sm text-gray-500 self-center">
                      Page {page}
                    </span>
                    <Button
                      variant="outline"
                      onClick={() => {
                        if (publicPosts?.length === 8) setPage((p) => p + 1);
                      }}
                      disabled={publicPosts?.length < 8}
                    >
                      Next
                    </Button>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
        <Button
          className="fixed bottom-15 bg-blue-600 right-15 rounded-full w-14 h-14 p-0 shadow-lg z-50"
          variant="default"
          onClick={() => (window.location.href = "/editor/new")}
        >
          <Plus className="w-6 h-6" />
        </Button>
      </SidebarInset>
    </SidebarProvider>
  );
}

export default DashboardPage;
