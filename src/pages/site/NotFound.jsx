import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

export default function NotFound() {
  return (
    <>
      <title>Página não encontrada | FimbaTec</title>

      {/*Header*/}
      <Header />

      {/* Seção Principal 404 */}
      <section className="min-h-screen pt-32 pb-16 flex flex-col items-center justify-center bg-gray-950 text-white p-6 relative overflow-hidden">
        {/* Ícone de Destaque no Fundo */}
        {/* Mantido como um elemento estático e grande para estética */}
        <i className="fas fa-microchip text-[120px] text-white/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0" />

        <div className="flex flex-col items-center z-10">
          <h1 className="text-9xl md:text-[180px] font-extrabold text-blue-400 tracking-wider mb-8">
            404
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
            Ops! Página Não Encontrada
          </h2>

          <p className="text-lg md:text-xl text-gray-400 text-center max-w-xl mb-10">
            Parece que o link que você seguiu está quebrado ou a página foi
            movida. Não se preocupe, vamos te ajudar a voltar para o caminho
            certo!
          </p>

          <Link
            to="/"
            className="inline-flex items-center bg-blue-600 px-8 py-3 rounded-lg text-white-950 font-bold text-lg hover:bg-blue-700 transition shadow-xl"
          >
            <i className="fa-solid fa-house-chimney mr-3"></i>
            Voltar para a Home
          </Link>
        </div>
      </section>

      {/*Footer*/}
      <Footer />
    </>
  );
}
