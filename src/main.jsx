import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Layout/Root";
import Error from "./Pages/Error/Error";
import Home from "./Pages/Home/Home";
import AuthProvider from "./Providers/AuthProvider";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Dashboard from "./Layout/Dashboard";
import ToDo from "./Pages/Dashboard/ToDo";
import Task from "./Pages/Dashboard/Task";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import FAQ from "./Pages/FAQ/FAQ";
import PrivateRoute from "./Routes/PrivateRoute";
import UpdateTask from "./Pages/Dashboard/UpdateTask";
import AboutUs from "./Pages/AboutUs/AboutUs";
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/aboutUs",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <ToDo></ToDo>,
      },
      {
        path: "/dashboard/addTask",
        element: <Task></Task>,
      },
      {
        path: "/dashboard/updateTask/:id",
        element: <UpdateTask></UpdateTask>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </AuthProvider>
);
