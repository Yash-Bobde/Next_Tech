export default function ProductDetailsLayout({
    children,
    }: {
    children: React.ReactNode
    }) {
    return (
        <div>
        <h1>Featured Products</h1>
        {children}
        </div>
    )
}