// app/api/wishlist/route.ts
import { NextRequest, NextResponse } from "next/server";

const BASE_URL = "http://topsons.mooo.com/api/wishlist";

export async function GET(req: NextRequest) {
  try {
    const user_id = req.nextUrl.searchParams.get("user_id");

    if (!user_id) {
      return NextResponse.json({ error: "Missing user_id" }, { status: 400 });
    }

    // Make sure fetch succeeds and handle errors
    const response = await fetch(`${BASE_URL}/getwishlist.php?user_id=${user_id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const text = await response.text();
      console.error("GET wishlist failed:", text);
      return NextResponse.json({ error: "Failed to fetch wishlist" }, { status: 500 });
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("GET wishlist error:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { user_id, product_id, action } = await req.json();

    if (!user_id || !product_id || !action) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    let url = "";
    if (action === "add") url = `${BASE_URL}/addwishlist.php`;
    else if (action === "remove") url = `${BASE_URL}/removewishlist.php`;
    else return NextResponse.json({ error: "Invalid action" }, { status: 400 });

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_id, product_id }),
    });

    if (!response.ok) {
      const text = await response.text();
      console.error("POST wishlist failed:", text);
      return NextResponse.json({ error: "Failed to update wishlist" }, { status: 500 });
    }

    const data = await response.json();
    return NextResponse.json({ results: data });
  } catch (error) {
    console.error("POST wishlist error:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}