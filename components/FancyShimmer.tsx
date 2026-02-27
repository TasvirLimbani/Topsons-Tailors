// components/FancyShimmer.tsx
"use client";
import Image from "next/image";

interface FancyShimmerProps {
  className?: string; // optional additional Tailwind classes
}

export function FancyShimmer({ className = "" }: FancyShimmerProps) {
  return (
    <div className={`relative overflow-hidden rounded-md ${className}`}>
      {/* Rotating gradient circles */}
      <div className="absolute inset-0">
        <div className="absolute -top-16 -left-16 w-48 h-48 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-300 rounded-full animate-spin-slow opacity-40"></div>
        <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-gradient-to-tr from-blue-400 via-green-300 to-yellow-200 rounded-full animate-spin-slow-reverse opacity-30"></div>
      </div>

      {/* Shimmer overlay */}
      <div className="absolute inset-0 rounded-md bg-gradient-to-br from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>

      {/* Centered logo and text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="w-24 h-24">
          <Image
            src="/simmer.png"
            alt="Logo"
            width={100}
            height={100}
            className="object-contain opacity-50"
          />
        </div>
        <p className="mt-5 text-primary/40 font-medium mt-4">Generating Image...</p>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-shimmer {
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-slow-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 15s linear infinite;
        }
      `}</style>
    </div>
  );
}