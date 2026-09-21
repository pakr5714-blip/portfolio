import React from 'react';
import { PROJECTS, ProjectItem } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

interface ProjectsSummaryProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectsSummarySection: React.FC<ProjectsSummaryProps> = ({ onSelectProject }) => {
  const scrollToCaseStudy = (projectId: string) => {
    const el = document.getElementById(`case-study-${projectId}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="projects-overview" className="py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          {/* Left Column Label */}
          <div className="md:col-span-1">
            <h2 className="text-base font-semibold text-neutral-900 tracking-tight">
              Projects
            </h2>
            <span className="text-xs text-neutral-500 mt-0.5 block">
              주요 프로젝트 개요
            </span>
          </div>

          {/* Right Column Content */}
          <div className="md:col-span-3 space-y-10">
            {PROJECTS.map((project, idx) => (
              <div
                key={project.id}
                className="group cursor-pointer"
                onClick={() => scrollToCaseStudy(project.id)}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-xs font-mono text-neutral-400">
                        0{idx + 1}
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-neutral-200/70 text-neutral-700 font-medium">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-neutral-950 group-hover:text-blue-600 transition-colors">
                      {project.shortTitle}
                    </h3>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectProject(project);
                    }}
                    className="p-1.5 rounded-full text-neutral-400 group-hover:text-neutral-900 group-hover:bg-neutral-100 transition-all shrink-0"
                    title="상세 모달 보기"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </button>
                </div>

                <p className="mt-2.5 text-sm text-neutral-600 leading-relaxed font-normal">
                  {project.overview}
                </p>

                {/* Tech chips preview */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.techStack.slice(0, 4).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] text-neutral-500 font-mono bg-neutral-100 px-2 py-0.5 rounded border border-neutral-200/50"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="text-[11px] text-neutral-400 font-mono px-1 py-0.5">
                      +{project.techStack.length - 4} more
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Minimal Divider */}
        <div className="border-t border-neutral-200/70 mt-16" />
      </div>
    </section>
  );
};
