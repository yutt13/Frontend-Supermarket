import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import SearchResults from "./pages/Search";
import Products from "./pages/Products";
import AddToCart from "./pages/Addtocart";
import Profile from "./pages/Profile";
import { AuthProvider } from './pages/AuthContext';


const App = () => {
  return (
    <>
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<Products/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/cart" element={<AddToCart/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
    </>
  );
};

export default App;
