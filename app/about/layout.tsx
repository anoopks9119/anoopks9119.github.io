export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="h-60 w-full top-0 left-0">
        <img src="/desktop.jpg" alt="Loading" className="w-full h-full object-cover" />
      </div>
      <section className="mt-10">
        {children}
      </section>
    </>
  )
}