import { Navbar } from "@/ui/components"
import { Route, Routes } from "react-router"
import { DcPage, HeroPage, MarvelPage, SearchPage } from "../pages"
import { MainPage } from "@/pages/MainPage"

export const HeroRoutes = () => {
	return (
		<>
			<Navbar />
			<div className="container py-5">
				<Routes>
          <Route path="/" element={<MainPage />}/>
					<Route path="marvel" element={<MarvelPage />} />
					<Route path="dc" element={<DcPage />} />

					<Route path="search" element={<SearchPage />} />
					<Route path="hero" element={<HeroPage />} />
				</Routes>
			</div>
		</>
	)
}
