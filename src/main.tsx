import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-wnqp04xircjjnguk.us.auth0.com"
      clientId="C6fevYOkunrHlgHIXg31FGWnU7zycUPI"
      authorizationParams={{
        redirect_uri: "http://localhost:5173/",
        // TODO: Set up API audience
        // Scope is only needed for Authorisation Claims
        // audience: "https://dev-wnqp04xircjjnguk.us.auth0.com/api/v2/",
        // scope: "read:current_user update:current_user_metadata",
      }}
    >
      <RouterProvider router={router} />
    </Auth0Provider>
  </React.StrictMode>
);
