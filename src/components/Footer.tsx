import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Phone, Github, ArrowUp, Code2 } from 'lucide-react';

interface FooterProps {
  onOpenDeployGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDeployGuide }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#f8f9fa] border-t border-neutral-200/60">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Left Column */}
          <div>
            <span className="text-base font-semibold text-neutral-950 block">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-xs text-neutral-500 block mt-0.5">
              {PERSONAL_INFO.statusBadge}
            </span>
          </div>

          {/* Right Column */}
          <div className="flex flex-col sm:items-end gap-2">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-xs font-mono text-neutral-600 hover:text-neutral-950 transition-colors"
            >
              {PERSONAL_INFO.email}
            </a>

            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-neutral-950 transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-neutral-500 hover:text-neutral-950 transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href={`tel:${PERSONAL_INFO.phone.replace(/[^0-9+]/g, '')}`}
                className="text-neutral-500 hover:text-neutral-950 transition-colors"
                title="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>

              {/* Scroll To Top */}
              <button
                onClick={scrollToTop}
                className="p-1 rounded-full text-neutral-400 hover:text-neutral-950 hover:bg-neutral-200/60 transition ml-2"
                title="맨 위로 가기"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Attribution & Vercel Deploy Indicator */}
        <div className="mt-12 pt-6 border-t border-neutral-200/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-400">
          <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>

          <button
            onClick={onOpenDeployGuide}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-neutral-200/80 text-neutral-600 hover:text-neutral-900 transition-colors shadow-2xs cursor-pointer"
          >
            <Code2 className="w-3.5 h-3.5 text-neutral-500" />
            <span>GitHub 저장 & Vercel 배포 가이드 확인</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
