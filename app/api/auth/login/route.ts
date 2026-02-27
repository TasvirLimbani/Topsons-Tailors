import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const incomingForm = await req.formData()

    const body = new FormData()
    body.append("email", String(incomingForm.get("email") || ""))
    body.append("password", String(incomingForm.get("password") || ""))

    const res = await fetch(
      "http://topsons.mooo.com/api/auth/login.php",
      {
        method: "POST",
        body, // ✅ FORM-DATA
      }
    )

    const data = await res.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("LOGIN API ERROR:", error)
    return NextResponse.json(
      { status: false, message: "Server error" },
      { status: 500 }
    )
  }
}