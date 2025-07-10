import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactForm from "./pages/ContactForm";
import AboutPage from "./pages/AboutPage";
import ImpactPage from "./pages/ImpactPage";
import ProductPage from "./pages/ProductPage";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "contact", element: <ContactForm /> },
    { path: "about", element: <AboutPage /> },
    { path: "impact", element: <ImpactPage /> },
    { path: "products", element: <ProductPage /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
