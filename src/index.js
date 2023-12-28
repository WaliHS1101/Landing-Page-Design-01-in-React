import ReactDOM from "react-dom/client";
import "./index.css"
import reportWebVitals from "./reportWebVitals"
import App from "./App"
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
  
    <StrictMode>

      <BrowserRouter>

        <App />

      </BrowserRouter>

    </StrictMode>

  </>

)

reportWebVitals();