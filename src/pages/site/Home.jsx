import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

export default function Home() {
  return (
    <>
        {/*Header*/}
        <Header />

        <section className="min-h-screen flex items-center justify-center bg-blue-950 text-white p-6 shadow-lg space-x-4">
            <i className="fas fa-laptop-code text-3xl"></i>
            <h1 className="text-2xl font-bold">Fimbatec</h1>
        </section>

        {/*Footer*/}
        <Footer />
    </>
  );
}
