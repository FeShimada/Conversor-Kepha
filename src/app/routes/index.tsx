import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Inicio } from "../components/Inicio"
import { GrausCelcius } from "../pages/GrausCelcius"
import { Litro } from "../pages/Litro"
import { Metro } from "../pages/Metro"
import { Quilo } from "../pages/Quilo"
import { useRecoilValue } from "recoil"
import { Historico } from "../components/Historico"
import { unidadeBaseState } from "../../state/atom"

export const AppRouter = () => {

    const unidadeBase = useRecoilValue(unidadeBaseState)

    return (
        <Router>
            <Inicio />
            <Routes>
                <Route path="/metro" element={<Metro />}></Route>
                <Route path="/litro" element={<Litro />}></Route>
                <Route path="/quilo" element={<Quilo />}></Route>
                <Route path="/graus-celcius" element={<GrausCelcius />}></Route>
                <Route path="*"></Route>
            </Routes>
            <Historico unidadeBase={unidadeBase} children={undefined} />
        </Router>
    )
} 
