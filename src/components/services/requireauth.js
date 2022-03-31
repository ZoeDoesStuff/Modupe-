import { useState } from "@hookstate/core";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import store from "../../store";

export default function RequireAuth({ children, ...rest }) {
    const { user } = useState(store)
    let location = useLocation();

    try {
        if (!user.isAuthenticated.get()) {
            return <Navigate to="/" state={{ from: location }} />
        }
        return children;
    } catch (e) {
        console.log(e)
    }
}