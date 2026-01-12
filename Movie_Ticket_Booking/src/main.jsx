import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { ClerkProvider } from "@clerk/clerk-react";

import App from "./App";
import "./index.css";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY || '';

const root = ReactDOM.createRoot(document.getElementById("root"));

if (PUBLISHABLE_KEY) {
  root.render(
    <StrictMode>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <App />
      </ClerkProvider>
    </StrictMode>
  );
} else {
  console.warn('VITE_CLERK_PUBLISHABLE_KEY is not set. Rendering app without ClerkProvider.');
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
