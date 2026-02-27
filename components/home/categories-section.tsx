// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useState } from "react";

// interface Category {
//   id: string;
//   name: string;
//   image: string;
// }

// export function CategoriesSection() {
//   const [categories, setCategories] = useState<Category[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await fetch("/api/category");
//       const result = await res.json();

//       console.log("API:", result);

//       const raw = Array.isArray(result)
//         ? result
//         : result.data || [];

//       const formatted = raw.map((item: any) => ({
//         id: item.id,
//         name: item.category_name,
//         image: `http://topsons.mooo.com/${item.category_image}`,
//       }));

//       setCategories(formatted);
//     };

//     fetchData();
//   }, []);

//   return (
//     <section className="mx-auto max-w-7xl px-6 py-24">
//       <div className="text-center">
//         <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground">
//           Our Collection
//         </p>
//         <h2 className="mt-3 font-serif text-4xl tracking-tight text-foreground md:text-5xl text-balance">
//           Explore by Category
//         </h2>
//       </div>

//       <div className="mt-16 grid gap-8 md:grid-cols-3">
//         {categories.map((cat) => (
//           <Link
//             key={cat.id}
//             href={`/products?category=${cat.name}`}
//             className="group relative aspect-[3/4] overflow-hidden rounded-sm"
//           >
//             <Image
//               src={cat.image}
//               alt={`${cat.name} collection`}
//               fill
//               className="object-cover transition-transform duration-700 group-hover:scale-105"
//             />
//             <div className="absolute inset-0 bg-foreground/30 transition-colors group-hover:bg-foreground/40" />
//             <div className="absolute inset-0 flex flex-col items-center justify-end pb-10">
//               <h3 className="font-serif text-3xl text-card">{cat.name}</h3>
//               <span className="mt-3 inline-flex items-center gap-1 border-b border-card/50 pb-0.5 text-xs tracking-widest uppercase text-card/80 transition-colors group-hover:border-card group-hover:text-card">
//                 Explore
//               </span>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </section>
//   )
// }





"use client";

import { CategoryApiResponse, CategoryUI } from "@/lib/category";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";


export function CategoriesSection() {
  const [categories, setCategories] = useState<CategoryUI[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    const fetchCategories = async () => {
      try {
        setLoading(true);

        const res = await fetch("/api/category", {
          cache: "no-store",
          signal: controller.signal,
        });

        const data: CategoryApiResponse = await res.json();

        if (data.status) {
          const formatted: CategoryUI[] = data.categories.map((cat) => ({
            id: cat.category_id,
            name: cat.category_name,
            image: cat.image,
          }));

          setCategories(formatted);
        } else {
          setCategories([]);
        }
      } catch (err: any) {
        if (err.name !== "AbortError") {
          console.error("Category fetch error:", err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
    return () => controller!.abort();
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="text-center">
        <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground">
          Our Collection
        </p>
        <h2 className="mt-3 font-serif text-4xl tracking-tight md:text-5xl">
          Explore by Category
        </h2>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {loading
          ? Array.from({ length: 3 }).map((_, i) => (
            <CategorySkeleton key={i} />
          ))
          : categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/products?category=${cat.name}`}
              className="group relative aspect-[3/4] overflow-hidden rounded-sm"
            >
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-10">
                <h3 className="font-serif text-3xl text-white">
                  {cat.name}
                </h3>
                <span className="mt-3 border-b border-white/50 pb-0.5 text-xs uppercase text-white/80">
                  Explore
                </span>
              </div>
            </Link>
          ))}
      </div>
    </section>
  );
}

function CategorySkeleton() {
  return (
    <div className="relative aspect-[3/4] rounded-sm overflow-hidden bg-muted animate-pulse">
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-40 h-6 rounded bg-muted-foreground/20" />
    </div>
  );
}