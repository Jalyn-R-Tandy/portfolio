import Image from "next/image"

export function TechCard({ logo, title }: { logo: string; title: string; }) {
  return (
    <div className="bg-gray-50 rounded-lg p-10 flex flex-col items-center justify-center border border-text-main/20">
      <Image 
        src={logo}
        width={36} 
        height={36}
        alt="python"
        className="mb-3"
      />
      <p className="font-medium">{title}</p>
    </div>
  )
}