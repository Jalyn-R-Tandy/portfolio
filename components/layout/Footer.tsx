export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex justify-center py-4">
      <p className="text-sm text-text-main/80">&copy; {currentYear} Jalyn Tandy. All rights reserved.</p>
    </footer>
  )
}