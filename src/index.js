import React from 'react';
import ReactDOM from 'react-dom/client';
import { Footer, Navbar } from "./components/layout";
import { Home } from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";
import { ProductList2 } from "./pages/admin/products/ProductList2";
import CreateProduct from "./pages/admin/products/CreateProduct";
import EditProduct from "./pages/admin/products/EditProduct";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        
        <Route path='/contact' element={<Contact />} />
        <Route path='/admin/products' element={<ProductList2 />} />
        <Route path='/admin/products/create' element={<CreateProduct />} />
        <Route path='/admin/products/edit/:id' element={<EditProduct />} />
        
        <Route path='*' element={<NotFound />} />
        
      </Routes>
      <Footer />
    </ BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

