import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category_id");

    let apiUrl = "http://topsons.mooo.com/api/product/getproducts.php?page=1&limit=5";

    if (category && category !== "all") {
      apiUrl += `?category_id=${category}`;
    }

    const response = await fetch(apiUrl, {
      method: "GET",
      cache: "no-store",
    });

    if (!response.ok) {
      return NextResponse.json(
        { status: false, message: "External API failed" },
        { status: 500 }
      );
    }

    const data = await response.json();

    return NextResponse.json(data);

  } catch (error) {
    console.error("FILTER API ERROR:", error);

    return NextResponse.json(
      { status: false, message: "Server Error" },
      { status: 500 }
    );
  }
}