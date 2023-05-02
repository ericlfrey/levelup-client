import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { Authorized } from "./Authorized"
import EventsList from "../components/events/EventsList"
import GamesList from "../components/games/GamesList"



export const ApplicationViews = () => {
    return <>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<Authorized />}>
                <Route path="/events" element={<EventsList />} />
                <Route path="/games" element={<GamesList />} />
            </Route>
        </Routes>
    </>
}
