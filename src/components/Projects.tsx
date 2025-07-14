'use client';

import { useState } from 'react';
import { PROJECTS } from '@/data/projects';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

// Definindo o tipo do projeto para consistência
type Project = (typeof PROJECTS)[0];

export function Projects() {
  // 1. CRIAÇÃO DO ESTADO (A PARTE QUE FALTAVA)
  // 'selectedProject' guarda o projeto clicado, ou 'null' se nenhum modal estiver aberto.
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // 2. FUNÇÕES PARA MANIPULAR O ESTADO
  // Função para abrir o modal: ela recebe um projeto e o guarda no estado.
  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
  };

  // Função para fechar o modal: ela limpa o estado para 'null'.
  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="px-4 py-16 sm:px-8 md:px-16">
      <h2 className="mb-12 text-center text-4xl font-bold text-white">
        Meus Projetos
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            coverImage={project.images[0]}
            // A função onOpen agora chama handleOpenModal com o projeto atual
            onOpen={() => handleOpenModal(project)}
          />
        ))}
      </div>

      {/* 3. O MODAL USA O ESTADO E AS FUNÇÕES
          Agora 'selectedProject' e 'handleCloseModal' existem e são passados como props.
      */}
      <ProjectModal
        isOpen={!!selectedProject}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </section>
  );
}