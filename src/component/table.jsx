import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Table = () => {
    const menuItems = [
        { id: 1, title: "Buffalo Milk", Price: "60" },
        { id: 2, title: "Cow Milk", Price: "55" },
        { id: 3, title: "Goat Milk", Price: "70" },
        { id: 4, title: "Buffalo Milk Curd", Price: "120" },
        { id: 5, title: "Paneer", Price: "340" },
        { id: 6, title: "Cheese", Price: "120" },
        { id: 7, title: "Lassi", Price: "40" }
    ];

    const [quantities, setQuantities] = useState(
        menuItems.reduce((acc, item) => ({ ...acc, [item.id]: 1 }), {})
    );
    const [selectedItems, setSelectedItems] = useState([]);

    const handleQuantityChange = (id, value) => {
        setQuantities({ ...quantities, [id]: Number(value) });
    };

    const handleCheckboxChange = (id) => {
        setSelectedItems((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    const navigate = useNavigate();

    // Function to send data to MongoDB
    const handleAddToCart = async (e) => {
        e.preventDefault();

        // Filter selected items and format them for the backend
        const cartItems = menuItems
            .filter(item => selectedItems.includes(item.id))
            .map(item => ({
                title: item.title,
                price: item.Price,
                quantity: quantities[item.id]
            }));

        if (cartItems.length === 0) {
            alert("Please select at least one item.");
            return;
        }

        try {
            const response = await axios.post("http://localhost:4080/cart", { items: cartItems });
            alert("Items added to cart successfully!");
            console.log(response.data);
            navigate('/cart'); // Redirect to cart page
        } catch (error) {
            console.error("Error adding to cart:", error);
            alert("Failed to add items to cart.");
        }
    };

    return (
        <div className="container mt-4 text-center">
            <h2>Order Now</h2>
            <table className="table table-bordered text-center">
                <thead className="table-light">
                    <tr>
                        <th style={{ width: "100px" }}>Sr. no.</th>
                        <th style={{ width: "400px" }}>MENU</th>
                        <th style={{ width: "100px" }}>Price</th>
                        <th style={{ width: "100px" }}>Quantity</th>
                        <th style={{ width: "100px" }}>Select</th>
                    </tr>
                </thead>
                <tbody>
                    {menuItems.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>₹{item.Price}</td>
                            <td>
                                <select
                                    className="form-select"
                                    value={quantities[item.id]}
                                    onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                                >
                                    {[1, 2, 3, 4, 5].map((num) => (
                                        <option key={num} value={num}>
                                            {num}
                                        </option>
                                    ))}
                                </select>
                            </td>
                            <td>
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    onChange={() => handleCheckboxChange(item.id)}
                                    checked={selectedItems.includes(item.id)}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className="btn btn-primary w-75 mb-3" onClick={handleAddToCart}>
                Add to Cart
            </button>
        </div>
    );
};

export default Table;
