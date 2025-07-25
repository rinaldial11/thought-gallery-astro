// import { useState } from "react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import Editor from "@uiw/react-md-editor";
import { Input } from "@/components/ui/input";
import { useSubmitPosts } from "@/hooks/use-post";
import { useAtom } from "jotai";
import { directuseUserAtom, userAtom } from "@/store/user";
import { showToast } from "@/components/toaster";
import { ArrowLeft } from "lucide-react";
import { generateSlug, getSeoDesc } from "@/lib/seo-generator";
import type { Socket } from "socket.io-client";
import { socket } from "@/lib/socket-io-client";
import type { IPost } from "@/type/post";

function EditorPage({ id, draftedPost }: { id: string; draftedPost: IPost }) {
  // const { postById: draftedPost } = useGetPostById(id ?? "");
  const [value, setValue] = useState<string>("# Enter your thought here!");
  const socketRef = useRef<Socket | null>(null);
  const [title, setTitle] = useState<string>("");
  const { submitPost } = useSubmitPosts();
  const [user] = useAtom(directuseUserAtom);
  const [localDraft, setLocalDraft] = useState<IPost>(draftedPost);

  const handleDraftSubmit = async () => {
    try {
      if (title.trim().length < 3) {
        showToast(
          "Submit Gagal!",
          "Judul harus lebih dari 3 karakter",
          "error"
        );
        return;
      }
      if (value.trim().length < 10) {
        showToast(
          "Submit Gagal!",
          "Kontent harus lebih dari 10 karakter",
          "error"
        );
        return;
      }

      const slug = generateSlug(title);

      if (!slug) {
        showToast(
          "Submit Gagal!",
          "Slug tidak valid. Coba ubah judul.",
          "error"
        );
        return;
      }

      await submitPost(
        {
          body: value,
          author: user.id,
          seo_desc: getSeoDesc(value),
          seo_title: title,
          slug: generateSlug(title),
          status: "draft",
          title,
        },
        id ?? ""
      );

      setLocalDraft({
        ...(localDraft ?? {}),
        body: value,
        title: title,
        seo_desc: getSeoDesc(value),
        seo_title: title,
        slug: generateSlug(title),
        status: "draft",
        author: {
          email: user.email,
          first_name: user.first_name,
          last_name: user.last_name,
        },
      });

      showToast("Draft Saved", "Your draft has been saved!", "success");
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const handlePublishSubmit = async () => {
    try {
      if (title.trim().length < 3) {
        showToast(
          "Submit Gagal!",
          "Judul harus lebih dari 3 karakter",
          "error"
        );
        return;
      }
      if (value.trim().length < 10) {
        showToast(
          "Submit Gagal!",
          "Kontent harus lebih dari 10 karakter",
          "error"
        );
        return;
      }

      const slug = generateSlug(title);

      if (!slug) {
        showToast(
          "Submit Gagal!",
          "Slug tidak valid. Coba ubah judul.",
          "error"
        );
        return;
      }

      await submitPost(
        {
          body: value,
          seo_desc: getSeoDesc(value),
          seo_title: title,
          slug: generateSlug(title),
          status: "published",
          title,
        },
        id ?? ""
      );

      showToast(
        "Post Published",
        "Congrats! Your draft has been publsihed.",
        "success"
      );
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 400);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  useEffect(() => {
    socketRef.current = socket;

    socket.on("connect", () => {
      console.log("✅ Connected to socket:", socket.id);
      socket.emit("join-document", id);
    });

    socket.on("receive-edit", (newContent: string) => {
      console.log("📥 Received new content:", newContent);
      setValue(newContent);
    });

    return () => {
      socket.disconnect();
    };
  }, [id]);

  useEffect(() => {
    if (id !== "new") {
      setValue(draftedPost?.body ?? "");
      setTitle(draftedPost?.title ?? "");
    }
  }, [draftedPost?.body, id]); //eslint-disable-line

  useEffect(() => {
    setLocalDraft(draftedPost ?? null);
  }, [draftedPost]);

  return (
    <>
      <div className="flex flex-col gap-4 h-screen">
        <div className="flex justify-between items-center mx-8 mt-4">
          <div className="text-xl font-semibold">Editor</div>
        </div>
        {id === "new" ? (
          <>
            <div className="flex flex-col gap-8" style={{ padding: "2rem" }}>
              <Input
                onChange={(e) => setTitle(e.target.value)}
                defaultValue={title}
                className="max-w-56 font-bold"
                placeholder="Your post title"
              />
              <Editor
                value={value}
                onChange={(val) => {
                  const updated = val ?? "";
                  setValue(updated);
                }}
                preview="edit"
              />
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col gap-8" style={{ padding: "2rem" }}>
              <Input
                onChange={(e) => setTitle(e.target.value)}
                defaultValue={draftedPost?.title}
                className="max-w-56 font-bold"
                placeholder="Your post title"
              />
              <Editor
                value={value}
                onChange={(val) => {
                  console.log("🧪 onChange triggered", val);
                  const updated = val ?? "";
                  setValue(updated);

                  console.log("✉️ Emit edit-document", {
                    postId: id,
                    content: updated,
                  });

                  socketRef.current?.emit("edit-document", {
                    postId: id,
                    content: updated,
                  });
                }}
              />
            </div>
          </>
        )}
        <div className="mx-8 flex gap-3 justify-between">
          <Button
            onClick={() => window.history.back()}
            className="w-10 h-10 rounded-full flex justify-center items-center bg-blue-600"
          >
            <ArrowLeft />
          </Button>
          <div className="flex gap-3">
            <Button
              disabled={
                title.trim() === "" ||
                value.trim() === "" ||
                (title === (localDraft?.title ?? "") &&
                  value === (localDraft?.body ?? ""))
              }
              onClick={handleDraftSubmit}
              variant={"outline"}
            >
              Save as Draft
            </Button>
            <Button
              disabled={value === "" || title === ""}
              onClick={handlePublishSubmit}
              className="bg-blue-600"
            >
              Save and Publish
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditorPage;
