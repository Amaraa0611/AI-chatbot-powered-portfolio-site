import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  link?: string; // Optional link to project details
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageSrc, link }) => (
  <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <a href={link || '#'} target="_blank" rel="noopener noreferrer">
      <div className="relative w-full h-48">
        <Image
          src={imageSrc}
          alt={title}
          fill
          style={{ objectFit: 'contain' }}
          className="p-6"
        />
      </div>
      <div className="px-6 pb-6">
        <h3 className="text-xl font-semibold text-gray-800 mt-4">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </a>
  </div>
);

export default ProjectCard;