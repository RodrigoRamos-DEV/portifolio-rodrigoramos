// src/components/Footer.tsx

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800 py-6 text-center text-gray-400">
      <p>
        &copy; {currentYear} Rodrigo Ramos. Todos os direitos reservados.
      </p>
      <p className="mt-2 text-sm">
        Desenvolvido com Next.js, TypeScript e Tailwind CSS.
      </p>
    </footer>
  );
}