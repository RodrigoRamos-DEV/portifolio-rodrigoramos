// src/components/ProjectCard.tsx
import { DistortionImage } from './DistortionImage';

type ProjectCardProps = {
  title: string;
  description: string;
  // ANTES: image: string;
  // AGORA:
  coverImage: string; // Passaremos apenas a imagem de capa
  onOpen: () => void;
};

export function ProjectCard({ title, description, coverImage, onOpen }: ProjectCardProps) {
  return (
    <div onClick={onOpen} className="group flex cursor-pointer flex-col gap-4 rounded-lg border border-transparent bg-[#192f50] p-6 text-left transition-all hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
      <div className="aspect-video w-full overflow-hidden rounded-md">
        {/* Usamos a coverImage aqui */}
        <DistortionImage src={coverImage} alt={title} />
      </div>
      <h3 className="text-xl font-bold text-gray-50 transition-colors group-hover:text-blue-400">
        {title}
      </h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}