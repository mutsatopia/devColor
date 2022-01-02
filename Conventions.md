# Code conventions

## 기본사항

### 1. 들여쓰기

- tab 2번 : 공백 문자 4개

### 2. 문장의 종료

- 한줄의 하나의 문장만, 문장종료시에는 세미콜론 사용`;`

### 3. 명명규칙

- HTML/CSS: `-` **케밥** 케이스 사용
  - 기능-내용 ex)`list-combo`
- JavaScript:
  - 변수,함수: **카멜** 케이스 사용
  - 지역번수/private변수 : `_`로 시작
  - 상수: 영문 대문자 / **스네이크**표기법 사용

---

## HTML

- 속성값에는 큰따옴표를 사용한다 `""`
- 소문자만 사용한다.
  - class는 케밥 케이스를 따른다.
- 목적에 맞는 HTML 태그를 사용한다
  - 시맨틱 태그를 사용한다.
  - style을 위해서만 `div`, `span` 태그를 사용한다.
- 기본언어 설정 / Edge 모드 설정 / UTF-8 설정
  ```html
  <html lang="ko">
    <head>
      <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
      <meta charset="UTF-8" />
    </head>
  </html>
  ```

---

## CSS

- 스타일 지정 시 아이디 대신 클래스를 사용
- 숫자 0 값 이후에는 불필요한 단위를 작성하지 않음

  ```css
  /* Bad */
  padding: 0px;

  /* Good */
  padding: 0;

  flex: 0px; // flex-basis 컴포넌트의 경우 단위가 필요함

  /* Bad */
  .no-border {
    border: none;
  }

  /* Good */
  .no-border {
    border: 0;
  }
  ```

- 속성은 가능한 한 축약형을 사용 `border`, `background`, `margin`...
- CSS 띄어쓰기(개행)
  - 기능이 변경되는 부분 (ex : header은 붙여 쓰다가 main에서는 한 칸 띄우기)
  - section의 규모가 커질 경우 기능 부분마다 띄어쓸 수 있음
- CSS속성 순서(Mozilla+Naver)
  1. display `--객체의 노출여부/표현방식--`
  2. overflow
  3. position `--위치/좌표--`
  4. float
  5. width / height `--크기/여백--`
  6. padding / margin
  7. border / background `--윤곽/배경--`
  8. color / font `--글자/정렬--`
  9. text 관련 속성
  10. animation
  - `위치 선정 > 윤곽 > 외곽 디테일링 > 채색 > 타이포그래피` 와 같이 밖에서부터 안쪽으로의 흐름

---

## JavaScript

- 전역변수를 사용하지 않는다.
- 암묵적 전역변수를 사용하지 않는다.

### 선언과 할당

- `var` 사용 금지 `const`/`let` 사용
- `const` : 값이 변하지 않는 변수
- `let` : 값이 변하는 변수
- `const`를 `let` 보다 위에 선언한다.
- `const`와 `let`은 사용 시점에 선언 및 할당을 한다.
- 외부 모듈과 내부 모듈을 구분하여 사용한다.
  - 외부 모듈과 내부 모듈을 변수 참조할 때, 선언 사이에 공백을 두면 가독성이 좋아진다.
- 자기 참조 할당은 하지 않는다.

### 배열과 객체

- 배열과 객체는 리터럴로 선언한다.

  ```js
  // Bad
  const emptyArr = new Array();
  const arr = new Array(1, 2, 3, 4, 5);

  // Bad - 객체 생성자 사용
  const emptyObj = new Object();
  const obj = new Object();

  // Good
  const emptyArr = [];
  const arr = [1, 2, 3, 4, 5];

  // Good
  const emptyObj = {};
  const obj = {
    pro1: "val1",
    pro2: "val2",
  };
  ```

- 배열 복사시 전개 연산자를 사용한다.
  ```js
  // Good
  const itemsCopy = [...items];
  ```
- 객체 리터럴 정의 시 콜론`:` 앞: 공백X / 뒤: 공백O

  ```js
  // Bad
  var obj = {
    foo: "a",
  };

  // Good
  var obj = {
    foo: "a",
  };
  ```

- [참고: TOAST UI](https://ui.toast.com/fe-guide/)

[git convention]
=> 커밋 메시지 규칙

init : 처음 커밋할 때 ( 환경설정 )
add : 기능 (새로운 기능)
fix : 버그 및 에러 수정
edit : JavaScript 변경시
test : 테스트 (테스트 코드 추가, 수정, 삭제: 비즈니스 로직에 변경 없음)
style: css 변경 시
docs : HTML 변경 시 (class, 구조 변경 시) (수정됨)
ex) 사용예시 :
git commit -sm "style : 로그인화면 css 변경"
