import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { Authorized } from "./Authorized"
import EventsList from "../components/events/EventsList"
import GamesList from "../components/games/GamesList"
import { GameForm } from "../components/games/GameForm"



export const ApplicationViews = () => {
    return <>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<Authorized />}>
                <Route path="/" element={<GamesList />} />
                <Route path="/games" element={<GamesList />} />
                <Route path="/events" element={<EventsList />} />
                <Route path="/games/new" element={<GameForm />} />
            </Route>
        </Routes>
    </>
}
