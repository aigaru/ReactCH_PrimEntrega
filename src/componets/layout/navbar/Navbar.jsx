import React, { useEffect, useState } from "react";
import { FAKE_STORE_API_URL } from "../../../services/ApiContext"; // Import the API URL
import './Navbar.css';

const Navbar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const response = await fetch(FAKE_STORE_API_URL);
            const data = await response.json();
            const uniqueCategories = [...new Set(data.map(item => item.category))];
            setCategories(uniqueCategories);
        };

        fetchCategories();
    }, []);

    return (
        <nav className="main-nav">
            <ul className="nav-list">
                {categories.map((category, index) => (
                    <li key={index} className="navbar-item">
                        <a href={`${category}`} className="nav-link">
                            {category}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
export default Navbar;
