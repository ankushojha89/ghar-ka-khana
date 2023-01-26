import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import HeaderComponent from "./src/components/HeaderComponent";
import FooterComponent from "./src/components/FooterComponent";
import HomeComponent from "./src/components/HomeComponent";
import AboutUs from "./src/components/AboutUs";
import ContactUs from "./src/components/ContactUs";
import ErrorPage from "./src/components/ErrorPage";
import CardDetails from "./src/components/CardDetails";

const AppLayout = () => {
  return (
    <React.Fragment>
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </React.Fragment>
  );
};

const routeObj = [
  {
    path: "/",
    element: <AppLayout/>,
    children: [
      {
        path: "",
        element: <HomeComponent />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/card/:id",
        element: <CardDetails />,
      }
    ],
    errorElement: (
    <React.Fragment>
      <HeaderComponent />
      <ErrorPage />
      <FooterComponent />
    </React.Fragment>
    )
  },
];
const router = new createBrowserRouter(routeObj);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
