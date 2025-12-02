import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import HeroImg from "../../assets/img/home.jpg";
import VideoHome from "../../assets/video/video.mp4";
import SistemaImg1 from "../../assets/img/home1.jpg";
import SistemaImg2 from "../../assets/img/home2.jpg";
import SistemaImg3 from "../../assets/img/home3.jpg";

export default function Home() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section
        className="hero w-full h-[90vh] bg-cover bg-center bg-fixed relative flex items-center"
        style={{ backgroundImage: `url(${HeroImg})` }}
      >
        {/* Overlay escuro */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Conteúdo */}
        <div className="content relative z-10 max-w-3xl px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-100 leading-tight drop-shadow-lg">
            Soluções Tecnológicas Sob Medida
          </h1>
          <p className="text-gray-200 text-lg md:text-xl mt-4 leading-relaxed drop-shadow-md">
            Soluções digitais sob medida para impulsionar negócios.  
            Do conceito ao código final, entregamos tecnologia moderna, eficiente e escalável.
          </p>

          {/* Botões */}
          <div className="flex gap-4 mt-8">
            <a
              href="#"
              className="bg-blue-900 px-6 py-3 rounded-lg text-white font-semibold hover:bg-blue-950 transition shadow-lg"
            >
              Peça um orçamento
            </a>
            <a
              href="#"
              className="bg-transparent border border-cyan-400 px-6 py-3 rounded-lg text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-blue-950 transition shadow-md"
            >
              Tecnologia
            </a>
          </div>
        </div>
      </section>

      {/* Nossas Soluções - Seção com vídeo de fundo */}
      <section className="relative py-24 text-white overflow-hidden">
        <video
          src={VideoHome}
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
        ></video>

        {/* Overlay escuro + blur leve */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

        <div className="relative max-w-6xl mx-auto px-6 md:px-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-14">
            Nossas Soluções
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Card 1 */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/20 transition shadow-xl">
              <i className="fa-solid fa-gears text-4xl text-blue-400 mb-4"></i>
              <h3 className="text-2xl font-semibold mb-3">
                Sistemas Empresariais Sob Medida
              </h3>
              <p className="text-gray-200 text-sm leading-relaxed mb-4">
                Transformamos processos internos em soluções digitais inteligentes,
                capazes de automatizar tarefas, integrar setores e aumentar a produtividade.
              </p>
              <a href="#" className="text-blue-400 font-semibold hover:underline">
                Saiba mais
              </a>
            </div>

            {/* Card 2 */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/20 transition shadow-xl">
              <i className="fa-solid fa-lightbulb text-4xl text-blue-400 mb-4"></i>
              <h3 className="text-2xl font-semibold mb-3">
                Consultoria em Tecnologia e Arquitetura de Software
              </h3>
              <p className="text-gray-200 text-sm leading-relaxed mb-4">
                Planejamos soluções modernas, seguras e escaláveis para apoiar empresas
                que precisam de orientação técnica de alto nível.
              </p>
              <a href="#" className="text-blue-400 font-semibold hover:underline">
                Saiba mais
              </a>
            </div>

            {/* Card 3 */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/20 transition shadow-xl">
              <i className="fa-solid fa-object-group text-4xl text-blue-400 mb-4"></i>
              <h3 className="text-2xl font-semibold mb-3">UI/UX Design Profissional</h3>
              <p className="text-gray-200 text-sm leading-relaxed mb-4">
                Interfaces modernas, intuitivas e elegantes, criadas para proporcionar
                a melhor experiência ao usuário.
              </p>
              <a href="#" className="text-blue-400 font-semibold hover:underline">
                Saiba mais
              </a>
            </div>

            {/* Card 4 */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/20 transition shadow-xl">
              <i className="fa-solid fa-code text-4xl text-blue-400 mb-4"></i>
              <h3 className="text-2xl font-semibold mb-3">
                Desenvolvimento Web Personalizado
              </h3>
              <p className="text-gray-200 text-sm leading-relaxed mb-4">
                Criamos plataformas modernas e escaláveis com performance superior
                e foco em usabilidade.
              </p>
              <a href="#" className="text-blue-400 font-semibold hover:underline">
                Saiba mais
              </a>
            </div>

            {/* Card 5 */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/20 transition shadow-xl">
              <i className="fa-solid fa-mobile-screen-button text-4xl text-blue-400 mb-4"></i>
              <h3 className="text-2xl font-semibold mb-3">
                Aplicativos Mobile para iOS e Android
              </h3>
              <p className="text-gray-200 text-sm leading-relaxed mb-4">
                Apps nativos e híbridos com alto desempenho, fluidez e experiência impecável.
              </p>
              <a href="#" className="text-blue-400 font-semibold hover:underline">
                Saiba mais
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Por que escolher a FimbaTec */}
      <section className="relative py-24 text-white overflow-hidden bg-gray-950 bg-linear-to-br from-gray-950 to-blue-950">
        <div className="relative max-w-6xl mx-auto px-6 md:px-10 text-center">
          {/* Título */}
          <h2 className="text-4xl md:text-5xl font-bold mb-14 text-white">
            Por que escolher a FimbaTec
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Card 1 */}
            <div
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition duration-300 shadow-2xl"
            >
              <i className="fa-solid fa-laptop-code text-4xl text-cyan-400 mb-4"></i>
              <h3 className="text-2xl font-semibold mb-3 text-gray-100">WEB</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Sistemas, painéis e plataformas rápidas e estáveis.
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition duration-300 shadow-2xl"
            >
              <i className="fa-solid fa-cloud-arrow-down text-4xl text-cyan-400 mb-4"></i>
              <h3 className="text-2xl font-semibold mb-3 text-gray-100">
                APIs & Integrações IoT
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Conectamos dispositivos, sistemas e sensores em tempo real, criando integrações IoT seguras, automatizadas e inteligentes. Tudo funcionando de forma sincronizada para aumentar eficiência e reduzir custos.
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition duration-300 shadow-2xl"
            >
              <i className="fa-solid fa-mobile-screen text-4xl text-cyan-400 mb-4"></i>
              <h3 className="text-2xl font-semibold mb-3 text-gray-100">Mobile</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Apps modernos, intuitivos e eficientes.
              </p>
            </div>

            {/* Card 4 */}
            <div
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition duration-300 shadow-2xl"
            >
              <i className="fa-solid fa-user-tie text-4xl text-cyan-400 mb-4"></i>
              <h3 className="text-2xl font-semibold mb-3 text-gray-100">
                Serviço de consultoria
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Escolhas tecnológicas precisas, com orientação especializada para garantir segurança, desempenho e evolução contínua do seu projeto.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Seção Catálogo → Sistemas de Ponta */}
      <section className="relative py-24 text-white overflow-hidden bg-gray-950 bg-linear-to-br from-gray-950 to-blue-950">
        <div className="relative max-w-6xl mx-auto px-6 md:px-10 text-center">
          
          {/* Título da seção */}
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Sistemas de Ponta
          </h2>

          {/* Descrição adicional */}
          <p className="text-gray-300 max-w-3xl mx-auto mb-16 text-lg">
            Explore nosso catálogo de soluções prontas para uso e descubra como a tecnologia
            pode transformar seu negócio hoje.
          </p>

          {/* Grid de cards */}
          <div className="grid md:grid-cols-3 gap-10">
            
            {/* Card 1 */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-2xl hover:bg-white/20 transition duration-300 text-left">
              {/* Imagem */}
              <img 
                src={SistemaImg1} 
                alt="Sistema 1 - ERP" 
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <i className="fa-solid fa-server text-4xl text-cyan-400 mb-4"></i> {/* Ícone Adicionado */}
              <h3 className="text-2xl font-semibold mb-2 text-gray-100">
                Sistema 1: ERP Inteligente
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Otimize a gestão empresarial com controle financeiro, estoque e RH integrados, 
                tudo em uma plataforma robusta e escalável.
              </p>
              {/* Botão de Ação (Link) */}
              <Link 
                to="#" 
                className="text-cyan-400 font-semibold hover:underline flex items-center gap-2"
              >
                Ver detalhes 
                <i className="fa-solid fa-arrow-right text-sm"></i>
              </Link>
            </div>

            {/* Card 2 */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-2xl hover:bg-white/20 transition duration-300 text-left">
              {/* Imagem */}
              <img 
                src={SistemaImg2} 
                alt="Sistema 2 - CRM" 
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <i className="fa-solid fa-headset text-4xl text-cyan-400 mb-4"></i> {/* Ícone Adicionado */}
              <h3 className="text-2xl font-semibold mb-2 text-gray-100">
                Sistema 2: CRM Multicanal
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Gerencie o relacionamento com o cliente de forma eficaz, centralizando comunicações, 
                histórico de vendas e suporte em um só lugar.
              </p>
              {/* Botão de Ação (Link) */}
              <Link 
                to="#" 
                className="text-cyan-400 font-semibold hover:underline flex items-center gap-2"
              >
                Ver detalhes 
                <i className="fa-solid fa-arrow-right text-sm"></i>
              </Link>
            </div>

            {/* Card 3 */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-2xl hover:bg-white/20 transition duration-300 text-left">
              {/* Imagem */}
              <img 
                src={SistemaImg3} 
                alt="Sistema 3 - Analytics" 
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <i className="fa-solid fa-chart-line text-4xl text-cyan-400 mb-4"></i> {/* Ícone Adicionado */}
              <h3 className="text-2xl font-semibold mb-2 text-gray-100">
                Sistema 3: Painel de Analytics
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Obtenha *insights* valiosos do seu negócio com dashboards interativos, 
                relatórios em tempo real e visualização de dados simplificada.
              </p>
              {/* Botão de Ação (Link) */}
              <Link 
                to="#" 
                className="text-cyan-400 font-semibold hover:underline flex items-center gap-2"
              >
                Ver detalhes 
                <i className="fa-solid fa-arrow-right text-sm"></i>
              </Link>
            </div>

          </div>
          
          <div className="mt-16">
            <Link
              to="/catalogo"
              className="bg-blue-600 px-8 py-4 rounded-lg text-white-950 font-bold text-lg hover:bg-blue-700 transition shadow-xl"
            >
              <i className="fa-solid fa-book-open mr-3"></i>
              Ver Catálogo Completo
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
