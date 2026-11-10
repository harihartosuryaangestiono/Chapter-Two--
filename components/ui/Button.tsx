import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
};

export function Button({ href, children, className = "", onClick, target, rel }: ButtonProps) {
  const sharedClassName = `inline-flex items-center justify-center rounded-full border border-[rgba(128,87,106,0.28)] bg-white/70 px-6 py-3 text-sm font-semibold tracking-[0.14em] text-[#80576A] shadow-[0_14px_30px_rgba(216,153,165,0.18)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_32px_rgba(216,153,165,0.22)] ${className}`;

  if (href) {
    return (
      <Link href={href} className={sharedClassName} target={target} rel={rel}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={sharedClassName} onClick={onClick}>
      {children}
    </button>
  );
}
