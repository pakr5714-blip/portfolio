# 박영규 | AI·데이터 분석 포트폴리오 (Portfolio)

Python과 생성형 AI(LLM)를 활용한 서비스 개발 및 실용적인 데이터 분석 프로젝트를 담은 모던 포트폴리오 웹사이트입니다.

Framer 스타일의 미니멀리즘과 세련된 2열 타이포그래피 레이아웃을 바탕으로 제작되었습니다.

---

## 🛠️ 주요 수록 내용

- **소개 (About):** AI 서비스 개발자 및 데이터 분석가로서의 방향성과 비전
- **기술 역량 (Skills):**
  - 생성형 AI 및 LLM (OpenAI API, Anthropic Claude, Prompt Engineering)
  - AI 서비스 및 웹 애플리케이션 (Python, Streamlit, FastAPI 기초, Vibe Coding)
  - LLM 응용 기술 (LangChain, RAG, ChromaDB)
  - 데이터 분석 & 머신러닝 (Pandas, NumPy, scikit-learn, EDA)
  - 외부 데이터 연동 & 개발 도구 (Numbeo API, Jupyter Notebook, Streamlit Community Cloud)
- **주요 프로젝트 (Projects & Work History):**
  1. 글로벌 채용 데이터 분석 및 LLM 기반 맞춤형 이력서 최적화 대시보드
  2. 해외 직구·역직구 식품 및 화장품 성분 분석기 (다국어 Claude RAG)
  3. 공공 자전거 사용량 및 대여 기록 데이터 분석 프로젝트 (55만 건 EDA)
- **학력 및 교육 (Education):**
  - 부산외국어대학교 컴퓨터공학과 학사 과정
  - 다국어 AI 에이전트 개발 중급/고급과정 및 생성형 AI 프로그래밍 과정
- **연락처 (Contacts):**
  - Email: kmkm5714@naver.com
  - Phone: (+82) 010-8773-5714
  - Location: 대한민국 부산광역시

---

## 🚀 GitHub 저장 및 Vercel 배포 방법

본 프로젝트는 순수 Vite + React SPA 구조로 설계되어 Vercel에서 별도의 서버 설정 없이 즉시 배포 가능합니다.

### 1. 로컬 실행
```bash
npm install
npm run dev
```

### 2. GitHub에 코드 올리기
```bash
# Git 초기화 및 커밋
git init
git add .
git commit -m "feat: 박영규 AI·데이터 분석 포트폴리오 웹사이트"

# 본인 GitHub 원격 저장소 연결
git branch -M main
git remote add origin https://github.com/<본인아이디>/<리포지토리이름>.git
git push -u origin main
```

### 3. Vercel 배포
1. [vercel.com](https://vercel.com)에 로그인 후 **[Add New...] → [Project]** 클릭
2. 방금 올린 GitHub 저장소를 찾아 **[Import]** 클릭
3. 자동 감지된 Vite 설정 확인:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. **[Deploy]** 버튼을 클릭하면 약 20초 안에 전 세계로 배포 완료됩니다!
