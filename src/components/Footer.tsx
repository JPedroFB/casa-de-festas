"use client";

export default function Footer() {
  return (
    <footer className="w-full bg-indigo-950 text-white py-10 border-t border-indigo-800">
      <div className="w-full sm:container mx-auto text-center px-2.5 sm:px-0">
        <p>&copy; {new Date().getFullYear()} Casa de Festas - Todos os direitos reservados</p>
      </div>
    </footer>
  );
}
