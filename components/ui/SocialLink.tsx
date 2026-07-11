import { IconType } from "react-icons"
import Link from "next/link"

// helper function - social media button
export function SocialLink({ href, Icon }: { href: string; Icon: IconType; }) {
  return (
    <Link href={href} target="blank" className="transition hover:text-steel-blue">
      <Icon size={24} />
    </Link>
  )
}