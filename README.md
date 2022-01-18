# Team - exceptNull

# Project : NullLedge

## Due 2021.12.28 ~

<div align=center>

## Team info

| Name                                                                                           | Country           | GitHubLink                              |
| ---------------------------------------------------------------------------------------------- | :---------------- | --------------------------------------- |
| Hyunsoo Kim <br /> <img src="https://avatars.githubusercontent.com/dblepart99" width="100" />  | Republic of Korea | [Github](https://github.com/dblepart99) |
| Shin Hyung Jang <br /> <img src="https://avatars.githubusercontent.com/LONGNEW" width="100" /> | Republic of Korea | [Github](https://github.com/LONGNEW)    |
| Bhung Hwi Park <br /> <img src="https://avatars.githubusercontent.com/BHwi" width="100" />     | Republic of Korea | [Github](https://github.com/BHwi)       |

</div>

## 1. Frontend 폴더 구조

- Redux를 위한 폴더
  \_actions_reducers

- Page들 생성해서 넣기
  components/views
- 해당 페이지 관련 css, component들
  components/views/Sections
  => Sections는 예시임(Header, LoginPage)

- 라우팅 처리
  App.js

- 환경변수 설정
  .env

- Higher Order Component(Auth관련 기능들)
  hoc

- 여러 군데에서 쓰여서 밖으로 빼놓는 폴더들
  utils
