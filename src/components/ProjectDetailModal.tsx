import React, { useEffect } from 'react';
import { ProjectItem } from '../data/portfolioData';
import { X, CheckCircle2, Cpu, ArrowRight } from 'lucide-react';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-xs animate-fadeIn">
      <div
        className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-xl border border-neutral-200/80 p-6 sm:p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-full text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 transition"
          title="닫기 (ESC)"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="pr-8 mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-neutral-100 text-neutral-800 font-medium border border-neutral-200">
              {project.category}
            </span>
            <span className="text-xs text-neutral-400 font-mono">
              {project.period}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 tracking-tight">
            {project.title}
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-neutral-500 font-medium">
            담당 역할: {project.role}
          </p>
        </div>

        {/* Overview & Problem */}
        <div className="space-y-4 text-sm text-neutral-700 leading-relaxed mb-6">
          <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200/70">
            <h4 className="text-xs font-semibold text-neutral-900 uppercase tracking-normal mb-1">
              프로젝트 배경 및 개요
            </h4>
            <p className="text-neutral-700">{project.overview}</p>
          </div>

          <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200/70">
            <h4 className="text-xs font-semibold text-neutral-900 uppercase tracking-normal mb-1">
              문제 해결 및 핵심 가치
            </h4>
            <p className="text-neutral-700">{project.problemAndImpact}</p>
          </div>
        </div>

        {/* Pipeline Steps if available */}
        {project.pipelineSteps && (
          <div className="mb-6">
            <h4 className="text-xs font-semibold text-neutral-900 uppercase tracking-normal mb-3 flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-neutral-600" />
              <span>시스템 아키텍처 및 파이프라인</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.pipelineSteps.map((p, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl border border-neutral-200 bg-white relative"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono font-bold text-blue-600">
                      STEP {p.step}
                    </span>
                    <span className="text-xs font-semibold text-neutral-900">
                      {p.label}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-normal">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Key Features List */}
        <div className="mb-6">
          <h4 className="text-xs font-semibold text-neutral-900 uppercase tracking-normal mb-3">
            주요 기능 및 상세 수행 내용
          </h4>
          <ul className="space-y-2 text-xs sm:text-sm text-neutral-700">
            {project.keyFeatures.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2 leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-neutral-400 mt-0.5 shrink-0" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Badges */}
        <div>
          <h4 className="text-xs font-semibold text-neutral-900 uppercase tracking-normal mb-2.5">
            적용 기술 스택
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-neutral-100 text-neutral-800 border border-neutral-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Close Footer */}
        <div className="mt-8 pt-4 border-t border-neutral-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-full text-xs font-medium text-neutral-800 bg-neutral-100 hover:bg-neutral-200 transition"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};
