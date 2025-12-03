import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

export default function Sobre() {
  return (
    <>
        <title>Sobre | FimbaTec</title>
        {/*Header*/}
        <Header />

        <div class="min-h-screen flex items-center justify-center bg-blue-950 text-white p-6 shadow-lg space-x-4">
            <i class="fas fa-laptop-code text-3xl"></i>
            <h1 class="text-2xl font-bold">Fimbatech 404</h1>
        </div>

        {/*Footer*/}
        <Footer />
    </>
  );
}
