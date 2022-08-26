# 36기 1차 프로젝트 'BODYLIKE' 
![스크린샷 2022-08-26 오후 4 28 45](https://user-images.githubusercontent.com/107386533/186849064-278872a7-fc09-4ac6-bb1f-77d3d01f0958.png)

- 바디 용품 커머스 사이트 '바디럽'을 클론하였습니다. 
- 외부 라이브러리 사용 없이, React CRA 툴을 사용하여 구현하였습니다. 

## 개발 기간
- 2022년 8월 16일 ~ 2022년 8월 25일 10일 

## 팀 코너 
- 프론트엔트 개발자 : 최규선, 조은지, 조민재
- 벡엔드 개발자 : 이지현, 백민석

## 사용 기술 
- 프론트엔드 : JavaScript, React.js, Sass
- 백엔드 : Node.js, MySQL 8.0, Postman, Express 
- 협업 툴 : Trello, Slack

## 구현 기능 
- 최규선 : 메인 페이지, 페이지네이션, 리뷰 페이지 
- 조은지 : 로그인/회원가입 페이지, 상품 상세 페이지
- 조민재 : 내비게이션 바/푸터, 상품 검색 기능, 장바구니 페이지


#### 로그인/회원가입 
![로그인](https://blog.kakaocdn.net/dn/TYawd/btrKFr0YT0v/lrExycAY8kPbTYk4yINruk/img.gif)
- 로그인창에서 회원가입 버튼 누를시 회원가입 창으로 넘어감
- 회원가입창/ 로그인창에서 아이디 창 '@', 5글자 && 비밀번호 창 5글자 이상 입력시 회원가입 버튼 활성화 (비밀번호 영문 소대문자 없을 시 알림창 뜸)
- 로그인창에서 id, pw 기입 후 로그인 버튼 누를 시 서버와 통신 후 로컬 스토리지에 토큰 발급, 메인창으로 넘어감
- 왼측 상단 로고 클릭시 메인으로 이동


#### 내비게이션 바 

#### 메인
<<strong>무한케러셀</strong>>
- 매 3초마다 우측으로 슬라이드
- 마지막 페이지에서 우측으로 슬라이드 시 첫번째 슬라이드를 불러옴
- 좌 우 이동 버튼

<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">


![carousel](https://user-images.githubusercontent.com/73376092/186857763-75f04bc4-44d0-4d3a-bdf3-ef63435fd1ff.gif)


<<strong>페이지네이션</strong>>
- 이전/다음 페이지 버튼 
- 페이지 클릭 시 서버에서 해당 페이지에 부합하는 상품들 출력


#### 모든 상품 목록

#### 카테고리별 상품 목록

#### 검색 기능

#### 상품 상세

![상세](https://blog.kakaocdn.net/dn/Gn5Xk/btrKGRDLagS/NbKK2AwoV19ixffDPoDqR0/img.gif)
![상세2](https://blog.kakaocdn.net/dn/dltnVp/btrKGOf9axq/4l3PCVMFlp4R9Y3MfMnBbk/img.gif)


- 상품 정보 옆 리뷰 버튼 누르면 하단 리뷰로 슬라이드
- 상품 카운트 음수로 내려갈 시, 재고 이상 누를 시 알림창 뜸
- 상품 카운트 누른 후 장바구니 클릭 시 로그인 되어 있을 시 모달창 뜨면서 장바구니/쇼핑하기 버튼 뜸, 로그인 안 되어 있을 시 알람창 뜨며 로그인 창으로 이동
- 모달 창에서 장바구니 가기 클릭시 제품이 장바구니에 담기며 장바구니로 이동 




#### 리뷰 
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">


<<strong>리뷰기입창</strong>>


- 기존 상품평 리스트 출력
- 기존 상품평 리스트 부재 시 "상품평작성" 버튼이 있는 섹션 출력
- 상품평 버튼 클릭 시 유효성 검사 후 기입창 열림
- 상품평 기입 후 등록하기 버튼 클릭 시 새 리뷰를 포함한 리뷰리스트 출력
- 내 리뷰보기 클릭 시 사용자 토큰에 부합하는 리뷰들을 출력
- 개별 리뷰 삭제 기능

#### 장바구니 

<br />

# Reference
- 이 프로젝트는 바디럽 사이트를 참조하여 학습목적으로 만들었습니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
- 이 프로젝트에서 사용하고 있는 사진 대부분은 위코드에서 구매한 것이므로 해당 프로젝트 외부인이 사용할 수 없습니다.
