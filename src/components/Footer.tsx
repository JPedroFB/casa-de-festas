"use client";

import ContactSection from "./ContactSection";

export default function Footer() {
  return (
    <footer className="w-full bg-indigo-950 text-white">
      <ContactSection />
      <div className="w-full sm:container mx-auto text-center  py-10 px-2.5 sm:px-0  border-t border-indigo-800">
        <p>
          &copy; {new Date().getFullYear()} Casa de Festas - Todos os direitos
          reservados
        </p>
      </div>
    </footer>
  );
}
