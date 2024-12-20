import React from "react";
import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import App from "../App.jsx";
import Lab1 from "../pages/Lab1/Lab1.jsx";
import Lab2 from "../pages/Lab2/Lab2.jsx";
import Lab3_hash from "../pages/Lab3/Lab3_hash.jsx";
import Lab4 from "../pages/Lab4/Lab4.jsx";
import Lab5 from "../pages/Lab5/Lab5.jsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route index element={<Lab1 />} />
            <Route path="lab2" element={<Lab2 />} />
            <Route path="lab3" element={<Lab3_hash />} />
            <Route path="lab4" element={<Lab4 />} />
            <Route path="lab5" element={<Lab5 />} />
        </Route>
    )
);

export default router;
