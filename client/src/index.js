import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import LoadingSpinner from "./loading/LoadingSpinner";

const root = ReactDOM.createRoot(document.getElementById("root"));
const LazyApp = lazy(() => import("./App"));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <Suspense fallback={<LoadingSpinner />}>
        <LazyApp />
      </Suspense>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
