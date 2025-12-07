import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import HeroImg from "../../assets/img/home.jpg";
import VideoHome from "../../assets/video/video.mp4";
import SistemaImg1 from "../../assets/img/home1.jpg";
import SistemaImg2 from "../../assets/img/home2.jpg";
import SistemaImg3 from "../../assets/img/home3.jpg";
import DepoimentoImg1 from "../../assets/img/review1.jpeg";
import DepoimentoImg2 from "../../assets/img/review2.jpg";
import DepoimentoImg3 from "../../assets/img/review1.jpeg";

// Array de dados para o carrossel usando ÍCONES Font Awesome
const clientIcons = [
  { id: 1, iconClass: "fa-apple", alt: "Logo Apple" },
  { id: 2, iconClass: "fa-google", alt: "Logo Google" },
  { id: 3, iconClass: "fa-microsoft", alt: "Logo Microsoft" },
  { id: 4, iconClass: "fa-amazon", alt: "Logo Amazon" },
  { id: 5, iconClass: "fa-facebook", alt: "Logo Facebook" },
  { id: 6, iconClass: "fa-twitter", alt: "Logo X (Twitter)" },
  { id: 7, iconClass: "fa-linkedin", alt: "Logo LinkedIn" },
  { id: 8, iconClass: "fa-github", alt: "Logo GitHub" },
  { id: 9, iconClass: "fa-figma", alt: "Logo Figma" },
  { id: 10, iconClass: "fa-slack", alt: "Logo Slack" },
  { id: 11, iconClass: "fa-vuejs", alt: "Logo Vue.js" },
  { id: 12, iconClass: "fa-react", alt: "Logo React" },
];

//Dados do FAQ
const faqData = [
  {
    id: 1,
    question: "Quais tecnologias a FimbaTec utiliza no desenvolvimento?",
    answer:
      "Somos agnósticos, mas priorizamos tecnologias modernas e escaláveis. Usamos JavaScript (React, Node.js), Python, Cloud Computing (AWS/GCP), Docker e arquiteturas de Microsserviços para garantir desempenho e longevidade.",
  },
  {
    id: 2,
    question: "Qual o processo de desenvolvimento de um projeto sob medida?",
    answer:
      "Nosso processo começa com a Descoberta (briefing detalhado e escopo), seguido por Design (UI/UX e prototipagem), Desenvolvimento Ágil (sprints com entregas contínuas), Testes e, finalmente, Lançamento e Suporte.",
  },
  {
    id: 3,
    question: "A FimbaTec oferece suporte após a entrega do projeto?",
    answer:
      "Sim! Oferecemos planos de suporte e manutenção personalizados. Isso inclui correções de bugs, atualizações de segurança e melhorias contínuas para garantir que sua solução opere com eficiência máxima.",
  },
  {
    id: 4,
    question: "Quanto tempo leva para desenvolver um sistema?",
    answer:
      "O tempo de desenvolvimento varia muito dependendo da complexidade e do escopo. Um projeto médio pode levar de 3 a 6 meses. Após a fase de Descoberta, fornecemos um cronograma detalhado e realista.",
  },
];

