import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Product = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/product')
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Network response was not ok');
        }
      })
      .then(data => setProduct(data.product))
      .catch(err => console.error('Fetching error:', err));
  }, []);

  return (
    <div className="min-h-screen w-screen bg-[#343634]">
      {/* Navbar */}
      <div className="bg-[#221f1f]">
        <nav className="p-3 flex justify-between items-center mx-4 md:mx-20 relative">
          {/* Logo */}
          <h1 className="font-bold text-white text-xl md:text-2xl">
            my <span className="text-[yellow]">ramen shop</span>
          </h1>

          {/* Toggle Button */}
          <button
            className="md:hidden text-yellow-400 focus:outline-none"
            onClick={() => setNavOpen(!navOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {navOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Nav Links */}
          <ul
            className={` md:flex md:flex-row md:gap-2 absolute md:static top-full left-0 w-full md:w-auto bg-[#221f1f] md:bg-transparent text-center overflow-hidden transition-[max-height] duration-300 ease-in-out ${
              navOpen ? 'max-h-60 md:max-h-full' : 'max-h-0 md:max-h-full'
            }`}
          >
            {['About', 'Contact', 'Product'].map((item, idx) => (
              <li
                key={idx}
                className="text-[yellow] font-bold hover:underline cursor-pointer px-2 py-5 md:py-0"
                onClick={() => setNavOpen(false)}
              >
                <Link to={`/dashboard/${item.toLowerCase()}`}>{item}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Banner */}
      <div className="w-full h-64 bg-[url('https://i.ytimg.com/vi/NpawwQf0tiQ/maxresdefault.jpg')] bg-cover bg-center rounded-xl flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold drop-shadow-lg">All Product</h1>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto p-4 space-y-6">

        <h2 className="text-2xl font-semibold text-white">Product Category</h2>

        {/* Categories */}
        <div className="flex gap-4 mb-6">
          <button className="px-6 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700">Coffee</button>
          <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">Food</button>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Ramen</button>
        </div>

        {/* Search */}
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            placeholder="Search product..."
            className="flex-1 px-4 py-2 border border-yellow-600 rounded-lg bg-transparent placeholder-yellow-300 text-white font-bold focus:outline-none focus:ring-2 focus:ring-yellow-600"
          />
          <button className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700">Search</button>
        </div>

        {/* Product List */}
        <div className="flex flex-wrap gap-6">
          {product.map((item) => (
            <div
              key={item.id}
              className="w-40 bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105"
            >
              {/* Image — hide sa mobile */}
              <div
                className="h-32 bg-gray-200 bg-center bg-cover hidden sm:block"
                style={{ backgroundImage: `url('${item.img}')` }}
              ></div>

              <div className="p-4">
                <h3 className="text-gray-800 font-semibold mb-2">{item.name}</h3>
                <p className="text-sm text-gray-500 mb-4">Category: {item.category}</p>

                <div className="flex justify-between gap-2">
                  <button className="flex-1 px-2 py-1.5 text-xs font-semibold bg-yellow-600 text-white rounded-md hover:bg-yellow-700 transition">Checkout</button>
                  <button className="flex-1 px-2 py-1.5 text-xs font-semibold bg-green-600 text-white rounded-md hover:bg-green-700 transition">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Product;
