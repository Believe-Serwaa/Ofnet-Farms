import React from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage';
import ContactForm from './pages/ContactForm';

function App() {
  const router = createBrowserRouter ([
    {path: "/", element: <HomePage/>},
    {path: "contact", element: <ContactForm />}

  ]);

  return <RouterProvider router={router}/>;
    
  
}

export default App;
