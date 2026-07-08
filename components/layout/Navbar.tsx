"use client"

import Link from "next/link"
import { IconType } from "react-icons"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { IoPersonOutline } from "react-icons/io5"
import { GrProjects } from "react-icons/gr"
import { MdWorkOutline } from "react-icons/md"
import { usePathname } from "next/navigation"

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex justify-center p-2 md:p-4 border-b border-gray-500/20">
      <div className="flex w-full max-w-7xl items-center justify-between">
        {/* name branding */}
        <div className="w-24 md:w-32">
          <Link href="/">
            <h1 className="text-lg md:text-xl w-32 font-bold">Jalyn Tandy</h1>
          </Link>
        </div>

        {/* centered pill nav bar */}
        <div className="flex items-center rounded-full bg-gray-500/10 backdrop-blur-lg border border-deep-space-blue/20 p-1.5 md:gap-2">
          <NavLink href="/about" Icon={IoPersonOutline} label="About"/>
          <NavLink href="/experience" Icon={MdWorkOutline} label="Experience"/>
          <NavLink href="/projects" Icon={GrProjects} label="Projects"/>
        </div>

        {/* social media links */}
        <div className="justify-end gap-2 md:gap-4 flex w-24 md:w-32">
          <SocialLink href="https://www.linkedin.com/in/jalyn-tandy/" Icon={FaLinkedin} />
          <SocialLink href="https://github.com/Jalyn-R-Tandy" Icon={FaGithub} />
        </div>
      </div>
    </nav>
    
  )
}

// helper function - navigation link button
function NavLink({ href, Icon, label }: { href: string; Icon: IconType; label: string }) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link href={href} className={`text-sm font-medium py-1.5 px-3 md:px-4 rounded-full flex gap-2 text-deep-space-blue/80 ${isActive ? 'bg-white' : ''}`}>
      <Icon size={18} />
      <span className="hidden md:block">{label}</span>
    </Link>
  );
}

// helper function - social media button
function SocialLink({ href, Icon }: { href: string; Icon: IconType; }) {
  return (
    <Link href={href} target="blank" className="transition hover:text-steel-blue">
      <Icon size={24} />
    </Link>
  )
}