# DO IT

`DO IT`은 Next.js와 Tailwind CSS, TypeScript를 사용하여 만든 Todo List 웹 애플리케이션입니다.  
---

## 🔧 사용 기술

- **Frontend:** Next.js 15, React 18, TypeScript
- **Styling:** Tailwind CSS
- **API 통신:** Fetch API
- **배포:** Vercel

---

## 🎬 주요 기능 시연

| 할 일 생성 및 완료 상태 변경 | 할 일 수정 및 삭제 |
|---------------------------|-----------------|
| [screen-capture (2).webm](https://github.com/user-attachments/assets/c776a433-c2c9-4520-9868-d29750c20ccb) | [screen-capture (3).webm](https://github.com/user-attachments/assets/d16fc5ab-09c2-4690-9868-14ea7de9dec8) |


---

## ⚡ 프로젝트 특징

- 할 일 생성, 수정, 삭제 가능
- 완료 여부 체크 및 UI 즉시 반영
- 이미지 첨부 및 미리보기 기능
- 서버 액션(Server Actions)으로 동기화
- 반응형 레이아웃 지원

---

DO-IT/
├─ app/                # 앱 디렉터리
├─ components/         # 재사용 컴포넌트
├─ features/           # 페이지별 주요 기능 컴포넌트
├─ lib/                # API 요청 및 서버 액션
├─ assets/             # 이미지 파일 (svgr)
├─ public/             # 이미지 파일
├─ types/              # TypeScript 타입 정의
└─ package.json
