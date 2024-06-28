import "./global.scss";
import { createRoot } from "react-dom/client";
import App from "./components/app/App";
import { store } from './redux/store'
import { Provider } from 'react-redux'


const rootNode = document.getElementById("trains");



if (!rootNode) {
    throw new Error("Not found root")
}

createRoot(rootNode).render(

    <Provider store={store}>
        <App />
    </Provider>
)


