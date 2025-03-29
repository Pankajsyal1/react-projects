import { useState, useEffect } from "react";
// Database
import products from "./db/data";
import Sidebar from './components/Sidebar/Sidebar';
import Navigation from './components/Navigation/Nav';
import Recommended from './components/Recommended/Recommended';
import Products from './components/Products/Products';
import Card from './components/common/Card';
import AppHeading from "../../components/common/AppHeading";

const AdvancedFilterApp = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar State

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = ""; // Enable scrolling
    }
    return () => {
      document.body.style.overflow = ""; // Clean up on unmount
    };
  }, [isSidebarOpen]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const filteredItems = products.filter(product =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    if (query) {
      filteredProducts = filteredItems;
    }

    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }
    return filteredProducts.map(({ img, title, star, reviews, newPrice, prevPrice }) => (
      <Card
        key={Math.random()}
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        newPrice={newPrice}
        prevPrice={prevPrice}
      />
    ));
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <AppHeading sno={1} title={"Ecommerce Filter"} />
      <div className="flex">
        {/* Sidebar - Hidden on small screens, visible on md+ */}
        <div className="hidden md:flex">
          <Sidebar handleChange={handleChange} />
        </div>

        {/* Sidebar Drawer for Small Screens */}
        {isSidebarOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={toggleSidebar}></div>
        )}
        <div
          className={`fixed left-0 top-0 h-full bg-slate-800 shadow-lg w-60 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out md:hidden z-50 p-8 overflow-y-auto overflow-x-hidden`}
        >
          <Sidebar handleChange={handleChange} />
          <button
            className="absolute top-4 right-4 text-gray-700"
            onClick={toggleSidebar}
          >
            ✖
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 pl-0 md:pl-8">
          <Navigation query={query} handleInputChange={handleInputChange} toggleSidebar={toggleSidebar} />
          <Recommended handleClick={handleClick} />
          <Products result={result} />
        </div>
      </div>
    </>
  );
};

export default AdvancedFilterApp;
