// src/data/projects.ts

export const PROJECTS = [
  {
    // PROJETO 1 - JÁ ESTAVA CORRETO
    title: 'Sistama ARK - Gestão Financeira e anotação para lavouras',
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
    tech: ['HTML', 'CSS', 'JavaScript', 'Appscript', 'Google Apps Script', 'JWT'],
  
  },
  {
    // PROJETO 2 - CORRIGIDO
    title: 'Site - Institucional Queiroz e Guarilha',
    description:
      ' Desenvolvimento de uma aplicação web moderna e interativa para a distribuidora de hortifrutigranjeiros Queiroz & Guarilha. O objetivo foi criar uma presença online profissional que não apenas apresentasse a empresa, mas que também funcionasse como uma poderosa ferramenta de vendas e comunicação. ',
    longDescription:
      'Desenvolvimento de uma aplicação web moderna e interativa para a distribuidora de hortifrutigranjeiros Queiroz & Guarilha. O objetivo foi criar uma presença online profissional que não apenas apresentasse a empresa, mas que também funcionasse como uma poderosa ferramenta de vendas e comunicação. O site foi construído como uma Single-Page Application (SPA) para garantir uma experiência de usuário extremamente rápida e fluidaa. O projeto se destaca por funcionalidades interativas, como uma galeria de produtos dinâmica com sistema de busca e filtros por categoria, e um formulário de contato inteligente que integra os pedidos diretamente com o WhatsApp da empresa, otimizando o fluxo de comunicação e agilizando o atendimento ao cliente. O design foi totalmente personalizado e responsivo, assegurando uma visualização perfeita em qualquer dispositivo.',
    // ANTES: image: '/images/projeto1.jpg',
    // AGORA:
    images: ['/images/qg/capa.png',
      '/images/qg/detalhe-1.png',
      '/images/qg/detalhe-2.png',
      '/images/qg/detalhe-3.png',
    ], // Substitua pelo caminho da imagem correta
    tech: ['React.js', 'HTML5', 'CSS3'],
  
  },
  {
    // PROJETO 3 - CORRIGIDO
    title: 'Sistema de Orçamentos - Forte Locações',
    description:
      'Este projeto é um aplicativo web (Web App) completo desenvolvido com Google Apps Script, utilizando uma Planilha Google como banco de dados. A solução foi criada para gerenciar de forma eficiente clientes, veículos/serviços e a geração de orçamentos para a empresa "Forte Locações".',
    longDescription:
      'Um aplicativo web completo para a gestão de orçamentos, clientes e veículos, utilizando Google Apps Script como backend e Google Sheets como banco de dados. A plataforma permite criar, consultar e editar registros de forma integrada, além de gerar orçamentos dinâmicos com cálculo de valores em tempo real e exportá-los para impressão ou PDF.',
    // ANTES: image: '/images/projeto1.jpg',
    // AGORA:
    images: ['/images/fl/capa.png',
      '/images/fl/detalhe-1.png',
      '/images/fl/detalhe-2.png',
      '/images/fl/detalhe-3.png',
    ], // Substitua pelo caminho da imagem correta
    tech: ['HTML', 'CSS', 'JavaScript', 'Appscript', 'Google Apps Script','Google Sheets'],
   
  },
];