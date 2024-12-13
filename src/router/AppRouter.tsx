import { Route, Routes } from "react-router"
import { LoginPage } from "@/auth/pages/LoginPage"
import { DcPage, HeroPage, MarvelPage, SearchPage } from "@/heroes/pages"
import { MainPage } from "@/pages/MainPage"
import { MainLayout } from "@/layouts/MainLayout"
import { HeroesLayout } from "@/heroes/layouts/HeroesLayout"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"
import { NotFoundPage } from "@/pages/404"
// import { HeroRoutes } from "@/heroes/routes/HeroRoutes"

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/login"  element={<PublicRoute>
          <MainLayout />
        </PublicRoute>}>
          <Route index element={<LoginPage />}/>
        </Route>
      
        <Route path="/" element={<PrivateRoute>
          <HeroesLayout />
        </PrivateRoute>}>
          <Route index element={<MainPage />}/>          
          <Route path="marvel" element={<MarvelPage />}/>
          <Route path="dc" element={<DcPage />}/>

          <Route path="search" element={<SearchPage />}/>
          <Route path="hero/:id" element={<HeroPage />}/>

        </Route>
        <Route path="*" element={<NotFoundPage />}/>
      </Routes>
    </>
  )
}


// Revisar la variante de:

// export const router = createBrowserRouter([
//   {
//       path: "/",
//       element: <HeroesApp />,
//       errorElement: <ErrorPage />,
//       children: [
//           {
//               path: '/',
//               element:
//                   <PrivateRoute>
//                       <HomePage />
//                   </PrivateRoute>
//           },
//           {
//               path: '/search-hero',
//               element:
//                   <PrivateRoute>
//                       <SearchPage />
//                   </PrivateRoute>
//           },
//           {
//               path: "marvel",
//               element:
//                   <PrivateRoute>

//                       <MarvelPage />
//                   </PrivateRoute>
//           },
//           {
//               path: "dc",
//               element:
//                   <PrivateRoute>

//                       <DcPage />
//                   </PrivateRoute>
//           },
//           {
//               path: "hero/:id",
//               element:
//                   <PrivateRoute>
//                       <HeroPage />
//                   </PrivateRoute>
//           },
//           {
//               path: 'login',
//               element:
//                   <PublicRoute>
//                       <LoginPage />
//                   </PublicRoute>
//           }
//       ]
//   },
// ]);

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//      <RouterProvider router={router} />
//   </StrictMode>,
// )

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


