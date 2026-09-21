import React from 'react';
import { EDUCATION_LIST, TRAINING_COURSES } from '../data/portfolioData';
import { GraduationCap, Award } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          {/* Left Column Label */}
          <div className="md:col-span-1">
            <h2 className="text-base font-semibold text-neutral-900 tracking-tight">
              Education
            </h2>
            <span className="text-xs text-neutral-500 mt-0.5 block">
              학력 및 전문 교육 이수
            </span>
          </div>

          {/* Right Column Content */}
          <div className="md:col-span-3 space-y-10">
            {/* Degree Education */}
            <div className="space-y-4">
              <div className="text-xs font-semibold text-neutral-900 uppercase tracking-normal flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-neutral-500" />
                <span>정규 학위 과정</span>
              </div>

              {EDUCATION_LIST.map((edu, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-neutral-200/80 shadow-2xs">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                    <h3 className="text-base font-semibold text-neutral-950">
                      {edu.institution}
                    </h3>
                    <span className="text-xs font-mono text-neutral-500">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-neutral-800 mb-1.5">
                    {edu.degree}
                  </p>
                  {edu.description && (
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {edu.description}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Specialized Training Courses */}
            <div className="space-y-4">
              <div className="text-xs font-semibold text-neutral-900 uppercase tracking-normal flex items-center gap-1.5">
                <Award className="w-4 h-4 text-neutral-500" />
                <span>AI 전문 교육 과정 이력</span>
              </div>

              <div className="space-y-3">
                {TRAINING_COURSES.map((course, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-neutral-50/70 border border-neutral-200/60 hover:bg-neutral-50 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                      <h4 className="text-sm font-semibold text-neutral-900">
                        {course.course}
                      </h4>
                      <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-neutral-200/60 text-neutral-700 self-start sm:self-auto">
                        {course.year}
                      </span>
                    </div>
                    {course.details && (
                      <p className="text-xs text-neutral-600 leading-relaxed">
                        {course.details}
                      </p>
                    )}
                  </div>
                ))}
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
