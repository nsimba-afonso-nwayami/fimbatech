import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import HeroTechImg from "../../assets/img/hero-tech.jpg";

export default function Tecnologia() {
  return (
    <>
      <title>Tecnologia | FimbaTec</title>

      {/*Header*/}
      <Header />

      <section
        className="py-20 md:py-32 text-center relative overflow-hidden pt-40 bg-gray-950 text-white"
        style={{
          backgroundImage: `url(${HeroTechImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-blue-950/70 backdrop-blur-sm"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
            Tecnologia que Impulsiona Resultados
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 font-light">
            Dominamos as ferramentas mais inovadoras para garantir software
            escalável e robusto.
          </p>
        </div>
      </section>

      <section className="py-24 bg-gray-950 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Nossa Stack Principal
          </h2>

          <div className="grid lg:grid-cols-3 gap-10">
            <div className="bg-gray-900 p-8 rounded-xl shadow-xl border-b-4 border-blue-500">
              <h3 className="text-3xl font-bold mb-6 flex items-center text-blue-400">
                <i className="fa-solid fa-desktop mr-3"></i>
                Frontend
              </h3>
              <p className="text-gray-400 mb-6">
                Construímos interfaces rápidas, responsivas e intuitivas focadas
                na experiência do usuário.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="p-3 bg-gray-950 rounded-lg text-center border border-gray-700">
                  <i className="fa-brands fa-react text-4xl text-cyan-400"></i>
                  <p className="text-xs mt-1">React</p>
                </div>
                <div className="p-3 bg-gray-950 rounded-lg text-center border border-gray-700">
                  <i className="fa-brands fa-vuejs text-4xl text-green-500"></i>
                  <p className="text-xs mt-1">Vue.js</p>
                </div>
                <div className="p-3 bg-gray-950 rounded-lg text-center border border-gray-700">
                  <i className="fa-brands fa-js-square text-4xl text-yellow-500"></i>
                  <p className="text-xs mt-1">JavaScript</p>
                </div>
                <div className="p-3 bg-gray-950 rounded-lg text-center border border-gray-700">
                  <i className="fa-brands fa-html5 text-4xl text-orange-500"></i>
                  <p className="text-xs mt-1">HTML5</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-8 rounded-xl shadow-xl border-b-4 border-green-500">
              <h3 className="text-3xl font-bold mb-6 flex items-center text-green-400">
                <i className="fa-solid fa-server mr-3"></i>
                Backend & APIs
              </h3>
              <p className="text-gray-400 mb-6">
                Desenvolvemos APIs robustas, seguras e de alta performance para
                gerenciar dados e lógica de negócios.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="p-3 bg-gray-950 rounded-lg text-center border border-gray-700">
                  <i className="fa-brands fa-node-js text-4xl text-lime-500"></i>
                  <p className="text-xs mt-1">Node.js</p>
                </div>
                <div className="p-3 bg-gray-950 rounded-lg text-center border border-gray-700">
                  <i className="fa-solid fa-database text-4xl text-red-500"></i>
                  <p className="text-xs mt-1">Django/Python</p>
                </div>
                <div className="p-3 bg-gray-950 rounded-lg text-center border border-gray-700">
                  <i className="fa-brands fa-php text-4xl text-purple-500"></i>
                  <p className="text-xs mt-1">PHP/Laravel</p>
                </div>
                <div className="p-3 bg-gray-950 rounded-lg text-center border border-gray-700">
                  <i className="fa-brands fa-docker text-4xl text-blue-500"></i>
                  <p className="text-xs mt-1">GoLang</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-8 rounded-xl shadow-xl border-b-4 border-yellow-500">
              <h3 className="text-3xl font-bold mb-6 flex items-center text-yellow-400">
                <i className="fa-solid fa-database mr-3"></i>
                Banco de Dados
              </h3>
              <p className="text-gray-400 mb-6">
                Escolhemos e otimizamos o banco de dados ideal para a escala e
                tipo de dados do seu projeto.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="p-3 bg-gray-950 rounded-lg text-center border border-gray-700">
                  <i className="fa-solid fa-code-branch text-4xl text-orange-600"></i>
                  <p className="text-xs mt-1">PostgreSQL</p>
                </div>
                <div className="p-3 bg-gray-950 rounded-lg text-center border border-gray-700">
                  <i className="fa-solid fa-server text-4xl text-red-600"></i>
                  <p className="text-xs mt-1">MongoDB</p>
                </div>
                <div className="p-3 bg-gray-950 rounded-lg text-center border border-gray-700">
                  <i className="fa-solid fa-table text-4xl text-blue-600"></i>
                  <p className="text-xs mt-1">MySQL</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Infraestrutura, Mobile e Ferramentas
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-gray-950 p-8 rounded-xl shadow-xl border-l-4 border-cyan-400">
              <h3 className="text-3xl font-bold mb-6 flex items-center text-cyan-400">
                <i className="fa-solid fa-layer-group mr-3"></i>
                Cloud e DevOps
              </h3>
              <p className="text-gray-400 mb-6">
                Garantimos deployments rápidos, automação e monitoramento
                contínuo em ambientes de nuvem líderes.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="p-3 bg-gray-800 rounded-lg text-center border border-gray-700">
                  <i className="fa-brands fa-aws text-4xl text-orange-400"></i>
                  <p className="text-xs mt-1">AWS</p>
                </div>
                <div className="p-3 bg-gray-800 rounded-lg text-center border border-gray-700">
                  <i className="fa-brands fa-github-alt text-4xl text-white"></i>
                  <p className="text-xs mt-1">GitHub Actions</p>
                </div>
                <div className="p-3 bg-gray-800 rounded-lg text-center border border-gray-700">
                  <i className="fa-brands fa-jenkins text-4xl text-red-700"></i>
                  <p className="text-xs mt-1">Kubernetes</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-950 p-8 rounded-xl shadow-xl border-l-4 border-purple-400">
              <h3 className="text-3xl font-bold mb-6 flex items-center text-purple-400">
                <i className="fa-solid fa-mobile-screen mr-3"></i>
                Mobile e Ferramentas
              </h3>
              <p className="text-gray-400 mb-6">
                Utilizamos frameworks de desenvolvimento híbrido para máxima
                eficiência e cobertura iOS/Android.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="p-3 bg-gray-800 rounded-lg text-center border border-gray-700">
                  <i className="fa-solid fa-code text-4xl text-blue-500"></i>
                  <p className="text-xs mt-1">React Native</p>
                </div>
                <div className="p-3 bg-gray-800 rounded-lg text-center border border-gray-700">
                  <i className="fa-brands fa-figma text-4xl text-red-500"></i>
                  <p className="text-xs mt-1">Figma (UI/UX)</p>
                </div>
                <div className="p-3 bg-gray-800 rounded-lg text-center border border-gray-700">
                  <i className="fa-solid fa-check text-4xl text-green-500"></i>
                  <p className="text-xs mt-1">Testing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Footer*/}
      <Footer />
    </>
  );
}
