import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Phone, Mail, MapPin, Copy, Check, Send } from 'lucide-react';

export const ContactsSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [inquirySubject, setInquirySubject] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSendMailto = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(inquirySubject || `[포트폴리오 문의] ${PERSONAL_INFO.name}님께`);
    const body = encodeURIComponent(inquiryMessage || `안녕하세요 박영규님,\n\n포트폴리오를 보고 연락드립니다.\n\n`);
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contacts" className="py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header - Exactly matching the big 'Contacts' title from Framer template */}
        <div className="mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950">
            연락처
          </h2>
          <p className="text-sm text-neutral-500 mt-2">
            새로운 기회, 채용 및 프로젝트 협업을 위한 연락처
          </p>
        </div>

        {/* 2-Column Layout matching Framer Contacts */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Left Column: Contact details */}
          <div className="md:col-span-1 space-y-6">
            {/* Phone */}
            <div>
              <span className="text-xs text-neutral-400 font-mono uppercase block mb-1">
                Phone
              </span>
              <div className="flex items-center gap-1.5">
                <a
                  href={`tel:${PERSONAL_INFO.phone.replace(/[^0-9+]/g, '')}`}
                  className="text-sm font-medium text-neutral-900 hover:text-blue-600 transition-colors"
                >
                  {PERSONAL_INFO.phone}
                </a>
                <button
                  onClick={handleCopyPhone}
                  className="p-1 text-neutral-400 hover:text-neutral-700 transition"
                  title="전화번호 복사"
                >
                  {copiedPhone ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>

            {/* Email */}
            <div>
              <span className="text-xs text-neutral-400 font-mono uppercase block mb-1">
                Email
              </span>
              <div className="flex items-center gap-1.5">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-sm font-medium text-neutral-900 hover:text-blue-600 transition-colors break-all"
                >
                  {PERSONAL_INFO.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-1 text-neutral-400 hover:text-neutral-700 transition shrink-0"
                  title="이메일 복사"
                >
                  {copiedEmail ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>

            {/* Location */}
            <div>
              <span className="text-xs text-neutral-400 font-mono uppercase block mb-1">
                Location
              </span>
              <p className="text-sm font-medium text-neutral-900">
                {PERSONAL_INFO.location}
              </p>
            </div>
          </div>

          {/* Right Column: Friendly message and quick email form */}
          <div className="md:col-span-3 space-y-6">
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              데이터 기반의 인사이트와 최신 생성형 AI 기술을 결합하여 실질적인 비즈니스 가치를 창출하는 개발을 지향합니다.
              신규 프로젝트 개발, 인턴십/채용 제안, 또는 의미 있는 연구 협업에 대해 언제든지 편하게 연락해 주세요.
            </p>

            {/* Quick Email Launcher Form */}
            <form onSubmit={handleSendMailto} className="p-5 rounded-2xl bg-white border border-neutral-200/80 shadow-2xs space-y-3.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-neutral-900 tracking-normal">
                  빠른 이메일 메시지 보내기
                </span>
                <span className="text-[11px] text-neutral-400">
                  클릭 시 기본 메일 클라이언트 실행
                </span>
              </div>

              <div>
                <input
                  type="text"
                  placeholder="제목 (예: AI 프로젝트 협업 제안)"
                  value={inquirySubject}
                  onChange={(e) => setInquirySubject(e.target.value)}
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-neutral-200 focus:outline-hidden focus:border-neutral-900 transition"
                />
              </div>

              <div>
                <textarea
                  rows={3}
                  placeholder="문의 내용을 간단히 입력해 주세요..."
                  value={inquiryMessage}
                  onChange={(e) => setInquiryMessage(e.target.value)}
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-neutral-200 focus:outline-hidden focus:border-neutral-900 transition resize-none"
                />
              </div>

              <div className="flex items-center justify-between pt-1">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="text-xs font-medium text-neutral-600 hover:text-neutral-900 flex items-center gap-1.5 transition"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? '이메일 주소 복사 완료' : '이메일 주소 복사하기'}</span>
                </button>

                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium text-white bg-neutral-900 hover:bg-neutral-800 transition shadow-2xs cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>메일 작성 열기</span>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Minimal Divider */}
        <div className="border-t border-neutral-200/70 mt-16" />
      </div>
    </section>
  );
};
