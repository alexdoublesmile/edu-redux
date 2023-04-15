import React from "react";
import reactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import App from "./app/App";
import { Provider } from "react-redux";
import { createStore } from "./app/store/createStore";

const store = createStore();

reactDom.render(
    <React.StrictMode>
        <Provider store={store} >
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.querySelector("#root")
);
