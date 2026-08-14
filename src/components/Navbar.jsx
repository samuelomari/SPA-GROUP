import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
	const [open, setOpen] = useState(false)

	return (
		<header className="site-header">
			<div className="container nav-inner">
				<div className="brand">Admin Portal</div>
				<nav className={`nav ${open ? 'open' : ''}`} aria-label="Main navigation">
					<NavLink to="/" end className="nav-link">
						Home
					</NavLink>
					<NavLink to="/products" className="nav-link">
						Products
					</NavLink>
					<NavLink to="/add-product" className="nav-link">
						Add Product
					</NavLink>
				</nav>

				<button
					className="nav-toggle"
					aria-expanded={open}
					onClick={() => setOpen((s) => !s)}
				>
					<span className="sr">Toggle menu</span>
					<div className="hamburger" />
				</button>
			</div>
		</header>
	)
}
