import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
 

    const formData = await req.formData()

    const userImage = formData.get("image") as File | null
    const productImageUrl = formData.get("url-apparel") as string | null

    if (!userImage || !productImageUrl) {
      return NextResponse.json(
        { error: "Missing user image or product image" },
        { status: 400 }
      )
    }

    const forwardForm = new FormData()
    forwardForm.append("image", userImage)
    forwardForm.append("url-apparel", productImageUrl)

    const res = await fetch('https://api4ai.cloud/virtual-try-on/v1/results', {
      method: "POST",
      headers: {
        "X-API-KEY": "a4a-RElN10hYe4I5a7fRKaEexMduF9xnaqDT", // ✅ REQUIRED
      },
      body: forwardForm,
    })

    if (!res.ok) {
      const errText = await res.text()
      console.error("Try-on API error:", errText)
      return NextResponse.json(
        { error: "Virtual try-on failed" },
        { status: 500 }
      )
    }

    const data = await res.json()
    return NextResponse.json(data)

  } catch (error) {
    console.error("Server error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}