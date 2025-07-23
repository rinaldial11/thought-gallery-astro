import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Calendar, User } from "lucide-react";
import type { IPost } from "@/type/post";

function ViewerPage({ post }: { post: IPost }) {
  // Format tanggal
  const formatDate = (dateString?: string) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded w-4/6"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <article className="space-y-8">
          {/* Header Section */}
          <header className="space-y-6">
            {/* Status Badge */}
            <div className="flex items-center gap-2">
              <Badge
                variant={post.status === "published" ? "default" : "secondary"}
                className="text-xs"
              >
                {post.status === "published" ? "Dipublikasikan" : "Draft"}
              </Badge>
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-foreground">
                {post.title}
              </h1>
              {post.seo_desc && (
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {post.seo_desc}
                </p>
              )}
            </div>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span className="font-medium text-foreground">
                  {post.author.first_name + " " + post.author.last_name}
                </span>
              </div>

              <Separator orientation="vertical" className="h-4" />

              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(post.created_at)}</span>
              </div>
            </div>

            {/* Updated date if different from created */}
            {post.updated_at && post.updated_at !== post.created_at && (
              <div className="text-xs text-muted-foreground border-l-2 border-muted pl-4">
                Terakhir diperbarui: {formatDate(post.updated_at)}
              </div>
            )}
          </header>

          {/* Separator */}
          <Separator className="my-8" />

          {/* Content Body */}
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <div
              className="text-foreground leading-relaxed"
              style={{
                fontSize: "1.1rem",
                lineHeight: "1.8",
              }}
            >
              {/* Render body sebagai HTML jika diperlukan, atau gunakan markdown parser */}
              <div dangerouslySetInnerHTML={{ __html: post.body }} />
              {/* Alternatif jika body adalah plain text: */}
              {/* <div className="whitespace-pre-wrap">{post.body}</div> */}
            </div>
          </div>

          {/* Footer/Tags section bisa ditambahkan di sini jika ada */}
          <footer className="pt-8 border-t">
            <div className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">
                Artikel oleh{" "}
                <span className="font-semibold text-foreground">
                  {post.author.first_name + " " + post.author.last_name}
                </span>
              </div>
              {post.version && (
                <div className="text-xs text-muted-foreground">
                  Versi {post.version}
                </div>
              )}
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
}

export default ViewerPage;
