// src/components/ProjectModal.tsx
'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import Image from 'next/image';
import { Link as LinkIcon, X } from 'lucide-react';

// 1. Importar Swiper e seus módulos/estilos
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// 2. Atualizar o tipo do projeto para usar 'images'
type Project = {
  title: string;
  description: string;
  longDescription?: string;
  images: string[]; // <-- MUDOU DE 'image' PARA 'images' (array)
  tech: string[];
  link?: string;
};

type ProjectModalProps = {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
};

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
          <div className="fixed inset-0 bg-black/60" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
              <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-[#0a192f] border border-gray-700 p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title as="h3" className="text-2xl font-bold leading-6 text-white">
                  {project.title}
                </Dialog.Title>
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white z-10" aria-label="Fechar modal">
                  <X size={24} />
                </button>

                {/* 3. Substituir a imagem única pelo Carrossel Swiper */}
                <div className="mt-4">
                  <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    className="w-full rounded-md"
                  >
                    {project.images.map((imgSrc, index) => (
                      <SwiperSlide key={index}>
                        <Image
                          src={imgSrc}
                          alt={`Imagem ${index + 1} do projeto ${project.title}`}
                          width={1200}
                          height={675}
                          className="w-full object-cover"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <p className="mt-4 text-lg text-gray-300">
                    {project.longDescription || project.description}
                  </p>
                </div>

                <div className="mt-4">
                  <h4 className="font-semibold text-white">Tecnologias Utilizadas:</h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.tech.map((techName) => (
                      <span key={techName} className="rounded-md bg-blue-900/50 px-3 py-1 text-sm text-blue-300">
                        {techName}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex gap-4">
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 font-semibold text-white transition hover:bg-blue-700">
                      <LinkIcon size={18}/> Ver Site
                    </a>
                  )}
                 
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}