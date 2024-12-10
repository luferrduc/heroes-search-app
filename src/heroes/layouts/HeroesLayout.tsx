import { Navbar } from "@/ui/components"
import { Outlet } from "react-router"

export const HeroesLayout = () => {
  return (
      <>
        <Navbar />
        <main className="container py-5">
          <Outlet />
        </main>
      </>
  )
}