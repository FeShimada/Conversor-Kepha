import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Inicio } from "../pages/Inicio"

export const AppRouter = () => {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Inicio/>}></Route>
                <Route path="*"></Route>
            </Routes>
        </Router>
    )
} 
