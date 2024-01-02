import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import DataContext from "../contexts/DataContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <DataContext>
      <App />
    </DataContext>
  </BrowserRouter>
);