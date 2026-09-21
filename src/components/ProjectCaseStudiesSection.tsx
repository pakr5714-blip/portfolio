import React from 'react';
import { PROJECTS, ProjectItem } from '../data/portfolioData';
import { Layers, Sparkles, ExternalLink } from 'lucide-react';

interface ProjectCaseStudiesProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectCaseStudiesSection: React.FC<ProjectCaseStudiesProps> = ({ onSelectProject }) => {
  return (
    <section id="work-history" className="py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header - Exactly matching the big 'Work history' title from Framer template */}
        <div className="mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950">
            프로젝트 이력
          </h2>
          <p className="text-sm text-neutral-500 mt-2">
            프로젝트별 주요 수행 내용, 엔지니어링 기여 및 기술 스택
          </p>
        </div>

        {/* Project Entries in 2-column format */}
        <div className="space-y-16">
          {PROJECTS.map((project, idx) => (
            <div
              key={project.id}
              id={`case-study-${project.id}`}
              className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 pt-6 first:pt-0"
            >
              {/* Left Column: Organization / Category / Role / Date */}
              <div className="md:col-span-1 space-y-2">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-mono font-semibold text-neutral-400">
                    P{idx + 1}
                  </span>
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-neutral-200/70 text-neutral-700">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-base font-semibold text-neutral-900 tracking-tight">
                  {project.shortTitle}
                </h3>

                <p className="text-xs text-neutral-500 font-medium">
                  {project.period}
                </p>

                <div className="pt-2 text-xs text-neutral-600">
                  <span className="text-neutral-400 block text-[11px]">담당 역할:</span>
                  <span className="font-medium text-neutral-800">{project.role}</span>
                </div>

                {/* Open detail modal button */}
                <button
                  id={`btn-open-detail-${project.id}`}
                  onClick={() => onSelectProject(project)}
                  className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-blue-600 hover:text-blue-700 hover:underline cursor-pointer"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>아키텍처 파이프라인 보기</span>
                </button>
              </div>

              {/* Right Column: Title, Overview, Bullet Points, Tech Stack */}
              <div className="md:col-span-3 space-y-4">
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-neutral-950 tracking-tight">
                    {project.title}
                  </h4>
                  <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                    {project.overview}
                  </p>
                </div>

                {/* Key Accomplishments & Features - Clean bullet points exactly like Framer */}
                <div className="space-y-2 pt-1">
                  <div className="text-xs font-semibold text-neutral-800 tracking-normal uppercase flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-neutral-500" />
                    <span>주요 기능 및 수행 내용</span>
                  </div>
                  <ul className="space-y-2.5 text-sm text-neutral-700">
                    {project.keyFeatures.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Pills */}
                <div className="pt-3">
                  <span className="text-xs text-neutral-400 font-mono block mb-2">
                    기술 스택 (Tech Stack)
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-neutral-100 text-neutral-800 border border-neutral-200/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Quick Highlights / Metrics if present */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="pt-2 flex flex-wrap gap-2">
                    {project.metrics.map((metric, mIdx) => (
                      <div
                        key={mIdx}
                        className="text-xs px-3 py-1.5 rounded-lg bg-emerald-50/70 text-emerald-800 border border-emerald-200/50 flex items-center gap-1.5"
                      >
                        <span className="font-bold">✓</span>
                        <span>{metric}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Minimal Divider */}
        <div className="border-t border-neutral-200/70 mt-16" />
      </div>
    </section>
  );
};
