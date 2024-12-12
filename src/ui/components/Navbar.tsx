import { Link, NavLink, useNavigate } from "react-router"
import { useAuthContext } from "@/auth/hooks/useAuthContext"

export const Navbar = () => {

	const { authState: { user } } = useAuthContext()
	const navigate = useNavigate()
	

	const handleLogout = () => {
		navigate('/login', {
			replace: true // Reemplazando el historial anterior
		})
	}
	return (
		<nav
			className="navbar navbar-expand-lg bg-body-tertiary px-2 py-3"
			data-bs-theme="dark"
		>
			<div className="container-fluid">
				<Link className="navbar-brand" to="#">
					Asociations
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse justify-content-center text-center"
					id="navbarNav"
				>
					<ul className="navbar-nav me-auto">
						<li className="nav-item">
							<NavLink className="nav-link" to="/">
								Home
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/marvel">
								Marvel
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/dc">
								DC
							</NavLink>
						</li>
            <li className="nav-item">
							<NavLink className="nav-link" to="/search">
								Search
							</NavLink>
						</li>
					</ul>
          <ul className="navbar-nav ml-auto">
            <span className="nav-item nav-link text-primary text-nowrap">{ user?.name }</span>
            <button className="nav-item nav-link btn btn-outline-success w-100"
							onClick={ handleLogout }
							>
              Logout
            </button>
          </ul>
				</div>
			</div>
		</nav>
	)
}
