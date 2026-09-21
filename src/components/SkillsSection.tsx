import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          {/* Left Column Label */}
          <div className="md:col-span-1">
            <h2 className="text-base font-semibold text-neutral-900 tracking-tight">
              Skills
            </h2>
            <span className="text-xs text-neutral-500 mt-0.5 block">
              보유 기술 역량
            </span>
          </div>

          {/* Right Column Content - Grouped Badge Pills */}
          <div className="md:col-span-3 space-y-7">
            {SKILL_CATEGORIES.map((category, idx) => (
              <div key={idx} className="space-y-2.5">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-xs font-semibold text-neutral-900 tracking-normal uppercase">
                    {category.title}
                  </h3>
                  <span className="text-[11px] text-neutral-400 font-normal hidden sm:inline">
                    {category.description}
                  </span>
                </div>

                {/* Badges Grid matching the Framer pill design */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium bg-neutral-100/90 text-neutral-800 border border-neutral-200/70 hover:border-neutral-400 hover:bg-neutral-50 transition-colors shadow-2xs select-none"
                    >
                      {skill}
                    </span>
                  ))}
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
