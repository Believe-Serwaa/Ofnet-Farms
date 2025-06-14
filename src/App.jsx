import React from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage';
import ContactForm from './pages/ContactForm';
import ProductsPage from './pages/ProductsPage';
import AboutPage from './pages/AboutPage';
import Products from './pages/Products';
import ImpactPage from './pages/ImpactPage';

function App() {
  const router = createBrowserRouter ([
    {path: "/", element: <HomePage/>},
    {path: "contact", element: <ContactForm />},
    {path: "products", element: <ProductsPage />},
    {path: "about", element: <AboutPage />},
    {path: "impact", element: <ImpactPage />},
    {path: "product", element: <Products />},

  ]);

  return <RouterProvider router={router}/>;
    
  
}

export default App;
