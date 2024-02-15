import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Store from "./pages/Store";
import About from "./pages/About";

// creating routes
const router = createBrowserRouter([
  {path : '/' , element : <Store/>},
  {path : '/about', element : <About/>}
])

function App() {

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
