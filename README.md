# 포켓몬 도감 프로젝트 (PokeDex)

## 📱 프로젝트 소개
React를 활용한 포켓몬 도감 웹 애플리케이션입니다. 다양한 상태 관리 방식을 실험하고 비교해본 프로젝트로, 사용자는 포켓몬을 선택하여 자신만의 포켓몬 팀을 구성할 수 있습니다.

## 🛠️ 기술 스택
![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=black&style=flat)
![Redux Toolkit](https://img.shields.io/badge/-Redux_Toolkit-764ABC?logo=redux&logoColor=white&style=flat)
![Styled-components](https://img.shields.io/badge/-Styled_components-DB7093?logo=styled-components&logoColor=white&style=flat)
![React Router DOM](https://img.shields.io/badge/-React_Router_DOM-CA4245?logo=react-router&logoColor=white&style=flat)
![React-toastify](https://img.shields.io/badge/-React_toastify-FF5722?logo=react&logoColor=white&style=flat)

## 🌟 주요 기능
1. **포켓몬 선택 및 관리**
   - 최대 6마리의 포켓몬 선택 가능
   - 선택한 포켓몬 실시간 대시보드 표시
   - 중복 선택 방지 기능

2. **포켓몬 상세 정보**
   - 각 포켓몬의 상세 정보 확인
   - 타입, 능력치 등 정보 제공
   - 이전 페이지 이동 기능

3. **반응형 디자인**
   - 모바일, 태블릿, 데스크톱 대응
   - 디바이스별 최적화된 레이아웃

## 📁 프로젝트 구조
```
src/
├── components/           # 재사용 가능한 컴포넌트
│   ├── common/          # 공통 컴포넌트
│   ├── layout/          # 레이아웃 관련 컴포넌트
│   └── pokemon/         # 포켓몬 관련 컴포넌트
├── constants/           # 상수 및 Mock 데이터
├── context/            # Context API 관련 파일
├── hooks/              # 커스텀 훅
├── pages/              # 페이지 컴포넌트
├── redux/              # Redux 관련 파일
├── shared/             # 라우터 등 공유 파일
└── styles/             # 전역 스타일
```

## 📂 브랜치 구조 및 구현 방식

### 메인 브랜치
- **main (Redux Toolkit)**
  - 최종 구현체
  - Redux Toolkit을 활용한 전역 상태 관리
  - 모든 스타일링 및 기능 구현 완료

### 상태 관리 실험
- **context**
  - Context API를 활용한 구현
  - 기본적인 기능 구현에 초점
  - 상태 관리 패턴 학습 목적

- **prop-drilling**
  - Props만을 활용한 구현
  - 컴포넌트 간 데이터 전달 패턴 학습
  - 상태 관리 없이 구현하는 방식 실험

### 기능 개선 브랜치
- **react-toastify**: 알림 기능 개선
- **refactor/cleanup**: 코드 정리 및 최적화
- **refactor/component-button**: 버튼 컴포넌트 리팩토링
- **style-global**: 전역 스타일 시스템 구축

## 💡 상태 관리 방식 비교

### Redux Toolkit (main)
- **장점**
  - 강력한 개발자 도구
  - 미들웨어 지원
  - 예측 가능한 상태 관리
- **단점**
  - 초기 설정 복잡
  - 작은 프로젝트에서는 과도할 수 있음

### Context API
- **장점**
  - React 내장 기능
  - 간단한 설정
  - 중간 규모 프로젝트에 적합
- **단점**
  - 복잡한 상태 관리에는 한계
  - 성능 최적화가 어려움

### Props Drilling
- **장점**
  - 구현이 단순
  - 데이터 흐름이 명확
  - 작은 프로젝트에 적합
- **단점**
  - 컴포넌트 깊이가 깊어지면 복잡
  - 유지보수가 어려움

## 🚀 설치 및 실행
```bash
# 프로젝트 클론
git clone [repository URL]

# 종속성 설치
npm install

# 개발 서버 실행
npm run dev

# 다른 구현 방식 확인
git checkout context
git checkout prop-drilling
```

## 🔍 프로젝트 특징
- 다양한 상태 관리 패턴 실험
- 재사용 가능한 컴포넌트 설계
- 깔끔하고 직관적인 UI/UX
- 모듈화된 컴포넌트 구조
- 확장 가능한 아키텍처
- 사용자 경험 중심 설계

## 📝 향후 개선 사항
- [ ] 포켓몬 검색 기능 추가
- [ ] 애니메이션 효과 개선
- [ ] 성능 최적화
- [ ] 테스트 코드 작성


## 📜 라이선스
This project is licensed under the MIT License