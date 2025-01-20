import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {NavBar} from "../components/NavBar";
import {AllCatsScreen} from "../screens/AllCatsScreen";
import {FavoriteCatsScreen} from "../screens/FavoriteCatsScreen";


export const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path={'/'}
                    element={<NavBar />}
                >
                    <Route
                        index
                        element={<AllCatsScreen />}
                    />
                    <Route
                        path={'/favorite'}
                        element={<FavoriteCatsScreen />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}