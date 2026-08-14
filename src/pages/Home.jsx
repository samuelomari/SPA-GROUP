import { Link } from 'react-router-dom'

export default function Home() {
	return (
		<section className="home-page">
			<div className="hero-section">
				<h1>Admin Portal</h1>
				<p className="lead">
					Manage products quickly — add, edit, and remove items from the
					inventory.
				</p>
				<div className="hero-cta">
					<Link to="/products" className="btn primary">
						View Products
					</Link>
					<Link to="/add-product" className="btn outline">
						Add Product
					</Link>
				</div>
			</div>

			<div className="features">
				<div className="container features-grid">
					<div className="feature">
						<h2>Product Management</h2>
						<p>Create, update and delete products from your catalog.</p>
					</div>
					<div className="feature">
						<h2>Search & Filter</h2>
						<p>Find products instantly using the search tool.</p>
					</div>
					<div className="feature">
						<h2>Responsive UI</h2>
						<p>Optimized for desktop, tablet, and mobile devices.</p>
					</div>
				</div>
			</div>
		</section>
	)
}
