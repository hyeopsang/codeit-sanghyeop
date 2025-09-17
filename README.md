# <img width="59" height="35" alt="Group 33684" src="https://github.com/user-attachments/assets/bb7c852a-eec5-4e17-8bc5-160d6c84759c" /> 할 일 관리 웹 Do It


## ☀️ Project Topic
할 일을 쉽게 관리 할 수 있는 웹 사이트 입니다.

---

## 💻 Site
https://codeit-sanghyeop.vercel.app

---

## 🔧 사용 기술
- **Frontend:** Next.js 15, TypeScript
- **Styling:** Tailwind CSS
- **API 통신:** Fetch API
- **배포:** Vercel

---

## 🗂 페이지별 주요 기능

### 홈 페이지
- 전체 할 일 목록 조회
- 완료 여부 체크
- 할 일 생성 폼
- 반응형 레이아웃

### 할 일 상세 페이지
- 할 일 이름, 메모, 이미지 확인
- 할 일 수정 및 이미지 업로드
- 삭제 기능
- 완료 상태 토글

---

## 🎬 주요 기능 시연

### 1️⃣ 할 일 생성 및 완료 상태 변경
[![할 일 생성 및 완료](https://github.com/user-attachments/assets/c776a433-c2c9-4520-9868-d29750c20ccb)](https://github.com/user-attachments/assets/c776a433-c2c9-4520-9868-d29750c20ccb)

### 2️⃣ 할 일 수정 및 삭제
[![할 일 수정 및 삭제](https://github.com/user-attachments/assets/d16fc5ab-09c2-4690-9868-14ea7de9dec8)](https://github.com/user-attachments/assets/d16fc5ab-09c2-4690-9868-14ea7de9dec8)

---
# 🛠️ React 트러블슈팅 사례

이 문서는 React 프로젝트에서 FormData, 이미지 미리보기, 인라인 편집, 반응형 이미지 구현 등  
실제 프로젝트에서 겪은 트러블슈팅 사례를 정리한 내용입니다.

---

## 1. Server Action에서 이미지 전송 + 미리보기 구현

**문제:**  
- 상태(onChange) 기반 파일 관리 시 FormData 전송 누락  
- 업로드 전 미리보기 기능 구현 필요  

**해결 방법:**  
- `<input type="file" />`를 **ref 기반**으로 관리  
- 선택된 파일을 `URL.createObjectURL(file)`로 미리보기 상태 업데이트  
- 서버 액션 호출 시 ref로 가져온 File 객체를 FormData에 append  

```tsx
const [preview, setPreview] = useState<string | null>(null);
const fileInputRef = useRef<HTMLInputElement>(null);

const handleFileSelect = () => {
  const file = fileInputRef.current?.files?.[0];
  if (!file) return;

  if (file.size > 5 * 1024 * 1024 || !/^[a-zA-Z]+$/.test(file.name.split('.')[0])) {
    alert('파일 유효성 오류');
    fileInputRef.current.value = '';
    return;
  }

  setPreview(URL.createObjectURL(file));
};

const handleSubmit = async () => {
  const file = fileInputRef.current?.files?.[0];
  if (file) {
    const formData = new FormData();
    formData.append('image', file);
    // 서버 액션 호출
  }
};

return (
  <div>
    {preview && <img src={preview} alt="preview" />}
    <button type="button" onClick={() => fileInputRef.current?.click()}>Select Image</button>
    <input type="file" ref={fileInputRef} style={{ display: 'none' }} onInput={handleFileSelect} />
    <button type="button" onClick={handleSubmit}>Upload</button>
  </div>
);
```
## 2. Form 안에 여러 버튼 사용 시 이벤트 처리

**문제:**
- `<form>` 안에 버튼이 여러 개 있을 때, type 미지정 → 모든 버튼이 submit 동작

**해결 방법:**
- submit 아닌 버튼은 `type="button"` 지정
- 필요 시 `e.preventDefault()`로 기본 동작 방지
```tsx
<form onSubmit={handleSubmit}>
  <button type="submit">Submit</button>
  <button type="button" onClick={(e) => { 
    e.preventDefault(); 
    handleOtherClick(); 
  }}>
    Cancel
  </button>
</form>
```
## 3. Form 안에서 클릭 → input 변환 후 텍스트 수정 문제

**문제:**
- 클릭 → input 변환 → onBlur 기반 상태 업데이트 → form submit 시 값 누락

**해결 방법:**
- hidden input 사용 → FormData에 항상 최신 값 포함
- editMode 상태와 무관하게 FormData 전송
```tsx
{editMode ? (
  <input 
    name="name"
    value={inputValue}
    onChange={(e) => setInputValue(e.target.value)}
    autoFocus
    required
  />
) : (
  <>
    <input type="hidden" name="name" value={inputValue} />
    <button type="button" onClick={onClickCheck}>
      {isCompleted ? <CheckIcon /> : <UnCheckedIcon />}
    </button>
    <p onClick={() => setEditMode(true)}>{inputValue}</p>
  </>
)}
```
## 4. 반응형 이미지 구현

**문제:**
화면 크기에 따라 다른 이미지를 표시해야 함

**해결 방법:**
<picture> + <source> + Next.js <Image> 활용
fill + objectFit으로 컨테이너에 맞춰 반응형 적용
```jsx
<picture className="relative w-30 md:w-60 aspect-square">
  <source media="(min-width: 744px)" srcSet="/images/todo-l.svg" />
  <Image
    src={'/images/todo-s.svg'}
    alt="empty image"
    fill={true}
    priority={true}
    style={{objectFit: 'contain'}}
  />
</picture>
```
