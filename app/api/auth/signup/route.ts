import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    // ✅ Convert JSON → form-data
    const formData = new URLSearchParams()
    formData.append("first_name", body.first_name)
    formData.append("last_name", body.last_name)
    formData.append("email", body.email)
    formData.append("phone", body.phone)
    formData.append("password", body.password)

    const res = await fetch(
      "http://topsons.mooo.com/api/auth/signup.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      }
    )

    const data = await res.json()

    return NextResponse.json(data, { status: 200 })

  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    )
  }
}