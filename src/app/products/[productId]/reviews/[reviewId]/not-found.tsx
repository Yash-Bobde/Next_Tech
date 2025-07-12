"use client";
import { usePathname } from "next/navigation";
export default function NotFound() {
  const pathname = usePathname();
  const productId = pathname.split('/')[2]; // Extract productId from the path
  const reviewId = pathname.split('/')[4]; // Extract reviewId from the path
  return (
    <div>
      <h1>The Review for your {reviewId} not found for product {productId} </h1>
      
    </div>
  );
}