import { useState } from 'react';
import ChevronDownIcon from './icons/ChevronDownIcon';
import ChevronUpIcon from './icons/ChevronUpIcon';
import ImageCarousel from './ImageCarousel';

const ProjectAccordion = ({ project }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="border border-white/5 bg-[#111] overflow-hidden group">
      {/* Project Header */}
      <div
        className="p-6 md:p-8 flex justify-between items-center cursor-pointer hover:bg-white/5 transition-colors"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <div className="max-w-3xl pr-8">
          <h4 className="text-xl md:text-2xl font-serif text-white mb-3 group-hover:text-gray-300 transition-colors">
            {project.title}
          </h4>
          <p className="text-sm text-gray-400 font-light leading-relaxed">
            {project.description}
          </p>
        </div>
        <div className="text-gray-500 flex-shrink-0">
          {isCollapsed ? <ChevronDownIcon /> : <ChevronUpIcon />}
        </div>
      </div>

      {/* Project Content */}
      <div className={`project-content ${isCollapsed ? 'collapsed' : ''}`}>
        <div className="project-content-inner">
          <ImageCarousel images={project.images} />
        </div>
      </div>

      <style>
        {`
          .project-content {
            display: grid;
            grid-template-rows: 1fr;
            transition: grid-template-rows 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          }
          .project-content.collapsed {
            grid-template-rows: 0fr;
          }
          .project-content-inner {
            overflow: hidden;
          }
        `}
      </style>
    </div>
  );
};

export default ProjectAccordion;