export default function Home() {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (id) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  return (
    <>
      <title>FimbaTec</title>
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
            Soluções digitais sob medida para impulsionar negócios. Do conceito
            ao código final, entregamos tecnologia moderna, eficiente e
            escalável.
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
      {/* Nossas Soluções */}
      <section className="relative py-24 text-white overflow-hidden">
        <video
          src={VideoHome}
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
        ></video>

        {/* Overlay escuro */}
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
                Transformamos processos internos em soluções digitais
                inteligentes, capazes de automatizar tarefas, integrar setores e
                aumentar a produtividade.
              </p>
              <a
                href="#"
                className="text-blue-400 font-semibold hover:underline"
              >
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
                Planejamos soluções modernas, seguras e escaláveis para apoiar
                empresas que precisam de orientação técnica de alto nível.
              </p>
              <a
                href="#"
                className="text-blue-400 font-semibold hover:underline"
              >
                Saiba mais
              </a>
            </div>

            {/* Card 3 */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/20 transition shadow-xl">
              <i className="fa-solid fa-object-group text-4xl text-blue-400 mb-4"></i>
              <h3 className="text-2xl font-semibold mb-3">
                UI/UX Design Profissional
              </h3>
              <p className="text-gray-200 text-sm leading-relaxed mb-4">
                Interfaces modernas, intuitivas e elegantes, criadas para
                proporcionar a melhor experiência ao usuário.
              </p>
              <a
                href="#"
                className="text-blue-400 font-semibold hover:underline"
              >
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
                Criamos plataformas modernas e escaláveis com performance
                superior e foco em usabilidade.
              </p>
              <a
                href="#"
                className="text-blue-400 font-semibold hover:underline"
              >
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
                Apps nativos e híbridos com alto desempenho, fluidez e
                experiência impecável.
              </p>
              <a
                href="#"
                className="text-blue-400 font-semibold hover:underline"
              >
                Saiba mais
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Por que escolher a FimbaTec */}
      <section className="relative py-24 text-white overflow-hidden bg-gray-950 bg-linear-to-br from-gray-950 to-blue-950">
        <div className="relative max-w-6xl mx-auto px-6 md:px-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-14 text-white">
            Por que escolher a FimbaTec
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition duration-300 shadow-2xl">
              <i className="fa-solid fa-laptop-code text-4xl text-cyan-400 mb-4"></i>
              <h3 className="text-2xl font-semibold mb-3 text-gray-100">WEB</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Sistemas, painéis e plataformas rápidas e estáveis.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition duration-300 shadow-2xl">
              <i className="fa-solid fa-cloud-arrow-down text-4xl text-cyan-400 mb-4"></i>
              <h3 className="text-2xl font-semibold mb-3 text-gray-100">
                APIs & Integrações IoT
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Conectamos dispositivos, sistemas e sensores em tempo real,
                criando integrações IoT seguras, automatizadas e inteligentes.
                Tudo funcionando de forma sincronizada para aumentar eficiência
                e reduzir custos.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition duration-300 shadow-2xl">
              <i className="fa-solid fa-mobile-screen text-4xl text-cyan-400 mb-4"></i>
              <h3 className="text-2xl font-semibold mb-3 text-gray-100">
                Mobile
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Apps modernos, intuitivos e eficientes.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition duration-300 shadow-2xl">
              <i className="fa-solid fa-user-tie text-4xl text-cyan-400 mb-4"></i>
              <h3 className="text-2xl font-semibold mb-3 text-gray-100">
                Serviço de consultoria
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Escolhas tecnológicas precisas, com orientação especializada
                para garantir segurança, desempenho e evolução contínua do seu
                projeto.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Seção Catálogo */}
      <section className="relative py-24 text-white overflow-hidden bg-gray-950 bg-linear-to-br from-gray-950 to-blue-950">
        <div className="relative max-w-6xl mx-auto px-6 md:px-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Sistemas de Ponta
          </h2>

          <p className="text-gray-300 max-w-3xl mx-auto mb-16 text-lg">
            Explore nosso catálogo de soluções prontas para uso e descubra como
            a tecnologia pode transformar seu negócio hoje.
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
              <i className="fa-solid fa-server text-4xl text-cyan-400 mb-4"></i>{" "}
              {/* Ícone Adicionado */}
              <h3 className="text-2xl font-semibold mb-2 text-gray-100">
                Sistema 1: ERP Inteligente
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Otimize a gestão empresarial com controle financeiro, estoque e
                RH integrados, tudo em uma plataforma robusta e escalável.
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
              <i className="fa-solid fa-headset text-4xl text-cyan-400 mb-4"></i>{" "}
              {/* Ícone Adicionado */}
              <h3 className="text-2xl font-semibold mb-2 text-gray-100">
                Sistema 2: CRM Multicanal
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Gerencie o relacionamento com o cliente de forma eficaz,
                centralizando comunicações, histórico de vendas e suporte em um
                só lugar.
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
              <i className="fa-solid fa-chart-line text-4xl text-cyan-400 mb-4"></i>{" "}
              {/* Ícone Adicionado */}
              <h3 className="text-2xl font-semibold mb-2 text-gray-100">
                Sistema 3: Painel de Analytics
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Obtenha *insights* valiosos do seu negócio com dashboards
                interativos, relatórios em tempo real e visualização de dados
                simplificada.
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
      {/* Depoimentos */}     
      <section className="relative py-24 text-white overflow-hidden bg-gray-950">
        <div className="relative max-w-6xl mx-auto px-6 md:px-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            O que dizem nossos Clientes          
          </h2>
                   
          <p className="text-gray-300 max-w-3xl mx-auto mb-16 text-lg">
            A satisfação de quem confia na FimbaTec para impulsionar seus
            negócios.          
          </p>
          {/* Grid de Depoimentos */}         
          <div className="grid md:grid-cols-3 gap-8">
            {/* Depoimento 1 */}         
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl hover:bg-white/10 transition duration-300 text-left flex flex-col items-start">
              <i className="fa-solid fa-quote-left text-3xl text-cyan-400 mb-4"></i>
              <p className="text-gray-300 text-base italic leading-relaxed mb-6 grow">
                "O sistema que a FimbaTec desenvolve transformou nossa operação.
                A integração                 de processos reduziu erros e nos
                deu uma visão clara do negócio. Profissionais extremamente
                competentes!"        
              </p>
              {/* Informações do Cliente */}             
              <div className="flex items-center mt-auto">       
                <img
                  src={DepoimentoImg1}
                  alt="Cliente 1"
                  className="w-12 h-12 object-cover rounded-full mr-4 border-2 border-cyan-400"
                />
                               
                <div>
                                 
                  <h4 className="font-semibold text-gray-100">
                    Ana Clara Souza
                  </h4>
                                   
                  <p className="text-sm text-gray-400">
                    CEO, TechInov Soluções
                  </p>
                               
                </div>
                             
              </div>
                         
            </div>
            {/* Depoimento 2 */}           
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl hover:bg-white/10 transition duration-300 text-left flex flex-col items-start">
                           
              <i className="fa-solid fa-quote-left text-3xl text-cyan-400 mb-4"></i>
                           
              <p className="text-gray-300 text-base italic leading-relaxed mb-6 grow">
                                "Contratamos a consultoria para refatorar nossa
                arquitetura, e o resultado                 foi *impecável*.
                Ganho de performance e escalabilidade que não imaginávamos.    
                            O time é muito profissional e entende profundamente
                de tecnologia."              
              </p>
                            {/* Informações do Cliente */}             
              <div className="flex items-center mt-auto">
                               
                <img
                  src={DepoimentoImg2}
                  alt="Cliente 2"
                  className="w-12 h-12 object-cover rounded-full mr-4 border-2 border-cyan-400"
                />
                               
                <div>
                                 
                  <h4 className="font-semibold text-gray-100">
                    Roberta Mendes
                  </h4>
                                   
                  <p className="text-sm text-gray-400">
                    Diretor de TI, Global Data Corp
                  </p>
                                 
                </div>
                             
              </div>
                         
            </div>
                        {/* Depoimento 3 */}           
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl hover:bg-white/10 transition duration-300 text-left flex flex-col items-start">
                           
              <i className="fa-solid fa-quote-left text-3xl text-cyan-400 mb-4"></i>
                           
              <p className="text-gray-300 text-base italic leading-relaxed mb-6 grow">
                                "O App mobile superou todas as expectativas.
                Fluido, com design moderno e                 totalmente adaptado
                às nossas necessidades. A atenção aos detalhes do UX/UI        
                        foi o diferencial para a satisfação de nossos usuários."
                             
              </p>
                            {/* Informações do Cliente */}           
              <div className="flex items-center mt-auto">
                               
                <img
                  src={DepoimentoImg3}
                  alt="Cliente 3"
                  className="w-12 h-12 object-cover rounded-full mr-4 border-2 border-cyan-400"
                />
                               
                <div>
                                   
                  <h4 className="font-semibold text-gray-100">Fernanda Lima</h4>
                                   
                  <p className="text-sm text-gray-400">
                    Gerente de Produto, ConnectApp
                  </p>
                               
                </div>
                             
              </div>
                         
            </div>
                     
          </div>
                 
        </div>
             
      </section>
      {/* Possibilidades Infinitas */}     
      <section className="relative py-24 text-white overflow-hidden bg-blue-900/10">
                {/* Fundo com gradiente sutil */}       
        <div className="absolute inset-0 bg-linear-to-br from-blue-950 to-gray-900 opacity-95"></div>
               
        <div className="relative max-w-6xl mx-auto px-6 md:px-10 text-center">
                             
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-cyan-400 drop-shadow-lg">
                        Possibilidades Infinitas          
          </h2>
                   
          <p className="text-gray-200 max-w-4xl mx-auto mb-16 text-xl">
                        Vamos além do código. Utilizamos tecnologia disruptiva
            para construir a próxima             geração de sistemas e soluções,
            garantindo que seu negócio esteja sempre um passo à frente.        
             
          </p>
                    {/* Grid de Tendências */}         
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                                    {/* Card 1: IA/ML */}           
            <div className="bg-white/5 border border-cyan-400/20 rounded-2xl p-6 shadow-2xl hover:bg-white/10 transition duration-300">
                           
              <i className="fa-solid fa-brain text-4xl text-cyan-400 mb-4"></i> 
                         
              <h3 className="text-xl font-semibold mb-3 text-gray-100">
                                Inteligência Artificial & ML              
              </h3>
                           
              <p className="text-gray-300 text-sm leading-relaxed">
                                Criamos algoritmos de IA para automação de
                decisões, análise preditiva e personalização de experiências em
                tempo real.              
              </p>
                         
            </div>
                        {/* Card 2: Cloud Nativa */}           
            <div className="bg-white/5 border border-cyan-400/20 rounded-2xl p-6 shadow-2xl hover:bg-white/10 transition duration-300">
                           
              <i className="fa-solid fa-cloud text-4xl text-cyan-400 mb-4"></i> 
                         
              <h3 className="text-xl font-semibold mb-3 text-gray-100">
                                Infraestrutura Cloud Nativa              
              </h3>
                           
              <p className="text-gray-300 text-sm leading-relaxed">
                                Desenvolvemos arquiteturas resilientes e
                otimizadas na Nuvem, prontas para suportar picos e crescimento
                global.              
              </p>
                         
            </div>
                        {/* Card 3: Web3/Blockchain */}           
            <div className="bg-white/5 border border-cyan-400/20 rounded-2xl p-6 shadow-2xl hover:bg-white/10 transition duration-300">
                           
              <i className="fa-solid fa-cubes text-4xl text-cyan-400 mb-4"></i> 
                         
              <h3 className="text-xl font-semibold mb-3 text-gray-100">
                                Web3 e Descentralização              
              </h3>
                           
              <p className="text-gray-300 text-sm leading-relaxed">
                                Exploramos a descentralização para criar
                plataformas seguras, transparentes e imutáveis, construindo o
                futuro digital.              
              </p>
                         
            </div>
                                    {/* Card 4: IoT */}           
            <div className="bg-white/5 border border-cyan-400/20 rounded-2xl p-6 shadow-2xl hover:bg-white/10 transition duration-300">
                           
              <i className="fa-solid fa-microchip text-4xl text-cyan-400 mb-4"></i>
                           
              <h3 className="text-xl font-semibold mb-3 text-gray-100">
                                IoT e Automação Inteligente              
              </h3>
                           
              <p className="text-gray-300 text-sm leading-relaxed">
                                Conectamos dispositivos e dados em ecossistemas
                inteligentes para otimizar operações, logística e eficiência em
                campo.              
              </p>
                       
            </div>
                     
          </div>
                              {/* Call to Action */}         
          <div className="mt-20">
                       
            <Link
              to="/contato"
              className="bg-blue-600 px-10 py-4 rounded-lg text-white-950 font-bold text-xl hover:bg-blue-700 transition shadow-2xl hover:shadow-blue-400/50"
            >
                            <i className="fa-solid fa-rocket mr-3"></i>         
                  Inicie Sua Transformação Digital          
            </Link>
                   
          </div>
                 
        </div>
             
      </section>
      {/* Nossos Clientes */}
      <section className="py-16 bg-gray-950 text-center">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Parceiros de Confiança
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12">
            Empresas líderes em seus segmentos que confiam na FimbaTec para
            impulsionar sua inovação e crescimento.
          </p>

          {/* Configuração do Swiper */}
          <Swiper
            modules={[Autoplay]}
            breakpoints={{
              0: {
                slidesPerView: 3, // 3 ícones no telefone
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 4, // 4 ícones no tablet
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 6, // 6 ícones no desktop
                spaceBetween: 50,
              },
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            speed={800}
            className="client-logo-swiper w-full"
          >
            {clientIcons.map((item) => (
              <SwiperSlide
                key={item.id}
                className="flex items-center justify-center py-4"
              >
                <i
                  className={`fab ${item.iconClass} text-5xl md:text-6xl text-gray-400 hover:text-blue-400 transition-colors duration-300`}
                  aria-label={item.alt}
                ></i>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      {/* Seção FAQ */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            Perguntas Frequentes (FAQ)
          </h2>

          <div className="space-y-4">
            {faqData.map((item) => (
              <div
                key={item.id}
                className="bg-white/5 border border-white/10 rounded-xl shadow-lg transition duration-300"
              >
                {/* Cabeçalho da Pergunta (Botão) */}
                <button
                  className="w-full text-left p-5 flex justify-between items-center focus:outline-none"
                  onClick={() => toggleQuestion(item.id)}
                  aria-expanded={openQuestion === item.id}
                  aria-controls={`faq-answer-${item.id}`}
                >
                  <span className="text-lg font-semibold text-gray-100 hover:text-cyan-400 transition-colors">
                    {item.question}
                  </span>
                  <i
                    className={`fa-solid ${
                      openQuestion === item.id ? "fa-minus" : "fa-plus"
                    } text-cyan-400 text-xl transition-transform duration-300 transform ${
                      openQuestion === item.id ? "rotate-180" : "rotate-0"
                    }`}
                  ></i>
                </button>

                {/* Conteúdo da Resposta */}
                <div
                  id={`faq-answer-${item.id}`}
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openQuestion === item.id
                      ? "max-h-96 opacity-100 p-5 pt-0"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-300 border-t border-white/10 pt-4">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-lg text-gray-300 mb-6">
              Ainda tem dúvidas? Fale diretamente com nossa equipe técnica!
            </p>
            <Link
              to="/contato"
              className="bg-blue-600 px-8 py-3 rounded-lg text-white-950 font-bold text-lg hover:bg-blue-700 transition shadow-xl"
            >
              <i className="fa-solid fa-comments mr-3"></i>
              Falar com Consultor
            </Link>
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </>
  );
}
