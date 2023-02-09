# 🟣 원티드 프리온보딩 프론트엔드 선발과제

## 1. 프로젝트 실행 방법

1. `git clone` 명령어로 프로젝트 저장소를 복제해주세요.

```
git clone https://github.com/Everylisy/wanted-pre-onboarding-frontend.git
```

2. `npm` 명령어로 패키지를 설치해주세요.

```
npm install
```

3. 패키지 설치가 완료되면, 아래 명령어로 웹 어플리케이션을 실행해주세요.

```
npm start
```

<br/>

## 2. 프로젝트 데모 영상

### ✅ 로그인, 회원가입 / 리다이렉트

https://user-images.githubusercontent.com/60170829/217871112-4459d119-1470-41d5-9240-09aeb1df314a.mp4

<br/>

### ✅ TODO LIST / 로그아웃

https://user-images.githubusercontent.com/60170829/217871630-f896d8f6-a9ad-4e19-89bd-e0b486192c41.mp4

<br/>

## 3. 기술 스택 및 파일 구조

### 기술 스택

- `React`, `react-router-dom`, `Axios`, `styled-components`

<br />

<details>
<summary><b>파일 구조도</b></summary>

```
src
 ┣ components
 ┃ ┃
 ┃ ┣ AuthUI
 ┃ ┃ ┣ AskRedirect.jsx
 ┃ ┃ ┣ Button.jsx
 ┃ ┃ ┣ Input.jsx
 ┃ ┃ ┣ InputValidation.jsx
 ┃ ┃ ┗ Layout.jsx
 ┃ ┃
 ┃ ┣ Todo
 ┃ ┃ ┣ AddTodo.jsx
 ┃ ┃ ┣ CheckBox.jsx
 ┃ ┃ ┣ DelTodo.jsx
 ┃ ┃ ┣ EditTodo.jsx
 ┃ ┃ ┗ TodoItem.jsx
 ┃ ┃
 ┃ ┗ TodoUI
 ┃ ┃ ┣ Button.jsx
 ┃ ┃ ┣ Input.jsx
 ┃ ┃ ┣ Layout.jsx
 ┃ ┃ ┗ LogoutButton.jsx
 ┃
 ┣ contexts
 ┃ ┣ AccessTokenContext.jsx
 ┃ ┗ AccessTokenProvider.jsx
 ┃
 ┣ pages
 ┃ ┣ SignIn.jsx
 ┃ ┣ SignUp.jsx
 ┃ ┗ Todo.jsx
 ┃
 ┣ api.js
 ┣ App.jsx
 ┣ GlobalStyle.js
 ┣ index.jsx
 ┗ Router.js
```

</details>
<br/>