"use client";

import { Sparkles } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface RequestButtonProps {
  text: React.ReactNode;
  href: string;
  className?: string;
}

export function RequestButton({ text, href, className }: RequestButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white backdrop-blur transition-all",
        "border border-neutral-800/50 hover:border-neutral-700/50 hover:shadow-[0_0_30px_-5px_rgba(0,0,0,0.3)]",
        className
      )}
    >
      <span>{text}</span>
      <span className="transition-transform group-hover:translate-x-0.5">
        →
      </span>
    </Link>
  );
}
