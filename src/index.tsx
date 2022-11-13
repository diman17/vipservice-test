import ReactDOM from "react-dom/client";
import "./styles/style.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<RouterProvider router={router} />);
