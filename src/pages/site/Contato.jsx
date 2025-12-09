import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import HeroContatoImg from "../../assets/img/hero-contato.jpg";

export default function Contato() {
  return (
    <>
      <title>Contato | FimbaTec</title>

      {/*Header*/}
      <Header />

      <section
        className="py-20 md:py-32 text-center relative overflow-hidden pt-40 bg-gray-950 text-white"
        style={{
          backgroundImage: `url(${HeroContatoImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-blue-950/70 backdrop-blur-sm"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
            Pronto para Inovar?
          </h1>
          <p className="text-xl md:text-2xl text-blue-400 font-light">
            Deixe-nos saber como podemos ajudar a sua empresa a crescer.
          </p>
        </div>
      </section>

      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Fale com Nosso Time
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-950 p-8 rounded-xl shadow-2xl border-t-4 border-blue-400">
              <h3 className="text-2xl font-bold mb-6 text-white">
                Envie sua Mensagem
              </h3>

              <form action="#" method="POST" className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-400 transition"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-400 transition"
                    placeholder="seu.email@empresa.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Telefone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-400 transition"
                    placeholder="+244 9XX XXX YYY"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Mensagem (Ou Detalhes do Projeto)
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows="5"
                    required
                    className="w-full px-4 py-3 resize-none bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-400 transition"
                    placeholder="Descreva sua necessidade ou solicitação."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full cursor-pointer bg-blue-600 px-6 py-3 rounded-lg text-white-950 font-bold text-lg hover:bg-blue-700 transition flex items-center justify-center shadow-md"
                >
                  <i className="fa-solid fa-paper-plane mr-3"></i>
                  Enviar Solicitação
                </button>
              </form>
            </div>

            <div className="space-y-12">
              <div className="bg-gray-950 p-8 rounded-xl shadow-xl border-l-4 border-blue-400">
                <h3 className="text-2xl font-bold mb-6 text-blue-400">
                  Informações Rápidas
                </h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-center">
                    <i className="fa-solid fa-phone text-xl text-cyan-400 mr-4"></i>
                    <a
                      href="tel:+244927108033"
                      className="hover:text-cyan-400 transition"
                    >
                      +244 927 108 033
                    </a>
                  </li>
                  <li className="flex items-center">
                    <i className="fa-solid fa-envelope text-xl text-cyan-400 mr-4"></i>
                    <a
                      href="mailto:geral@fimbatec.com"
                      className="hover:text-cyan-400 transition"
                    >
                      geral@fimbatec.com
                    </a>
                  </li>
                  <li className="flex items-start">
                    <i className="fa-solid fa-map-marker-alt text-xl text-cyan-400 mr-4 mt-1"></i>
                    <p>Quarteirão F, edifício F27, apartamento 91</p>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-950 p-8 rounded-xl shadow-xl border-l-4 border-blue-400">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">
                  Horário de Atendimento
                </h3>
                <p className="text-gray-300 mb-4">
                  Estamos disponíveis para atendê-lo nos seguintes horários:
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex justify-between">
                    <span className="font-semibold">Segunda a Sexta:</span>
                    <span>8:00 - 17:00</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-950">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">
            Onde nos Encontrar
          </h2>
          <div className="rounded-xl overflow-hidden shadow-2xl h-96 border border-gray-700">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7881.470445842704!2d13.264737137873045!3d-8.996493817362238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sQuarteir%C3%A3o%20F%2C%20edif%C3%ADcio%20F27%2C%20apartamento%2091!5e0!3m2!1spt-PT!2sao!4v1765130603367!5m2!1spt-PT!2sao"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da FimbaTec"
            ></iframe>
          </div>
        </div>
      </section>

      {/*Footer*/}
      <Footer />
    </>
  );
}
