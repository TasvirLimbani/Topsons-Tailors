import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { user_id, first_name, last_name, email, phone } = body // ✅ include user_id

    if (!user_id) {
      return NextResponse.json({ success: false, message: "User ID required" })
    }

    // Call your PHP API with user_id
    const res = await fetch(
      "http://topsons.mooo.com/api/auth/updateprofile.php",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id, first_name, last_name, email, phone }), // ✅ send user_id
      }
    )

    const data = await res.json()

    if (data.status) {
      return NextResponse.json({ success: true, message: data.message })
    } else {
      return NextResponse.json({ success: false, message: data.message })
    }
  } catch (err) {
    console.error(err)
    return NextResponse.json({ success: false, message: "Server Error" })
  }
}