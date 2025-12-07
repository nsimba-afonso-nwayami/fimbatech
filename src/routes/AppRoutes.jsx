import { Routes, Route } from "react-router-dom";
import Home from "../pages/site/Home";
import Sobre from "../pages/site/Sobre";
import Servicos from "../pages/site/Servicos";
import Tecnologia from "../pages/site/Tecnologia";
import NotFound from "../pages/site/NotFound";

export default function AppRoutes () {
    return (
        <Routes>
            {/*Rotas do site */}
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/tecnologia" element={<Tecnologia />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}