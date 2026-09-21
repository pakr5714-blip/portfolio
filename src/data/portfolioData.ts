export interface EducationItem {
  institution: string;
  period: string;
  degree: string;
  description?: string;
}

export interface TrainingItem {
  year: string;
  course: string;
  institution?: string;
  details?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  shortTitle: string;
  category: 'LLM & AI Service' | 'RAG & Agent' | 'Data Analytics & ML';
  period: string;
  overview: string;
  problemAndImpact: string;
  keyFeatures: string[];
  techStack: string[];
  role: string;
  metrics?: string[];
  pipelineSteps?: { step: string; label: string; desc: string }[];
}

export const PERSONAL_INFO = {
  name: '박영규',
  nameEn: 'Young-gyu Park',
  title: 'AI · 데이터 분석 포트폴리오',
  role: 'AI Service Developer & Data Analyst',
  tagline: 'Python과 생성형 AI를 활용한 서비스 개발 및 실용적인 데이터 분석 프로젝트를 수행합니다.',
  introText: [
    'Python과 생성형 AI를 활용한 서비스 개발 및 데이터 분석 프로젝트를 진행하고 있습니다. 글로벌 채용 데이터 분석 및 AI 이력서 최적화, 다국어 식품·화장품 성분 분석, 공공 자전거 이용 데이터 분석 프로젝트를 수행했습니다.',
    '사용자 중심의 직관적인 인터페이스와 실시간 LLM 파이프라인(RAG, ChromaDB, Prompt Engineering)을 구축하여 복잡한 비정형 데이터와 분석 통계를 누구나 쉽게 활용할 수 있는 서비스로 구현하는 데 열정을 쏟고 있습니다.'
  ],
  phone: '(+82) 010-8773-5714',
  email: 'kmkm5714@naver.com',
  location: '대한민국 부산광역시',
  availability: '새로운 기회 및 프로젝트 협업 가능 (Open to Opportunities)',
  statusBadge: 'Open to full-time and contract work',
  githubUrl: 'https://github.com',
  resumeTitle: '박영규_AI_데이터분석_이력서.pdf'
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: '생성형 AI 및 LLM',
    description: '최신 거대 언어 모델 API 활용 및 프롬프트 엔지니어링',
    skills: [
      'OpenAI API (GPT-4.1-nano / mini)',
      'Anthropic Claude',
      'Prompt Engineering',
      'LLM Evaluation (AI-judge)',
      '다국어 질의응답',
      '문서 요약'
    ]
  },
  {
    title: 'AI 서비스 & 웹 애플리케이션 개발',
    description: '인터랙티브 웹 대시보드 및 빠른 프로토타이핑 구현',
    skills: [
      'Python',
      'Streamlit',
      'FastAPI 기초',
      'REST API 연동',
      'API Key 설정 및 보안 관리',
      'Vibe Coding (바이브 코딩)'
    ]
  },
  {
    title: 'LLM 응용 기술 & RAG',
    description: '외부 지식베이스 검색 및 맥락 기반 응답 생성',
    skills: [
      'LangChain',
      'RAG (Retrieval-Augmented Generation)',
      '벡터 데이터베이스 (ChromaDB)',
      '지식베이스 구축',
      '시맨틱 검색'
    ]
  },
  {
    title: '데이터 분석 & 머신러닝',
    description: '대용량 정형/비정형 데이터 전처리, 통계 분석 및 모델링',
    skills: [
      'Pandas',
      'NumPy',
      '데이터 전처리 & 결측치 정제',
      '탐색적 데이터 분석 (EDA)',
      '데이터 시각화',
      'scikit-learn',
      'TF-IDF',
      'Linear Regression',
      'Random Forest',
      'HistGradientBoosting',
      '모델 학습 및 성능 평가'
    ]
  },
  {
    title: '외부 데이터 연동 & 개발 도구',
    description: '신뢰성 있는 외부 API 처리 및 배포 환경',
    skills: [
      'Numbeo API 연동',
      '생계비 지수 데이터 조회',
      'Fallback (대체 데이터) 처리',
      'Jupyter Notebook',
      'VS Code',
      'Streamlit Community Cloud',
      'Git & GitHub'
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'global-hiring-llm-resume',
    title: '글로벌 채용 데이터 분석 및 LLM 기반 맞춤형 이력서 최적화 대시보드',
    shortTitle: '글로벌 채용 데이터 분석 & AI 맞춤형 이력서 최적화',
    category: 'LLM & AI Service',
    period: '프로젝트 진행 완료',
    role: '데이터 수집, 전처리, 연봉/생계비 지수 시각화, LLM 프롬프트 및 Streamlit 대시보드 개발',
    overview:
      '글로벌 채용 데이터 분석을 통해 구직자의 정보 비대칭을 해소하고, 데이터 기반의 개인 맞춤형 이력서 최적화를 지원하는 원스톱 AI 대시보드입니다.',
    problemAndImpact:
      '해외 구직 시 국가별 상이한 채용 문화, 언어 장벽, 환율 및 실질 물가를 반영하지 못한 명목 연봉 정보로 인해 지원자가 겪는 한계를 데이터 분석과 최신 LLM(GPT-4.1)으로 극복했습니다.',
    keyFeatures: [
      '미국·일본·싱가포르 3개국의 채용 데이터를 정밀 분석하여 국가별 채용 시장 동향과 이력서 현지화 전략 도출',
      '국가별·직무별 연봉 분포 및 생계비(Numbeo) 보정 실질 급여 지수 시각화 대시보드 구축',
      '원본 이력서를 목표 국가의 채용 문화·언어·이력서 표준 규격에 맞게 변환하는 LLM 기반 자동 최적화 엔진 구현',
      '국가별 채용 시장 데이터를 기반으로 지원 직무에 맞는 연봉 및 최신 채용 트렌드 코멘트 생성',
      '목표 국가 채용담당자 관점의 AI 적합성 평가(AI-judge) 모듈 개발로 합격 가능성 제고',
      '이력서 첨삭 코멘트와 변경 사유를 목표 언어 및 원어로 상세 피드백 제공',
      'Numbeo 생계비 지수 실시간 조회 연동 및 네트워크 오류 시 안정적인 대체 데이터(Fallback) 로직 적용'
    ],
    techStack: [
      'Python',
      'OpenAI API',
      'GPT-4.1-nano',
      'GPT-4.1-mini',
      'Prompt Engineering',
      'Streamlit',
      'Numbeo API',
      'CSV 데이터 파이프라인'
    ],
    metrics: [
      '미국·일본·싱가포르 3개국 채용 데이터셋 분석',
      'Numbeo 실시간 API 연동 + Fallback 무장애 보장',
      'AI-judge 채용담당자 관점 다각도 평가 점수 제공'
    ],
    pipelineSteps: [
      { step: '01', label: '채용 데이터 수집 & 정제', desc: '미국/일본/싱가포르 직무별 연봉 및 요구 역량 전처리' },
      { step: '02', label: '실질 급여 보정 지수 계산', desc: 'Numbeo API로 도시별 생계비 지수를 연계한 실질 소득 산출' },
      { step: '03', label: 'LLM 현지화 최적화', desc: '타깃 국가의 이력서 포맷 및 톤앤매너에 맞춘 AI 첨삭 및 재작성' },
      { step: '04', label: 'AI-judge 검증 & 피드백', desc: '채용담당자 페르소나를 적용한 서류 적합도 평가 및 상세 사유 도출' }
    ]
  },
  {
    id: 'crossborder-ingredient-rag',
    title: '해외 직구·역직구 식품 및 화장품 성분 분석기',
    shortTitle: '해외 직구·역직구 식품 & 화장품 성분 다국어 RAG 분석기',
    category: 'RAG & Agent',
    period: '프로젝트 진행 완료',
    role: '다국어 성분 지식베이스 구축, ChromaDB 벡터 검색, Claude 프롬프트 설계, 웹 UI 배포',
    overview:
      '한국어·영어·중국어·일본어 4개국어를 지원하여 해외 직구 및 역직구 소비자가 제품 성분을 안전하게 파악할 수 있는 다국어 AI 분석 서비스입니다.',
    problemAndImpact:
      '해외 직구 시 외국어로 표기된 복잡한 성분명과 국내외 알레르기 규제 기준 차이로 인해 발생하는 안전 우려를 Claude 기반 RAG 기술을 통해 해소했습니다.',
    keyFeatures: [
      '사용자의 관심 프로필(알레르기, 피부 타입, 주의 성분)과 제품 성분 정보를 비교하여 잠재적 위험 요소를 알기 쉽게 설명하는 Claude 기반 RAG 파이프라인 구축',
      '복잡하고 방대한 해외 제품 설명 및 긴 문서의 핵심 내용 자동 요약',
      '성분 및 알레르기 관련 전문 지식베이스를 활용한 4개국어(한/영/중/일) 실시간 질의응답 기능 구현',
      'ChromaDB 기반 시맨틱 검색으로 성분 정보와 사용자 프로필을 신속 대조하고 위험 지수 산출',
      '해외 제품 라벨의 표기 방식을 국내 소비자가 친숙한 한국 식품의약품안전처 표준 표시 형식으로 변환',
      '사용자의 건강 관심 사항을 반영한 대체 안전 제품 및 추천 성분 제안 기능',
      'Streamlit 인터페이스 구현 및 Streamlit Community Cloud 환경을 통한 안정적인 웹 배포'
    ],
    techStack: [
      'Python',
      'Anthropic Claude',
      'LangChain',
      'RAG Architecture',
      'ChromaDB (Vector DB)',
      'Streamlit',
      'Streamlit Community Cloud'
    ],
    metrics: [
      '한·영·중·일 4개 국어 지원 지식베이스',
      'ChromaDB 기반 RAG 시맨틱 성분 검색',
      '개인 맞춤형 위험 성분 필터링 및 대체재 추천'
    ],
    pipelineSteps: [
      { step: '01', label: '다국어 라벨 텍스트 입력', desc: '해외 제품 라벨 텍스트 또는 문서 입력 및 언어 자동 감지' },
      { step: '02', label: 'ChromaDB 벡터 검색', desc: '성분/알레르기 지식베이스에서 관련 주의 성분 및 규제 정보 추출' },
      { step: '03', label: 'Claude RAG 추론', desc: '사용자 프로필과 대조하여 잠재 위험성 분석 및 핵심 내용 요약' },
      { step: '04', label: '한국형 표준 라벨 변환', desc: '표준 표시 규격 변환 보고서 및 안전 대체 성분 추천 출력' }
    ]
  },
  {
    id: 'public-bike-eda-analytics',
    title: '공공 자전거 사용량 및 대여 기록 데이터 분석 프로젝트',
    shortTitle: '공공 자전거 대여 반납 빅데이터 이용 패턴 EDA',
    category: 'Data Analytics & ML',
    period: '프로젝트 진행 완료',
    role: '빅데이터 전처리, 통계 검정, 시계열 추이 시각화, 사용자 세그먼트 분석',
    overview:
      '약 55만 건 이상의 공공 자전거 대여·반납 데이터를 활용하여 시민들의 도시 이동 패턴과 사용자 성향을 다각도로 분석한 프로젝트입니다.',
    problemAndImpact:
      '시간대별 자전거 쏠림 현상과 특정 대여소의 거점 재배치 문제를 해결하기 위해, 정밀한 EDA 기법으로 핵심 패턴을 규명하고 데이터 기반의 운영 인사이트를 도출했습니다.',
    keyFeatures: [
      'Pandas를 활용하여 약 55만 건의 대여·반납 일시, 대여소 위치, 이용시간, 이용거리 및 이용자 정보 결측치 정제와 대용량 데이터 전처리',
      '대여일시 및 반납일시 시계열 분해를 기반으로 출퇴근 시간대별 및 평일/주말 요일별 자전거 이용량 변동 추이 심층 분석',
      '대여소별 대여·반납 빈도 비교 분석을 통해 출근 집중 거점과 반납 쏠림 인기 대여소 클러스터 도출',
      '이용자의 연령대 및 성별에 따른 자전거 이용 거리와 시간대별 성향 차이를 통계적으로 비교 검증',
      'Jupyter Notebook 환경에서 체계적인 파이프라인 구성 및 재현 가능한 데이터 분석 워크플로우 확립'
    ],
    techStack: [
      'Python',
      'Pandas',
      'NumPy',
      '데이터 전처리',
      '탐색적 데이터 분석 (EDA)',
      '시계열 통계 분석',
      'Jupyter Notebook'
    ],
    metrics: [
      '550,000+ 건 대규모 이동 데이터 전처리',
      '시간대별/요일별 이용 패턴 도출',
      '대여소별 수급 불균형 인사이트 도출'
    ],
    pipelineSteps: [
      { step: '01', label: '대용량 데이터 수집·정제', desc: '55만 건 결측치 처리, 이상치 제거 및 시계열 타임스탬프 파싱' },
      { step: '02', label: '시계열 및 요일별 EDA', desc: '출퇴근 피크 타임 및 주말 레저 목적 이용 패턴 분리 분석' },
      { step: '03', label: '공간 거점 분석', desc: '대여소별 입출고 비율 비교로 자전거 재배치 필요 거점 식별' },
      { step: '04', label: '사용자 세그먼트 분석', desc: '연령/성별에 따른 평균 주행 거리와 속도, 체류 패턴 통계화' }
    ]
  }
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    institution: '부산외국어대학교 (Busan University of Foreign Studies)',
    period: '2021.03 ~ 현재 (재학)',
    degree: '컴퓨터공학과 학사 과정',
    description: '컴퓨터공학 전공 지식과 다국어 글로벌 소통 역량을 바탕으로 AI 및 데이터 분석 역량을 심화하고 있습니다.'
  }
];

export const TRAINING_COURSES: TrainingItem[] = [
  {
    year: '2026년',
    course: '다국어 AI 에이전트 개발 고급과정',
    details: '고급 멀티모달 에이전트 설계, LangChain/LangGraph를 활용한 자율 협업 파이프라인 및 고성능 RAG 최적화'
  },
  {
    year: '2026년',
    course: '다국어 AI 에이전트 개발 중급과정',
    details: '벡터 데이터베이스(ChromaDB) 기반 RAG 구축, 글로벌 다국어 프롬프트 엔지니어링 및 외부 API 연동'
  },
  {
    year: '2025년',
    course: 'Python과 생성형 AI를 이용한 컴퓨터프로그래밍 입문',
    details: 'Python 기초 알고리즘, OpenAI API 연동 프로그래밍 및 생성형 AI 기반 웹 서비스 구현 기초'
  }
];
