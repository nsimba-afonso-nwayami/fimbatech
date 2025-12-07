import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import HeroImg from "../../assets/img/hero-sobre.jpg";
import PlaceholderImg from "../../assets/img/sobre.jpg";
import LiderImg1 from "../../assets/img/review1.jpeg";
import LiderImg2 from "../../assets/img/review2.jpg";
import LiderImg3 from "../../assets/img/review3.jpeg";
import LiderImg4 from "../../assets/img/review3.jpeg";

export default function Sobre() {

  return (
    <>
      <title>Sobre | FimbaTec</title>
      {/*Header*/}
      <Header />

      <section
        className="py-20 md:py-32 relative overflow-hidden pt-40 bg-gray-950"
        style={{
          backgroundImage: `url(${HeroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-blue-950/70 backdrop-blur-sm"></div>

        <div className="max-w-6xl mx-auto px-6 text-center relative z-10 text-white">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
            Construindo o Futuro da Tecnologia
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 font-light">
            Conheça a história e o propósito que move a FimbaTec.
          </p>
        </div>
      </section>

      {/* Nossa História e Propósito */}
      <section className="py-24 bg-gray-950 text-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-cyan-400 font-semibold uppercase tracking-wider mb-2 block">
              Desde 2018
            </span>
            <h2 className="text-4xl font-bold mb-6">
              A Força da Inovação Angolana
            </h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              A FimbaTec nasceu da paixão por solucionar complexos desafios de
              negócios através de software de alto nível. Fundada no coração de
              Luanda, rapidamente expandimos nossa atuação, combinando a
              agilidade local com os padrões internacionais de qualidade em
              desenvolvimento.
            </p>
            <p className="text-gray-300 leading-relaxed border-l-4 border-cyan-400 pl-4 italic">
              "Não construímos apenas código; construímos plataformas que
              definem o sucesso de amanhã."
            </p>
            <Link
              to="/contato"
              className="mt-8 inline-block bg-blue-700 px-6 py-3 rounded-lg text-white font-semibold hover:bg-blue-600 transition"
            >
              <i className="fa-solid fa-arrow-right mr-2"></i>
              Fale Conosco
            </Link>
          </div>

          <div className="rounded-xl overflow-hidden shadow-2xl">
            <img
              src={PlaceholderImg}
              alt="Visão da equipe FimbaTec ou prédio corporativo"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Nossa Base: Missão, Visão e Valores
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-gray-950 rounded-xl border border-cyan-400/10 shadow-lg text-center">
              <i className="fa-solid fa-rocket text-4xl text-cyan-400 mb-4"></i>
              <h3 className="text-2xl font-semibold mb-3">Missão</h3>
              <p className="text-gray-400">
                Capacitar negócios angolanos e globais através de soluções
                tecnológicas inovadoras, escaláveis e sob medida, impulsionando
                a transformação digital.
              </p>
            </div>

            <div className="p-8 bg-gray-950 rounded-xl border border-cyan-400/10 shadow-lg text-center">
              <i className="fa-solid fa-eye text-4xl text-cyan-400 mb-4"></i>
              <h3 className="text-2xl font-semibold mb-3">Visão</h3>
              <p className="text-gray-400">
                Ser reconhecida como a líder em inovação e desenvolvimento de
                software na África, estabelecendo um novo padrão de excelência e
                parceria tecnológica.
              </p>
            </div>

            <div className="p-8 bg-gray-950 rounded-xl border border-cyan-400/10 shadow-lg text-center">
              <i className="fa-solid fa-hands-holding-child text-4xl text-cyan-400 mb-4"></i>
              <h3 className="text-2xl font-semibold mb-3">Valores</h3>
              <p className="text-gray-400">
                Excelência Técnica, Integridade e Transparência, Inovação
                Contínua e Foco no Resultado do Cliente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Liderança */}
      <section className="py-24 bg-gray-950 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-10">Conheça Nossos Líderes</h2>
          <p className="text-gray-400 mb-12">
            Nosso time de liderança combina experiência técnica profunda com
            visão estratégica de mercado.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full mb-3 border-2 border-cyan-400/50 overflow-hidden">
                <img
                  src={LiderImg1}
                  alt="Foto de Maria Santos"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-semibold text-white">Maria Santos</p>
              <p className="text-xs text-cyan-400">CEO & Fundadora</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full mb-3 border-2 border-cyan-400/50 overflow-hidden">
                <img
                  src={LiderImg2}
                  alt="Foto de João Silva"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-semibold text-white">João Silva</p>
              <p className="text-xs text-cyan-400">Diretor de Tecnologia</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full mb-3 border-2 border-cyan-400/50 overflow-hidden">
                <img
                  src={LiderImg3}
                  alt="Foto de Ana Costa"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-semibold text-white">Ana Costa</p>
              <p className="text-xs text-cyan-400">Chefe de Operações</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full mb-3 border-2 border-cyan-400/50 overflow-hidden">
                <img
                  src={LiderImg4}
                  alt="Foto de Pedro Mendes"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-semibold text-white">Pedro Mendes</p>
              <p className="text-xs text-cyan-400">Diretor de Marketing</p>
            </div>
          </div>
        </div>
      </section>

      {/*Footer*/}
      <Footer />
    </>
  );
}
