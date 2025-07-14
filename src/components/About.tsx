// src/components/About.tsx

export function About() {
  const skills = [
    'HTML5',
    'CSS3',
    'JavaScript (ES6+)',
    'TypeScript',
    'React',
    'Next.js',
    'React Native',
    'Node.js',
    'Tailwind CSS',
    'PostgreSQL',
    'Git & GitHub',
  ];

  return (
    // Adicionamos o id="about" para futura navegação
    <section id="about" className="px-4 py-16 sm:px-8 md:px-16 lg:py-24">
      <h2 className="mb-12 text-center text-4xl font-bold text-white">
        Sobre Mim
      </h2>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 md:grid-cols-2">
        {/* Coluna da Esquerda: Texto */}
        <div className="flex flex-col gap-4 text-left text-lg text-gray-300">
          <p>
            Olá! Sou Rodrigo Ramos, um desenvolvedor apaixonado por tecnologia e pela criação de soluções digitais que impactam positivamente a vida das pessoas.
          </p>
          <p>
            Minha jornada na programação começou com a curiosidade de entender como as coisas funcionavam por trás das telas. Hoje, com experiência sólida no ecossistema JavaScript, meu foco é construir aplicações web e mobile performáticas e intuitivas, utilizando ferramentas como React, Next.js e React Native.
          </p>
          <p>
            Estou sempre em busca de novos desafios e aprendizados, e adoro colaborar em equipe para transformar ideias complexas em produtos de sucesso.
          </p>
        </div>

        {/* Coluna da Direita: Skills */}
        <div>
          <h3 className="mb-4 text-2xl font-semibold text-white">Minhas Habilidades</h3>
          <ul className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-md bg-gray-700 px-4 py-2 text-base font-medium text-blue-300"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}