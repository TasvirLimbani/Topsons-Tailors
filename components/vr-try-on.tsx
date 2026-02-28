"use client"

import { useState } from "react"
import { Glasses, Upload, Loader2 } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { FancyShimmer } from "./FancyShimmer"


interface VirtualTryOnAPIResponse {
  results: {
    name: string
    width: number
    height: number
    entities: {
      kind: string
      name: string
      image: string
      format: string
      representation: string
    }[]
  }[]
}

export function VrTryOnButton({
  productImageUrl,
}: {
  productImageUrl: string
}) {
  const [open, setOpen] = useState(false)
  const [preview, setPreview] = useState<string | null>(null)
  const [file, setFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  // OPTIONAL: Simmer preview state (visual only)
  const [showSimmer, setShowSimmer] = useState(false)
  // ✅ reset on close
  const handleOpenChange = (value: boolean) => {
    setOpen(value)
    if (!value) {
      setPreview(null)
      setFile(null)
      setLoading(false)
    }
  }

  // ✅ CALL SERVER ROUTE
  const handleTryOn = async () => {
    if (!file) return alert("Please upload your photo");

    setLoading(true);
    setShowSimmer(true); // start shimmer

    // ensure shimmer renders before API call
    setTimeout(async () => {
      try {
        const formData = new FormData();
        formData.append("image", file);
        formData.append("url-apparel", productImageUrl);

        const res = await fetch("/api/virtualtryon", {
          method: "POST",
          body: formData,
        });

        if (!res.ok) throw new Error("API request failed");

        const data: VirtualTryOnAPIResponse = await res.json();
        const base64Image = data.results?.[0]?.entities?.[0]?.image;

        if (!base64Image) throw new Error("No image returned from AI");

        setPreview(`data:image/jpeg;base64,${base64Image}`);
      } catch (err) {
        console.error(err);
        alert("Virtual try-on failed");
      } finally {
        setLoading(false);
        setShowSimmer(false);
      }
    }, 50); // small delay ensures React renders shimmer
  };
  return (
    <>
      {/* 🔹 OPEN BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="flex items-center justify-center gap-2 rounded-sm border border-accent bg-accent/10 py-4 text-sm font-medium tracking-widest uppercase text-foreground transition-all hover:bg-accent/20"
      >
        <Glasses className="size-4" />
        Try On Yourself
      </button>

      {/* 🔹 DIALOG */}
      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent className="border-border bg-card text-card-foreground sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl">
              AI Virtual Try-On
            </DialogTitle>
            <DialogDescription>
              Upload your photo and see the magic ✨
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col items-center gap-6 py-8">
            {/* 🔹 IMAGE UPLOAD / RESULT */}
            {/* <label htmlFor="tryon-upload"
              className="rounded-md group relative flex flex-col items-center justify-center w-72 h-72 max-w-sm h-48 p-1 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-primary hover:bg-primary/10 transition-colors duration-300">

              {preview ? (
                <img
                  src={preview}
                  alt="Try-on preview"
                  className="h-full w-full rounded-md object-contain"
                />
              ) : showSimmer ? (
                <FancyShimmer className="w-full h-full absolute inset-0" />
              ) : (
                // <Upload className="size-10 text-primary" />\
                <label htmlFor="tryon-upload" className="flex flex-col items-center justify-center gap-4">
                  <Upload className="w-10 h-10 text-primary group-hover:text-primary/80 transition-colors duration-300" />

                  <p className="mt-4 text-center text-gray-600 group-hover:text-gray-800 font-medium">
                    Click or Drag & Drop to upload
                  </p>
                </label>
              )}
            </label> */}

            <label
              htmlFor="tryon-upload"
              className="rounded-md relative flex flex-col items-center justify-center w-72 h-72 max-w-sm p-1 border-2 border-dashed border-gray-300 cursor-pointer hover:border-primary hover:bg-primary/10 transition-colors duration-300"
            >
              {showSimmer ? (
                <FancyShimmer className="w-full h-full rounded-md" />
              ) : preview ? (
                <img
                  src={preview}
                  alt="Try-on preview"
                  className="h-full w-full rounded-md object-contain"
                />
              ) : (
                <div className="flex flex-col items-center justify-center gap-4">
                  <Upload className="w-10 h-10 text-primary group-hover:text-primary/80 transition-colors duration-300" />
                  <p className="mt-4 text-center text-gray-600 group-hover:text-gray-800 font-medium">
                    Click or Drag & Drop to upload
                  </p>
                </div>
              )}
            </label>

            <input
              id="tryon-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const f = e.target.files?.[0]
                if (f) {
                  setFile(f)
                  setPreview(URL.createObjectURL(f)) // local preview first
                }
              }}
            />

            {/* 🔹 ACTION BUTTON */}
            <button
              onClick={handleTryOn}
              disabled={loading}
              className="rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition hover:bg-primary/90 disabled:opacity-60"
            >
              {loading ? "Processing..." : "Try On Now"}
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}