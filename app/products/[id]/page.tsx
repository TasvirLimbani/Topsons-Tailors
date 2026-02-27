// import { notFound } from "next/navigation"
// import { products, getProductBySlug, Product } from "@/lib/products"
// import { ProductDetail } from "@/components/products/product-detail"

// export function generateStaticParams() {
//   return products.map((product) => ({
//     id: product.product_id.toString(),
//   }))
// }

// export async function generateMetadata({
//   params,
// }: {
//   params: { id: string }
// }) {
//   const product = products.find(
//     (p) => p.product_id.toString() === params.id
//   )

//   if (!product) return { title: "Product Not Found" }

//   return {
//     title: `${product.product_name} | Topsons Tailors`,
//     description: product.description,
//   }
// }
// export default async function ProductDetailPage({
//   params,
// }: {
//   params: Promise<{ id: string }>
// }) {
//   const { id } = await params



//   // const product = products.find(
//   //   (p) => p.product_id.toString() === id
//   // )

//   // if (!product) {
//   //   notFound()
//   // }

//   return (
//     <main>
//       <ProductDetail id={id} />
//     </main>
//   )
// }

import { ProductDetail } from "@/components/products/product-detail"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  const res = await fetch(
    `http://topsons.mooo.com/api/product/productdetail.php?product_id=${encodeURIComponent(id)}`,
    { cache: "no-store" }
  )

  if (!res.ok) {
    return { title: "Product Not Found" }
  }

  const data = await res.json()
  const product = data.product

  if (!product) {
    return { title: "Product Not Found" }
  }

  return {
    title: `${product.product_name} | Topsons Tailors`,
    description: product.description || "Topsons Tailors Product",
    openGraph: {
      title: product.product_name,
      description: product.description,
      images: product.images?.[0] ? [product.images[0]] : [],
    },
  }
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  return (
    <main>
      <ProductDetail id={id} />
    </main>
  )
}