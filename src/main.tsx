import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyle } from "./Styles";
import { Providers } from "./Providers";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Providers>
      <GlobalStyle />
      <App />
    </Providers>
  </React.StrictMode>
);
