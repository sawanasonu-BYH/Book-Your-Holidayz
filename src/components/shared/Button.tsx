import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  href = "#",
  variant = "primary",
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-[#0F4C81] text-white hover:bg-[#0b3a63]"
      : "border border-[#0F4C81] text-[#0F4C81] hover:bg-[#0F4C81] hover:text-white";

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold transition ${styles}`}
    >
      {children}
    </Link>
  );
}
