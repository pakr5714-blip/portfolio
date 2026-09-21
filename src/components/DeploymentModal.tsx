import React, { useState, useEffect } from 'react';
import { X, Github, ExternalLink, Copy, Check, Terminal, Globe } from 'lucide-react';

interface DeploymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DeploymentModal: React.FC<DeploymentModalProps> = ({ isOpen, onClose }) => {
  const [copiedCmd, setCopiedCmd] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const gitCommands = `# 1. Git 저장소 초기화 및 커밋
git init
git add .
git commit -m "feat: 박영규 AI·데이터 분석 포트폴리오 웹사이트"

# 2. 본인의 GitHub 리포지토리로 연결
git branch -M main
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/<YOUR_REPOSITORY_NAME>.git
git push -u origin main`;

  const handleCopyCmd = () => {
    navigator.clipboard.writeText(gitCommands);
    setCopiedCmd(true);
    setTimeout(() => setCopiedCmd(false), 2000);
  };

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

        {/* Title */}
        <div className="pr-8 mb-6">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="p-1.5 rounded-lg bg-neutral-900 text-white">
              <Github className="w-4 h-4" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
              Deployment Guide
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 tracking-tight">
            GitHub 저장 및 Vercel 배포 가이드
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 mt-1">
            본 포트폴리오 코드는 순수 Vite + React SPA 구조로 구성되어 있어, GitHub 푸시 후 Vercel에서 별도 설정 없이 즉시 자동 배포됩니다.
          </p>
        </div>

        {/* Step 1: GitHub Push */}
        <div className="mb-6 space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-semibold text-neutral-900 flex items-center gap-1.5">
              <Terminal className="w-4 h-4 text-neutral-600" />
              <span>Step 1. GitHub 리포지토리에 푸시하기</span>
            </h4>
            <button
              onClick={handleCopyCmd}
              className="text-xs font-medium text-neutral-600 hover:text-neutral-950 flex items-center gap-1 px-2.5 py-1 rounded-md bg-neutral-100 hover:bg-neutral-200 transition cursor-pointer"
            >
              {copiedCmd ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedCmd ? '복사 완료!' : '명령어 복사'}</span>
            </button>
          </div>

          <pre className="p-4 rounded-xl bg-neutral-900 text-neutral-100 text-xs font-mono overflow-x-auto leading-relaxed">
            {gitCommands}
          </pre>
        </div>

        {/* Step 2: Vercel Deployment */}
        <div className="mb-6 space-y-3">
          <h4 className="text-sm font-semibold text-neutral-900 flex items-center gap-1.5">
            <Globe className="w-4 h-4 text-neutral-600" />
            <span>Step 2. Vercel에서 1분 만에 원클릭 배포하기</span>
          </h4>

          <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200/80 space-y-2 text-xs sm:text-sm text-neutral-700 leading-relaxed">
            <ol className="list-decimal list-inside space-y-1.5">
              <li>
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-blue-600 hover:underline inline-flex items-center gap-1"
                >
                  vercel.com <ExternalLink className="w-3 h-3" />
                </a>에 로그인 후 <strong>[Add New...] → [Project]</strong>를 선택합니다.
              </li>
              <li>위에서 생성한 GitHub 리포지토리를 목록에서 찾아 <strong>[Import]</strong>를 클릭합니다.</li>
              <li>
                설정 확인 (Vite 프로젝트 자동 감지):
                <ul className="list-disc list-inside pl-4 mt-1 space-y-0.5 text-xs text-neutral-600">
                  <li><strong>Framework Preset:</strong> Vite</li>
                  <li><strong>Build Command:</strong> <code className="bg-neutral-200/80 px-1 py-0.5 rounded">npm run build</code></li>
                  <li><strong>Output Directory:</strong> <code className="bg-neutral-200/80 px-1 py-0.5 rounded">dist</code></li>
                </ul>
              </li>
              <li><strong>[Deploy]</strong> 버튼을 누르면 약 20초 내에 전 세계 CDN을 통해 라이브 웹사이트가 배포 완료됩니다!</li>
            </ol>
          </div>
        </div>

        {/* Tips */}
        <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200/60 text-xs text-emerald-800 flex items-start gap-2">
          <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
          <span>
            이후 GitHub의 main 브랜치에 코드를 커밋/푸시하면 Vercel이 자동으로 감지하여 최신 상태로 즉시 재배포(CI/CD)됩니다.
          </span>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-neutral-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-full text-xs font-medium text-neutral-800 bg-neutral-100 hover:bg-neutral-200 transition"
          >
            확인 및 닫기
          </button>
        </div>
      </div>
    </div>
  );
};
