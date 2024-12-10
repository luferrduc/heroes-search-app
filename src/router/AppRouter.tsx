import { Navigate, Route, Routes } from "react-router"
import { LoginPage } from "@/auth/pages/LoginPage"
import { DcPage, HeroPage, MarvelPage, SearchPage } from "@/heroes/pages"
import { MainPage } from "@/pages/MainPage"
import { MainLayout } from "@/layouts/MainLayout"
import { HeroesLayout } from "@/heroes/layouts/HeroesLayout"
// import { HeroRoutes } from "@/heroes/routes/HeroRoutes"

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<MainLayout />}>
          <Route index element={<LoginPage />}/>
        </Route>
      
        <Route path="/" element={<HeroesLayout />}>
          <Route index element={<MainPage />}/>          
          <Route path="marvel" element={<MarvelPage />}/>
          <Route path="dc" element={<DcPage />}/>

          <Route path="search" element={<SearchPage />}/>
          <Route path="hero/:id" element={<HeroPage />}/>

        </Route>
        <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
    </>
  )
}


// export const AppRouter = () => {
//   return (
//     <>
//       <Routes>
//         <Route path="login" element={<LoginPage />} />
//         <Route path="/*" element={<HeroRoutes />} />
          
       
//       </Routes>
//     </>
//   )
// }


