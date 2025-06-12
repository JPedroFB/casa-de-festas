"use client";

import { Henny_Penny } from "next/font/google";

const hennyPenny = Henny_Penny({
  weight: "400",
  subsets: ["latin"],
});

export default function ContactSection() {
  return (
    <section id="contato" className="w-full bg-indigo-950 text-white py-16">
      <div className="w-full sm:container mx-auto px-2.5 sm:px-4 sm:w-[90%] max-w-[1920px]">
        <h2 className="text-4xl font-bold text-center mb-8">
          <span className={hennyPenny.className}>Entre em Contato</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-indigo-900/50 p-6 rounded-xl flex flex-col space-y-6">
            <h3 className="text-2xl font-semibold">Fale Conosco</h3>
            <div className="flex flex-col space-y-4">
              <a
                href="https://wa.me/5521964492447"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 px-4 py-3 bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22.5c-1.725 0-3.35-.405-4.8-1.125l-5.25 1.35 1.35-5.25a10.452 10.452 0 01-1.125-4.8c0-5.79 4.71-10.5 10.5-10.5s10.5 4.71 10.5 10.5-4.71 10.5-10.5 10.5z" fillRule="nonzero"/>
                </svg>
                <span>WhatsApp: (21) 96449-2447</span>
              </a>

              <a
                href="tel:+552135590805"
                className="flex items-center space-x-3 px-4 py-3 bg-indigo-700 hover:bg-indigo-800 rounded-lg transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3.654 1.328a1 1 0 00-1.197.52l-1.5 3a1 1 0 00.23 1.173l3 3a1 1 0 001.173.23l2.2-.916a.25.25 0 01.257.063l2.472 2.472a.25.25 0 01.063.257l-.916 2.2a1 1 0 00.23 1.173l3 3a1 1 0 001.173.23l3-1.5a1 1 0 00.52-1.197l-1.04-4.158a1 1 0 00-.262-.463L8.49 1.59a1 1 0 00-.463-.262L3.87.288a1 1 0 00-.216-.047z" />
                </svg>
                <span>Telefone: (21) 3559-0805</span>
              </a>

              <a
                href="https://instagram.com/mansaodossonhos"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-lg transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
                <span>@mansaodossonhos</span>
              </a>

              <a
                href="https://facebook.com/mansaodossonhos"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 px-4 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Facebook</span>
              </a>

              <a
                href="mailto:contato@mansaodossonhos.com.br"
                className="flex items-center space-x-3 px-4 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>contato@mansaodossonhos.com.br</span>
              </a>
            </div>
          </div>

          <div className="bg-indigo-900/50 p-6 rounded-xl">
            <h3 className="text-2xl font-semibold mb-4">Nossa Localização</h3>
            <address className="not-italic mb-6">
              <p className="text-lg mb-1">Rua Itabaiana, 244</p>
              <p className="text-lg mb-1">Grajaú - Rio de Janeiro/RJ</p>
            </address>

            <div className="w-full h-64 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps?q=Rua+Itabaiana+244,+Graja%C3%BA+RJ&output=embed"
                className="w-full h-full border-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Mansão dos Sonhos"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
