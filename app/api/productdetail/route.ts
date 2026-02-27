import { NextResponse } from "next/server"

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const product_id = searchParams.get("product_id")

  if (!product_id) {
    return NextResponse.json(
      { error: "Product ID is required" },
      { status: 400 }
    )
  }

  try {
    const res = await fetch(
      `http://topsons.mooo.com/api/product/productdetail.php?product_id=${product_id}`
    )

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch product" },
        { status: 500 }
      )
    }

    const data = await res.json()

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    )
  }
}