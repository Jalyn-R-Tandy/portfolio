"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { IconType } from "react-icons"

// helper function - navigation link button
export function NavLink({ href, Icon, label, onClick }: { href: string; Icon: IconType; label: string; onClick: () => void }) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link href={href} className={`flex rounded-full py-1.5 px-3 md:px-4 items-center text-sm font-medium gap-2 text-deep-space-blue/80 ${isActive ? 'bg-white' : ''}`} onClick={onClick}>
      <Icon size={18} />
      <span>{label}</span>
    </Link>
  );
}