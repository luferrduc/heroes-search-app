import { Outlet } from "react-router"


export const MainLayout = () => {
  return (
    <main className="container py-5">
      <Outlet />
    </main>
  )
}