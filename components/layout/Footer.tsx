export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex justify-center">
      <p className="text-sm text-gray-500">&copy; {currentYear} Jalyn Tandy. All rights reserved.</p>
    </footer>
  )
}