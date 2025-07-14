// src/components/Hero.tsx

export function Hero() {
  return (
    <section className="flex h-screen flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-7xl">
        Rodrigo Ramos
      </h1>
      <h2 className="mt-4 text-2xl text-blue-400 sm:text-4xl">
        Desenvolvedor Criativo de Soluções Web e Mobile
      </h2>
      <p className="mt-6 max-w-2xl text-lg text-gray-300">
        Especialista em React, Next.js e React Native, transformando ideias em código robusto e interfaces incríveis.
      </p>
      <div className="mt-8 flex gap-4">
        <a
          href="#projects"
          className="rounded-md bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Meus Projetos
        </a>
        <a
          href="#contact"
          className="rounded-md border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-black"
        >
          Contato
        </a>
      </div>
    </section>
  );
}