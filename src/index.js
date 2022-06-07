import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {Routes, Route} from "react-router-dom";
import Transport from "./components/transport/Transport";
import Rutas from "./components/rutas/Rutas";
import History from "./components/history/History";
import Confi from "./components/confi/Confi";
import Help from "./components/help/Help";
import About from "./components/about/About";
import Error404 from "./components/error404/Error404";
import Pay from "./components/pay/Pay"
import 'bootstrap/dist/css/bootstrap.min.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter> 
    <Routes>
        <Route path="/" element={<App/>}> </Route>
        <Route path="/transport" element={<Transport/>}> </Route>
        <Route path="/rutas" element={<Rutas/>}> </Route>
        <Route path="/history" element={<History/>}> </Route>
        <Route path="/confi" element={<Confi/>}> </Route>
        <Route path="/help" element={<Help/>}> </Route>
        <Route path="/about" element={<About/>}> </Route>
        <Route path="/*" element={<Error404/>}> </Route>
        <Route path="/pay" element={<Pay/>}> </Route>

      </Routes>
    </BrowserRouter>

);
