// src/data/projects.ts

export const PROJECTS = [
  {
    // PROJETO 1 - JÁ ESTAVA CORRETO
    title: 'Sistama ARK',
    description:
      'Uma aplicação web completa desenvolvida em Google Apps Script para transformar uma Planilha Google em um sistema de gestão financeira interativo.',
    longDescription: 
      'Uma aplicação web completa desenvolvida em Google Apps Script para transformar uma Planilha Google em um sistema de gestão financeira interativo. A ferramenta otimiza o controle de vendas, despesas e cadastros para negócios rurais, oferecendo visualizações de dados dinâmicas e facilitando a entrada de informações através de uma interface amigável e responsiva.',
    images: [
      '/images/ark/imagem-principal.png',
      '/images/ark/detalhe-1.png',
      '/images/ark/detalhe-2.png',
      '/images/ark/detalhe-3.png',
      '/images/ark/detalhe-4.png',
      '/images/ark/detalhe-5.png',
      '/images/ark/detalhe-6.png',
      '/images/ark/detalhe-7.png',
      '/images/ark/detalhe-8.png',
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'Appscript', 'Google Apps Script'],
    github: '', // Adicione o link do GitHub se tiver
    link: '',   // Adicione o link do deploy se tiver
  },
  {
    // PROJETO 2 - CORRIGIDO
    title: 'Nome do Projeto 2 (App Mobile)',
    description:
      'Este é um aplicativo mobile construído com React Native que se conecta a uma API para fornecer dados em tempo real.',
    longDescription:
      'Este é um aplicativo mobile construído com React Native. Ele se conecta a uma API para fornecer dados em tempo real aos usuários. O projeto inclui funcionalidades como autenticação de usuário, visualização de listas e detalhes de itens.',
    // ANTES: image: '/images/projeto1.jpg',
    // AGORA:
    images: ['/images/projeto2/capa.jpg'], // Substitua pelo caminho da imagem correta
    tech: ['React Native', 'TypeScript', 'PostgreSQL'],
    github: 'https://github.com/seu-usuario/repositorio-2',
    link: '',
  },
  {
    // PROJETO 3 - CORRIGIDO
    title: 'Nome do Projeto 3',
    description:
      'Uma API RESTful desenvolvida para gerenciar dados de usuários e produtos, com autenticação e documentação completa.',
    longDescription:
      'Uma API RESTful desenvolvida para gerenciar dados de usuários e produtos, com autenticação e documentação completa. A API foi construída seguindo as melhores práticas de segurança e performance, utilizando JWT para autenticação.',
    // ANTES: image: '/images/projeto1.jpg',
    // AGORA:
    images: ['/images/projeto3/capa.jpg'], // Substitua pelo caminho da imagem correta
    tech: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
    github: 'https://github.com/seu-usuario/repositorio-3',
    link: 'https://link-para-a-documentacao-api.com',
  },
];