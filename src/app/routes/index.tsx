import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Inicio } from '../components/Inicio';
import { GrausCelcius } from '../pages/GrausCelcius';
import { Litro } from '../pages/Litro';
import { Metro } from '../pages/Metro';
import { Quilo } from '../pages/Quilo';
import { Historico } from '../components/Historico';
import { NotFound } from '../pages/NotFound';

export const AppRouter = () => {

    return (
        <Router>
            <Inicio />
            <Routes>
                <Route path="/" element={<Historico />}>
                    <Route index element={<Litro/>}></Route>
                    <Route path='litro' element={<Litro />}></Route>
                    <Route path='metro' element={<Metro />}></Route>
                    <Route path='quilo' element={<Quilo />}></Route>
                    <Route path='graus-celcius' element={<GrausCelcius />}></Route>
                </Route>
                
                <Route path='*' element={<NotFound />}></Route>
            </Routes>
        </Router>
    );
}; 
