import Link from "next/link";

const navLinks = [
    { name: "Register", href: "/auth/register" },
    { name: "Login", href: "/auth/login" },
    { name: "Forgot Password", href: "/auth/forgot-password" },
];
export default function AuthLayout({ children, }: { children: React.ReactNode }) {
    return (
        <div>
            <nav>
                {navLinks.map((link) => (
                    <Link key={link.name} href={link.href}>
                        {link.name}
                    </Link>
                ))}
            </nav>
            <main>{children}</main>
        </div>
    );
}