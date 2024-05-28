import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-wnqp04xircjjnguk.us.auth0.com"
      clientId="C6fevYOkunrHlgHIXg31FGWnU7zycUPI"
      authorizationParams={{
        redirect_uri: "http://localhost:5173/",
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
