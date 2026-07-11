"use client"

import Link from "next/link"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { IoPersonOutline } from "react-icons/io5"
import { GrProjects } from "react-icons/gr"
import { MdWorkOutline } from "react-icons/md"
import { IoMenu } from "react-icons/io5";
import { NavLink } from "@/components/ui/NavLink"
import { useState } from "react"
import { SocialLink } from "@/components/ui/SocialLink"

export function Navbar() {
  const[isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="top-0 z-50 flex flex-col p-4 mb-4 border-b border-gray-500/20">
      {/** TOP ROW */}
      <div className="flex w-full max-w-7xl items-center justify-between mx-auto">
        {/* name branding */}
        <div className="w-24 md:w-32">
          <Link href="/">
            <h1 className="text-lg md:text-xl w-32 font-bold">Jalyn Tandy</h1>
          </Link>
        </div>
        {/* centered pill nav bar */}
        <div className="hidden md:flex">
          <div className="flex items-center rounded-full bg-gray-500/10 backdrop-blur-lg border border-deep-space-blue/20 p-1.5 md:gap-2">
            <NavLink href="/about" Icon={IoPersonOutline} label="About" onClick={() => setIsOpen(false)}/>
            <NavLink href="/experience" Icon={MdWorkOutline} label="Experience" onClick={() => setIsOpen(false)}/>
            <NavLink href="/projects" Icon={GrProjects} label="Projects" onClick={() => setIsOpen(false)}/>
          </div>
        </div>
        {/* social media links */}
        <div className="hidden md:flex">
          <div className="justify-end gap-2 md:gap-4 flex w-24 md:w-32">
            <SocialLink href="https://www.linkedin.com/in/jalyn-tandy/" Icon={FaLinkedin} />
            <SocialLink href="https://github.com/Jalyn-R-Tandy" Icon={FaGithub} />
          </div>
        </div>
        {/** mobile navigation bar */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
          >
            <IoMenu></IoMenu>
          </button>
        </div>
      </div>

      { /** BOTTOM ROW */}
      {isOpen && (
        <>
          {/** navigation links */}
          <div className="md:hidden flex flex-col pt-4 pb-2 mt-4 space-y-4 border-t border-gray-100">
            <NavLink href="/about" label="About" Icon={IoPersonOutline} onClick={() => setIsOpen(false)} />
            <NavLink href="/experience" label="Experience" Icon={MdWorkOutline} onClick={() => setIsOpen(false)} />
            <NavLink href="/projects" label="Projects" Icon={GrProjects} onClick={() => setIsOpen(false)} />
          </div>
          {/** social links */}
          <div className="md:hidden flex p-2 space-x-4 w-24 md:w-32">
            <SocialLink href="https://www.linkedin.com/in/jalyn-tandy/" Icon={FaLinkedin} />
            <SocialLink href="https://github.com/Jalyn-R-Tandy" Icon={FaGithub} />
          </div>
        </>
      )}
    </nav>
    
  )
}