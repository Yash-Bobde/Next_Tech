"use client"
import { useRouter } from "next/navigation"
import Link from "next/link";
export default function OrderProduct() {
    const router = useRouter()
    const handleClick = () => {
        console.log("Order button clicked");
        router.push("/auth/order-product/checkout");
    }
    return (
        <div>
            <h1>Order Product</h1>
            <button onClick={handleClick}>Order Now</button>
            <br />
            <Link href="/auth/order-product/checkout">Go to Checkout</Link>
            <br />
            <Link href="/auth/order-product/cancel">Cancel Order</Link>
            <br />
            <p>This is the order product page.</p>
        </div>
    );
}