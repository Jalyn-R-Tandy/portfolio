import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="sticky top-4 z-50 flex items-center justify-between px-6 py-2 border-b border-gray-200">
      {/* name branding */}
      <div>
        <h1 className="text-xl w-32 font-bold">Jalyn Tandy</h1>
      </div>

      {/* centered pill nav bar */}
      <div className="flex items-center gap-6 rounded-full border border-gray-200">
        <NavLink href="#about" label="About"/>
        <NavLink href="#experience" label="Experience"/>
        <NavLink href="#projects" label="Projects"/>
      </div>

      {/* social media links */}
      <div className="justify-end gap-4 flex w-32">
        <h2>LinkedIn</h2>
        <h2>Github</h2>
      </div>
    </nav>
    
  )
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="text-sm font-medium px-4 py-2 rounded-full">
      {label}
    </Link>
  );
}