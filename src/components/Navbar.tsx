import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Github, Rocket } from 'lucide-react';

interface NavbarProps {
  onOpenDeployGuide: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDeployGuide }) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#f8f9fa]/90 backdrop-blur-md border-b border-neutral-200/60">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand / Name */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-left group cursor-pointer"
        >
          <span className="text-base font-semibold text-neutral-900 tracking-tight block">
            {PERSONAL_INFO.name}
          </span>
          <span className="text-xs text-neutral-500 font-normal hidden sm:block">
            AI & Data Analytics
          </span>
        </button>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Availability Status */}
          <div className="hidden md:flex items-center gap-2 text-xs text-neutral-600 font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{PERSONAL_INFO.statusBadge}</span>
          </div>

          {/* GitHub / Vercel Deploy Guide Button */}
          <button
            id="btn-deploy-guide-nav"
            onClick={onOpenDeployGuide}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-neutral-700 bg-white hover:bg-neutral-100 rounded-full border border-neutral-300 transition-colors shadow-2xs"
            title="GitHub 및 Vercel 배포 가이드 열기"
          >
            <Rocket className="w-3.5 h-3.5 text-neutral-600" />
            <span className="hidden sm:inline">GitHub & Vercel 배포</span>
            <span className="sm:hidden">배포 가이드</span>
          </button>

          {/* Contacts Button */}
          <button
            id="btn-nav-contacts"
            onClick={() => scrollToSection('contacts')}
            className="px-4 py-1.5 text-xs font-medium text-neutral-900 bg-white hover:bg-neutral-900 hover:text-white rounded-full border border-neutral-300 hover:border-neutral-900 transition-all shadow-2xs"
          >
            Contacts
          </button>
        </div>
      </div>
    </header>
  );
};
