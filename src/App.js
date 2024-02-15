import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Store from "./pages/Store";
import About from "./pages/About";
import Home from "./pages/Home";

// creating routes
const router = createBrowserRouter([
  {path : '/' , element : <Store/>},
  {path : '/about', element : <About/>},
  {path : '/home' , element : <Home/>}
])

function App() {

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
