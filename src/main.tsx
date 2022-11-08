import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Providers } from "./Providers";
import { GlobalStyle } from "./Styles";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Providers>
      <GlobalStyle />
      <App />
    </Providers>
  </React.StrictMode>
);
