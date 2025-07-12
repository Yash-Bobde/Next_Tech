import { notFound } from "next/navigation";
export default async function ProductReview({
    params,
}: {
    params: Promise<{ productId: string; reviewId: string }>;
}) {
    const { productId, reviewId } = await params;
    if (parseInt(reviewId) > 1000) {
        notFound(); // Redirects to the 404 page if reviewId is greater than 1000
    }
    return <h1>PRODUCT REVIEW {productId} - {reviewId}</h1>;
}