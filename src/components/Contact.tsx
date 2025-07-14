// src/components/Contact.tsx

// 1. Adicionamos 'use client' no topo para poder usar hooks do React
'use client';

import { Github, Linkedin } from 'lucide-react';
import { useState } from 'react'; // 2. Importamos o useState

export function Contact() {
  // 3. Criamos estados para armazenar os valores dos campos do formulário
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const phoneNumber = '5522988472248';

  // 4. Esta função será chamada quando o formulário for enviado
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Impede o recarregamento da página

    // Monta a mensagem para o WhatsApp
    const messageToSend = `Olá, meu nome é *${name}*.\n\n*Email:* ${email}\n\n*Mensagem:*\n${message}`;

    // Codifica a mensagem para ser usada em uma URL
    const encodedMessage = encodeURIComponent(messageToSend);

    // Cria o link final do WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Abre o WhatsApp em uma nova aba
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="px-4 py-16 sm:px-8 md:px-16 lg:py-24">
      <h2 className="mb-12 text-center text-4xl font-bold text-white">
        Entre em Contato
      </h2>
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-16 md:grid-cols-2">
        <div className="flex flex-col gap-6">
          <p className="text-lg text-gray-300">
            Estou aberto a novas oportunidades e colaborações. Se você tem um projeto em mente, me envie uma mensagem diretamente no WhatsApp!
          </p>
          <p className="text-lg text-gray-300">
            Você também pode me encontrar nas seguintes plataformas:
          </p>
          <div className="flex gap-6">
            <a
              href="https://github.com/seu-usuario" // <-- MUDE AQUI
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 transition hover:text-blue-400"
              aria-label="Link para o GitHub"
            >
              <Github size={32} />
            </a>
            <a
              href="https://linkedin.com/in/seu-usuario" // <-- MUDE AQUI
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 transition hover:text-blue-400"
              aria-label="Link para o LinkedIn"
            >
              <Linkedin size={32} />
            </a>
          </div>
        </div>

        {/* 5. Conectamos o formulário à nossa função handleSubmit */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Seu nome"
            required
            className="rounded-md border border-gray-700 bg-[#0a192f] p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            // 6. Conectamos os campos aos seus respectivos estados
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            name="email"
            placeholder="Seu e-mail"
            required
            className="rounded-md border border-gray-700 bg-[#0a192f] p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            name="message"
            placeholder="Sua mensagem"
            required
            rows={5}
            className="rounded-md border border-gray-700 bg-[#0a192f] p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button
            type="submit"
            className="rounded-md bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Enviar via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}