import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./Layout";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import MovieDetail from "./pages/MovieDetail";
import SeatLayout from "./pages/SeatLayout";
import MyBooking from "./pages/MyBooking";
import Favorite from "./pages/Favorite";
import DateSelect from "./components/DateSelect/DateSelect";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,   
        element: <Home />,
      },
      {
        path: "/movie",
        element:<Movie />
      },
      {
        path:"/movie/:id",
        element:<MovieDetail />
      },
      {
        path: "/movie/:id/:date",
        element: <SeatLayout />,
      },
      {
        path:"/my-booking",
        element : <MyBooking />
      },
      {
        path:"/favorite",
        element : <Favorite />
      },
      {
        path:"/date-select",
        element : <DateSelect />
      },
    
      
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
