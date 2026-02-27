import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("http://topsons.mooo.com/api/category/getcategory.php", {
      cache: "no-store",
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch external API" },
        { status: 500 }
      );
    }

    const data = await res.json();

    console.log("External API Data:", data);

    return NextResponse.json(data);

  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}