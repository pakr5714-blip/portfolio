import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          {/* Left Column Label */}
          <div className="md:col-span-1">
            <h2 className="text-base font-semibold text-neutral-900 tracking-tight">
              About
            </h2>
            <span className="text-xs text-neutral-500 mt-0.5 block">
              소개 및 개발 철학
            </span>
          </div>

          {/* Right Column Content */}
          <div className="md:col-span-3 space-y-4 text-neutral-700 text-sm sm:text-base leading-relaxed">
            {PERSONAL_INFO.introText.map((paragraph, idx) => (
              <p key={idx} className="font-normal text-neutral-700 leading-relaxed">
                {paragraph}
              </p>
            ))}

            {/* Core Values / Focus Callout */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-neutral-600">
              <div className="p-3.5 rounded-xl bg-white border border-neutral-200/80 shadow-2xs">
                <span className="font-semibold text-neutral-900 block mb-1">
                  💡 실무 중심 AI 엔지니어링
                </span>
                <span>
                  LLM API와 프롬프트 엔지니어링을 활용한 신속한 서비스 개발 및 고도화
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-neutral-200/80 shadow-2xs">
                <span className="font-semibold text-neutral-900 block mb-1">
                  🔍 심층 데이터 분석
                </span>
                <span>
                  Pandas 및 통계 기반 EDA로 방대한 비즈니스 데이터 속 의미 있는 패턴 도출
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-neutral-200/80 shadow-2xs">
                <span className="font-semibold text-neutral-900 block mb-1">
                  🌐 글로벌 다국어 서비스
                </span>
                <span>
                  외국어대 컴퓨터공학 전공을 살린 다국어 RAG 지식베이스 및 현지화 최적화
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Minimal Divider */}
        <div className="border-t border-neutral-200/70 mt-16" />
      </div>
    </section>
  );
};
