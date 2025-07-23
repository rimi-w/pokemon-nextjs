## 과제 정보

### **주제**: Next.js 14을 사용한 포켓몬 도감 구현해보기

[포켓몬 도감](https://oz-next-pokemon.vercel.app/)

### 사용 API

[Documentation - PokéAPI](https://pokeapi.co/docs/v2#pokemon)

### **학습 목표**:

1. **파일 기반 라우팅**: Next.js 14의 파일 기반 라우팅 시스템을 사용해 페이지를 구성합니다.
2. **API 라우트 작성**: 서버 측에서 데이터를 제공하는 API 라우트를 작성하고, 데이터를 클라이언트에서 가져옵니다.
3. **데이터 페칭**: 서버 측에서 데이터를 가져와 클라이언트에 표시하는 방법을 학습합니다.
4. **레이아웃 구성**: Next.js 13의 레이아웃 시스템을 사용해 공통 레이아웃을 구성합니다.
5. **404 페이지 처리**: 존재하지 않는 페이지에 대한 404 에러 페이지를 작성합니다.

### **복습할 개념 체크 리스트**:

- [ ]  **파일 기반 라우팅**
    - Next.js의 파일 기반 라우팅 시스템을 사용해 페이지를 구성하는 방법을 복습하세요.
- [ ]  **API 라우트 작성**
    - `route.js` 파일을 작성해 서버 측에서 데이터를 제공하고, 클라이언트에서 이를 호출하는 방법을 복습하세요.
- [ ]  **서버 사이드 데이터 페칭**
    - `fetch`를 사용해 서버 측에서 데이터를 가져와 페이지에 표시하는 방법을 복습하세요.
- [ ]  **공통 레이아웃 구성**
    - `layout.js` 파일을 작성해 모든 페이지에 공통 레이아웃을 적용하는 방법을 복습하세요.
- [ ]  **404 페이지 작성**
    - `not-found.js` 파일을 작성해 존재하지 않는 페이지에 대한 404 에러 페이지를 처리하는 방법을 복습하세요.

### **기본 요구 사항**:

### 1. **Next.js 프로젝트 설정**

- 터미널을 열고 다음 명령어를 실행하여 새로운 Next.js 14 프로젝트를 생성합니다.
    
    ```bash
    npx create-next-app@14
    ```
    
- 기본 설정을 사용하여 프로젝트를 생성합니다.
    
    
    - **설정 보기**
        - **What is your project named?**
            - 프로젝트 이름을 설정합니다
            - 단, 이름을 설정할 때는 영문 소문자,`-`, `_` 만을 이용해야합니다.
        - **Would you like to use TypeScript?**
            - TypeScript 사용여부를 묻습니다.
            - JavaScript로 사용하기 위해 `No`를 선택합니다.
        - **Would you like to use ESLint?**
            - ESLint 사용여부를 묻습니다.
            - ESLint?
                - ESLint란, JavaScript 문법 오류, 코드 스타일, 버그 가능성 등을 찾아주는 도구입니다.
                - ESLint를 사용하는 것이 추천되지만, 설정하는데 시간이 걸리거나 사용 중간에 설정하는 경우도 많으니 상황에 맞춰 사용하시길 바랍니다.
                - [참고 자료](https://eslint.org/)
                
                [Find and fix problems in your JavaScript code - ESLint - Pluggable JavaScript Linter](https://eslint.org/)
                
        - **Would you like to use Tailwind CSS?**
            - Tailwind CSS 사용여부를 묻습니다.
            - 사용하는 경우, `Yes`를 선택합니다.
        - **Would you like to use `src/` directory?**
            - 모든 내용을 src 폴더를 사용해 src 내부에 넣을 것인지 묻습니다.
            - 편의에 따라 선택합니다.
        - **Would you like to use App Router? (recommended)**
            - Route 방식을 묻습니다. App Router를 사용하는 것이 추천(recommended)되는 사항입니다.
            - `No`: Page Router 사용
            - `Yes`: App Router 사용
        - **Would you like to customize the default import alias (@/*)?**
            - import 를 사용할 때 상단 표기를 커스텀할 것인지 묻습니다.
            - `Yes`: `@` 를 선택, 경로를 `@/components/Main` 과 같이 표기합니다. (No)
            - `No`: `*` 를 선택, 경로를 주로 상대경로로 표기합니다.( `../../components/Main`)

### 2. **라우팅 구성**

1. **메인 페이지 (`/`)**
    - `app/page.js` 파일을 작성하여 포켓몬 카드를 나열한 페이지를 구성합니다.
        
    
        
2. **포켓몬 디테일 페이지 (`/deatil/[pokemonId]`)**
    - `app/detail/[pokemonId]/page.js` 파일을 작성하여 API에서 포켓몬 데이터를 가져와 화면에 표시합니다.
    - `[pokemonId]` 폴더는 `params` 객체에서 `params.pokemonId` 형식으로 데이터를 가져올 수 있습니다.
        
    
        

### 3. **API 라우트 작성**

1. **포켓몬 데이터 API (`/api/pokemon`)**
    - `app/api/pokemon/route.js` 파일을 생성하여 전체 포켓몬 데이터를 반환하는 `GET` 요청 함수를 작성합니다.
    - 반환할 데이터 예시
        
        ```json
        {
          pokemonData: [
          {
            id: 1,
            name: '이상해씨',
            description: '태어났을 때부터 등에\n이상한 씨앗이 심어져 있으며\n몸과 함께 자란다고 한다.',
            front: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
            back: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png'
          },
          {
            id: 2,
            name: '이상해풀',
            description: '꽃봉오리가 등에 붙어 있으며\n양분을 흡수해가면\n커다란 꽃이 핀다고 한다.',
            front: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
            back: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png'
          },
          {
            id: 3,
            name: '이상해꽃',
            description: '큰 꽃잎을 펼쳐\n햇빛을 받고 있으면\n몸에 힘이 넘쳐흐른다.',
            front: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
            back: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/3.png'
          },
          
        //  .../
        }
        ```
        
2. **포켓몬 디테일 데이터 API (`/api/pokemon/[pokemonId]`)**:
    - `app/api/pokemon/[pokemonID]/route.js` 파일을 생성하여 개별 포켓몬 데이터를 반환하는 `GET` 요청 함수를 작성합니다.
    - 반환할 데이터 예시
        
        ```json
        {
          id: '2',
          name: '이상해풀',
          description: '꽃봉오리가 등에 붙어 있으며\n양분을 흡수해가면\n커다란 꽃이 핀다고 한다.',
          front: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
          back: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png'
        }
        ```
        

### 4. **레이아웃 구성**

1. **전역 레이아웃 (`/layout.js`)**
    - `app/layout.js` 파일을 작성하여 네비게이션 바를 포함한 공통 레이아웃을 설정합니다.
    - 네비게이션 바에는 메인 페이지로 이동할 수 있는 링크를 포함합니다.
2. **전역 스타일링 (`/global.css`)**
    - `app/global.css` 파일을 작성하여 프로젝트의 전체적인 스타일을 정의합니다.

### 5. **404 페이지 작성**

1. **404 페이지 (`/not-found.js`)**
    - `app/not-found.js` 파일을 작성하여 존재하지 않는 페이지에 접근했을 때 표시될 404 에러 페이지를 만듭니다.
    - 404 페이지에는 오류 메시지와 홈으로 돌아가는 버튼을 포함합니다.

### 6. **UI 구성 및 데이터 페칭**

1. **메인 페이지 (`/`)**
    - `fetch`를 사용해 `/api/pokemon` 라우트에서 제공하는 데이터를 가져오고, 이를 화면에 표시합니다.
    - 데이터 요청이 실패할 경우 사용자에게 오류 메시지를 표시합니다.
2. **포켓몬 디테일 페이지 (`/detail/[pokemonId]`)**
    - `fetch`를 사용해 `/api/pokemon/[pokemonId]` 라우트에서 제공하는 데이터를 가져오고, 이를 화면에 표시합니다.
    - 데이터 요청이 실패할 경우 사용자에게 오류 메시지를 표시합니다.

### 도전과제

1. **찜 목록 만들기**
    - 전역 상태를 활용하여 찜 목록을 만들어보세요.
    - 전역 상태를 다룰 때, `use client` 를 잘 활용해야합니다.
        - `use client` 란?
            - Next.js는 `server` 컴포넌트와 `client` 컴포넌트로 나뉘며, 렌더링하는 위치가 달라집니다.
            - `use client`는 해당 컴포넌트를 `client` 컴포넌트로 지정하여 사용자의 환경에서 렌더링하는 방식입니다. `use client`를 남발할 경우, Next.js 의 `server` 컴포넌트 활용에 대한 이점이 사라지니 유의합니다.
            - Next.js 14의 경우 `use client`를 사용하지 않으면 `server` 컴포넌트로 인식합니다.
    - 새로운 API 라우트 파일과 페이지 파일을 생성하고, 상태를 관리하여 찜 목록을 관리합니다.
2. **검색 만들기**
    - API 를 확장하여 검색기능을 만들어보세요
        - 활용 API 주소: `https://pokeapi.co/api/v2/pokemon/{name}/`
        
        [Documentation - PokéAPI](https://pokeapi.co/docs/v2#pokemon)
        
3. **스타일링 커스터마이징**
    - 각 페이지의 스타일을 개성 있게 수정해보세요.
    - CSS 파일을 수정하여 페이지의 디자인을 개선합니다.
