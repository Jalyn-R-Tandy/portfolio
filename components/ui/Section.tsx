export function Section({ children }: { children: React.ReactNode }) {
  return (
    <section className=" w-full flex justify-center items-center flex-col ">
      {children}
    </section>
  )
}