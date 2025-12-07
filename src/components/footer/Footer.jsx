import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white border-t border-cyan-400/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
          <div>
            <h3 className="text-lg font-bold mb-5 text-white border-b border-cyan-400/50 pb-2">
              <i className="fa-solid fa-phone-volume mr-2 text-cyan-400"></i>
              Contato
            </h3>
            <address className="not-italic space-y-2 text-gray-400">
              <p className="font-semibold text-gray-200">
                Centralidade do Kilamba
              </p>
              <p>Quarteirão F, edifício F27, apartamento 91</p>
              <p>
                <a
                  href="mailto:geral@fimbatec.com"
                  className="hover:text-cyan-400 transition"
                >
                  geral@fimbatec.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+244927108033"
                  className="hover:text-cyan-400 transition"
                >
                  (244) 927 108 033
                </a>
              </p>
            </address>
            <div className="mt-6">
              <Link
                to="#orcamento"
                className="inline-block bg-blue-600 px-5 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 transition text-center cursor-pointer"
              >
                <i className="fa-solid fa-file-invoice-dollar mr-2"></i>
                Peça um orçamento
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-5 text-white border-b border-cyan-400/50 pb-2">
              <i className="fa-solid fa-list mr-2 text-cyan-400"></i>
              Menu
            </h3>
            <div className="flex flex-col space-y-2">
              <Link
                to="/"
                className="text-gray-400 hover:text-cyan-400 transition"
              >
                Home
              </Link>

              <Link
                to="/sobre"
                className="text-gray-400 hover:text-cyan-400 transition"
              >
                Sobre
              </Link>

              <Link
                to="/servicos"
                className="text-gray-400 hover:text-cyan-400 transition"
              >
                Serviços
              </Link>

              <Link
                href="#tecnologia"
                className="text-gray-400 hover:text-cyan-400 transition"
              >
                Tecnologia
              </Link>

              <Link
                to="#recursos"
                className="text-gray-400 hover:text-cyan-400 transition"
              >
                Recursos
              </Link>

              <Link
                to="#contato"
                className="text-gray-400 hover:text-cyan-400 transition"
              >
                Contato
              </Link>

              <Link
                to="#faq"
                className="text-gray-400 hover:text-cyan-400 transition"
              >
                FAQ
              </Link>
            </div>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-5 text-white border-b border-cyan-400/50 pb-2">
              <i className="fa-solid fa-envelope-open-text mr-2 text-cyan-400"></i>
              Mantenha-se Informado
            </h3>
            <p className="text-gray-400 mb-4">
              Receba insights sobre tecnologia, inovações e ofertas exclusivas
              da FimbaTec.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col space-y-3"
            >
              <input
                type="email"
                placeholder="Seu Email"
                className="p-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:ring-cyan-400 focus:border-cyan-400 transition"
                aria-label="Email para Newsletter"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 text-center cursor-pointer px-5 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 transition cursoor-pointer"
              >
                Enviar
              </button>
            </form>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-5 text-white border-b border-cyan-400/50 pb-2">
              <i className="fa-solid fa-share-nodes mr-2 text-cyan-400"></i>
              Siga-nos
            </h3>
            <div className="flex space-x-4 text-2xl">
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-400 hover:text-cyan-400 transition"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-cyan-400 transition"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-gray-400 hover:text-cyan-400 transition"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cyan-400/10 text-center md:text-left text-xs text-gray-500">
          <div className="md:flex justify-between items-center">
            <p className="mb-2 md:mb-0">
              &copy; 2025 FimbaTec. Todos os direitos reservados.
            </p>
            <div className="space-x-4">
              <Link
                to="/politica-de-privacidade"
                className="hover:text-cyan-400 transition"
              >
                Política de Privacidade
              </Link>
              <Link
                to="/politica-de-cookies"
                className="hover:text-cyan-400 transition"
              >
                Política de Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
