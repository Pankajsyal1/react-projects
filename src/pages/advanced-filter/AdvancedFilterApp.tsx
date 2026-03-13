import { useState, useEffect } from "react";
import products from "./db/data";
import Sidebar from './components/Sidebar/Sidebar';
import Navigation from './components/Navigation/Nav';
import Recommended from './components/Recommended/Recommended';
import Products from './components/Products/Products';
import Card from './components/common/Card';
import AppHeading from "../../components/common/AppHeading";
import { motion, AnimatePresence } from "framer-motion";

const AdvancedFilterApp = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isSidebarOpen]);

  const handleInputChange = (event) => setQuery(event.target.value);
  const handleChange = (event) => setSelectedCategory(event.target.value);
  const handleClick = (event) => setSelectedCategory(event.target.value);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

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
    <div className="container mx-auto px-6">
      <AppHeading sno={1} title="Premium Sneaker Vault" />

      <div className="mt-12 flex relative">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block w-72 shrink-0">
          <Sidebar handleChange={handleChange} />
        </aside>

        {/* Mobile Sidebar Overlay */}
        <AnimatePresence>
          {isSidebarOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-dark/60 backdrop-blur-sm z-[100] lg:hidden"
              onClick={toggleSidebar}
            />
          )}
        </AnimatePresence>

        {/* Mobile Sidebar Content */}
        <AnimatePresence>
          {isSidebarOpen && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 h-full w-80 bg-white z-[101] lg:hidden p-10 overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-10">
                <h3 className="text-sm font-black uppercase tracking-widest text-dark">Filters</h3>
                <button onClick={toggleSidebar} className="w-10 h-10 rounded-full bg-dark/5 flex items-center justify-center text-dark">
                  ✕
                </button>
              </div>
              <Sidebar handleChange={handleChange} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Storefront Area */}
        <main className="flex-1 lg:pl-12">
          <Navigation query={query} handleInputChange={handleInputChange} toggleSidebar={toggleSidebar} />
          <div className="my-10">
            <Recommended handleClick={handleClick} />
          </div>
          <Products result={result} />
        </main>
      </div>
    </div>
  );
};

export default AdvancedFilterApp;
