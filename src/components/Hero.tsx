import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Phone, Github, Check, Copy } from 'lucide-react';

// Profile photo generated for authentic presentation matching the Framer template
import profilePhotoUrl from '../assets/images/profile_photo_1789965204012.jpg';

export const Hero: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="hero" className="pt-16 sm:pt-24 pb-16 text-center">
      <div className="max-w-3xl mx-auto px-6">
        {/* Main Display Name - Exactly like Alex Carter display text */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight text-neutral-950 font-sans mb-10 select-none">
          {PERSONAL_INFO.name}
        </h1>

        {/* Profile Image with subtle border and rounded corners */}
        <div className="relative inline-block mb-8 group">
          <div className="w-48 h-52 sm:w-56 sm:h-60 rounded-2xl overflow-hidden bg-neutral-200 border border-neutral-300/80 shadow-sm mx-auto transition-transform duration-300 group-hover:scale-[1.01]">
            <img
              src={profilePhotoUrl}
              alt={`${PERSONAL_INFO.name} 프로필 사진`}
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
          </div>
          {/* Subtle tag badge */}
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-xs border border-neutral-200/90 rounded-full px-3 py-1 shadow-2xs text-[11px] font-medium text-neutral-700 whitespace-nowrap">
            AI · Data Analyst
          </div>
        </div>

        {/* Brief Tagline under photo */}
        <p className="max-w-xl mx-auto text-neutral-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
          {PERSONAL_INFO.tagline}
        </p>

        {/* Contact & Social Icons Row */}
        <div className="flex items-center justify-center gap-3 text-neutral-700">
          {/* Email button with copy state */}
          <button
            id="btn-hero-copy-email"
            onClick={handleCopyEmail}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium text-neutral-700 bg-white hover:bg-neutral-100 border border-neutral-300 transition-colors shadow-2xs"
            title="이메일 주소 복사하기"
          >
            {copiedEmail ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700 font-semibold">이메일 복사됨!</span>
              </>
            ) : (
              <>
                <Mail className="w-3.5 h-3.5 text-neutral-600" />
                <span>{PERSONAL_INFO.email}</span>
                <Copy className="w-3 h-3 text-neutral-400 ml-0.5" />
              </>
            )}
          </button>

          {/* Phone button */}
          <a
            id="link-hero-phone"
            href={`tel:${PERSONAL_INFO.phone.replace(/[^0-9+]/g, '')}`}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium text-neutral-700 bg-white hover:bg-neutral-100 border border-neutral-300 transition-colors shadow-2xs"
            title="전화 걸기"
          >
            <Phone className="w-3.5 h-3.5 text-neutral-600" />
            <span>{PERSONAL_INFO.phone}</span>
          </a>

          {/* GitHub link */}
          <a
            id="link-hero-github"
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full text-neutral-700 bg-white hover:bg-neutral-100 border border-neutral-300 transition-colors shadow-2xs"
            title="GitHub 방문"
          >
            <Github className="w-3.5 h-3.5 text-neutral-800" />
          </a>
        </div>
      </div>
    </section>
  );
};
