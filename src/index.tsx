import "./global.scss";
import { createRoot } from "react-dom/client";
import App from "./components/app/App";

const rootNode = document.getElementById("trains");



if (!rootNode) {
    throw new Error("Not found root")
}

createRoot(rootNode).render(<App />)


