import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import HeroImg from "../../assets/img/hero-servicos.jpg";

export default function Servicos() {

  return (
    <>
      <title>Serviços | FimbaTec</title>

      {/*Header*/}
      <Header />

      <section
        className="py-20 md:py-32 text-center relative overflow-hidden pt-40 bg-gray-950 text-white"
        style={{
          backgroundImage: `url(${HeroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay escuro para garantir legibilidade do texto */}
        <div className="absolute inset-0 bg-blue-950/70 backdrop-blur-sm"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
            Soluções Tecnológicas sob Medida
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 font-light">
            Impulsionamos o seu negócio com inovação, qualidade e excelência
            técnica.
          </p>
        </div>
      </section>

      {/* Visão Geral - Por que FimbaTec? */}
      <section className="py-24 bg-gray-950 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Elevando o Nível da Sua Tecnologia
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-12">
            Nossos serviços são desenhados para serem a extensão da sua equipe,
            garantindo que você tenha acesso à melhor stack tecnológica e a
            expertise necessária para dominar o mercado.
          </p>

          <div className="flex justify-center">
            <Link
              to="/contato"
              className="inline-block text-center bg-blue-600 px-8 py-3 rounded-lg text-white-950 font-bold text-lg hover:bg-blue-700 transition shadow-xl"
            >
              <i className="fa-solid fa-handshake mr-2"></i>
              Inicie seu Projeto
            </Link>
          </div>
        </div>
      </section>

      {/* Serviços Principais */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Nossas Áreas de Expertise
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 bg-gray-950 rounded-xl border-t-4 border-cyan-400 shadow-xl hover:shadow-cyan-400/20 transition duration-300">
              <i className="fa-solid fa-code text-5xl text-cyan-400 mb-6"></i>
              <h3 className="text-2xl font-semibold mb-3">
                Desenvolvimento Web Personalizado
              </h3>
              <p className="text-gray-400">
                Criação de websites, plataformas complexas e APIs sob medida
                usando tecnologias modernas como React, Node.js e Django.
              </p>
            </div>

            <div className="p-8 bg-gray-950 rounded-xl border-t-4 border-cyan-400 shadow-xl hover:shadow-cyan-400/20 transition duration-300">
              <i className="fa-solid fa-mobile-alt text-5xl text-cyan-400 mb-6"></i>
              <h3 className="text-2xl font-semibold mb-3">
                Desenvolvimento de Apps Mobile
              </h3>
              <p className="text-gray-400">
                Soluções nativas e híbridas (iOS e Android) que garantem alta
                performance e experiência de usuário fluida para o seu negócio.
              </p>
            </div>

            <div className="p-8 bg-gray-950 rounded-xl border-t-4 border-cyan-400 shadow-xl hover:shadow-cyan-400/20 transition duration-300">
              <i className="fa-solid fa-cloud text-5xl text-cyan-400 mb-6"></i>
              <h3 className="text-2xl font-semibold mb-3">
                Serviços de Cloud e DevOps
              </h3>
              <p className="text-gray-400">
                Implantação e gestão de infraestrutura em nuvem (AWS, Azure) e
                automação de processos via CI/CD para máxima eficiência.
              </p>
            </div>

            <div className="p-8 bg-gray-950 rounded-xl border-t-4 border-cyan-400 shadow-xl hover:shadow-cyan-400/20 transition duration-300">
              <i className="fa-solid fa-chart-line text-5xl text-cyan-400 mb-6"></i>
              <h3 className="text-2xl font-semibold mb-3">
                Consultoria e Análise de Sistemas
              </h3>
              <p className="text-gray-400">
                Avaliação estratégica e planejamento de TI para otimizar
                processos, reduzir custos e preparar sua empresa para o
                crescimento digital.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*Footer*/}
      <Footer />
    </>
  );
}
