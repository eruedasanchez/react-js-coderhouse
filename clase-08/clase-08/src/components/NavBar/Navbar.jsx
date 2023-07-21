import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className='logo'>Parcishop</Link>
            <ul className='menu'>
                <li><Link className="menu-link" to="/">Inicio</Link></li>
                <li><Link className="menu-link" to="/productos/">Productos</Link></li>
                <li><Link className="menu-link" to="/productos/best-seller">Best Seller</Link></li>
                <li><Link className="menu-link" to="/productos/hot-collection">Hot Collection</Link></li>
                <li><Link className="menu-link" to="/productos/trendy">Trendy</Link></li>
                <li><Link className="menu-link" to="/productos/new-arrival">New Arrival</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;