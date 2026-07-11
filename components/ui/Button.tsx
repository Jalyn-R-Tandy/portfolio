import { IconType } from "react-icons"
import Link from "next/link"

export function Button({ href, Icon, label, color, isDownload }: {href: string; Icon: IconType; label: string; color: string; isDownload: boolean; }) {

  {/** general class styles for button */}
  const className = "flex px-8 py-3 rounded-full gap-2 text-sm font-medium justify-center"

  {/** handles downloadable content (ex. PDF) */}
  if (isDownload) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`${className} ${color}`}>
        <Icon size={18} />
        {label}
      </a>
    )
  }

  return (
    <Link href={href} className={`${className} ${color}`}>
      <Icon size={18} />
      {label}
    </Link>
  )
}