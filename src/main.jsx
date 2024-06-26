import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Services from "./component/Services.jsx";
import About from "./component/About.jsx";
import ContactUs from "./component/ContactUs.jsx";
import Faq from "./component/Faq.jsx";
import Price from "./component/Price.jsx";
import Progressreport from "./component/Progressreport.jsx";
import Form from "./component/Form.jsx";
import MainLayout from "./layout/MainLayout.jsx";
import Home from "./component/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/progress",
        element: <Progressreport />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },

      {
        path: "/price",
        element: <Price />,
      },
      {
        path: "/form",
        element: <Form />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
