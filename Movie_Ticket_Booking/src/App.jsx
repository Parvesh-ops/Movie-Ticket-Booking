import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layout & Pages
import Layout from "./Layout";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import MovieDetail from "./pages/MovieDetail";
import SeatLayout from "./pages/SeatLayout";
import MyBooking from "./pages/MyBooking";
import Favorite from "./pages/Favorite";
import DateSelect from "./components/DateSelect/DateSelect";
import PayNow from "./pages/payNow";
import Theaters from "./pages/Theaters";

// Dashboard
import DashboardLayout from "./dashboard/DashboardLayout";
import DashboardHome from "./dashboard/DashboardHome";
import AddShows from "./dashboard/AddShows";
import ListShows from "./dashboard/ListShows";
import ListBooking from "./dashboard/ListBooking";
import AdminNavbar from "./dashboard/AdminNavbar";
import AdminSidebar from "./dashboard/AdminSidebar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "movie", element: <Movie /> },
      { path: "movie/:id", element: <MovieDetail /> },
      { path: "movie/:id/:date", element: <SeatLayout /> },
      { path: "theatres", element: <Theaters /> },
      { path: "my-booking", element: <MyBooking /> },
      { path: "favorite", element: <Favorite /> },
      { path: "date-select", element: <DateSelect /> },
      { path: "pay-now", element: <PayNow /> },
      {
        path: "*",
        element: (
          <h1 className="min-h mt-50 flex justify-center text-center">
            404 - Page Not Found
          </h1>
        ),
      },
    ],
  },

  // Admin Dashboard
  {
    path: "/adminDashboard",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <DashboardHome /> },
      { path: "navbar", element: <AdminNavbar /> },
      { path: "sidebar", element: <AdminSidebar /> },
      { path: "add-shows", element: <AddShows /> },
      { path: "list-shows", element: <ListShows /> },
      { path: "bookings", element: <ListBooking /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
