# 목차
- [1. 프로젝트 구성](#1.-프로젝트-구성)
- [2. IDE, 개발환경 설정](#2.-IDE,-개발환경-설정)
- [3. 프로젝트 설정](#3.-프로젝트-설정)
---

# 1. 프로젝트 구성
## next.js 12
next.js 12 소개 공식문서

https://nextjs.org/blog/next-12

## typescript
개발언어로 typescript 를 사용한다. 이에 따라 jsx는 tsx로 작성하며 테스트 케이스도 ts 로 작성한다.

## redux
redux, redux toolkit 을 적용하였다.

## Testing
단위 테스트는 기본적으로 아래의 라이브러리를 이용하여 구현한다.
- @testing-library
- jest

mocking도 가급적이면 위의 두 라이브러리에서 제공되는 기능을 활용하는 것을 권장한다.

E2E 테스트에 해당하는 것은 cypress 테스트 케이스로 작성한다.

### next-router-mock
nextjs의 router mocking 을 위하여 [next-router-mock](https://www.npmjs.com/package) 라이브러리를 사용하였다.

## MSW
MSW 라이브러리를 이용한 API Mocking 을 적용하였다.

npm : https://www.npmjs.com/package/msw

env 내의 `NEXT_PUBLIC_API_MOCKING` 속성을 `enable`로 설정하고, NODE_ENV 가 `development` 일 때 동작한다.

## style
3가지의 style 라이브러리가 적용되어 있다.
- scss
- styled-components
- tailwindCSS

### tailwindCSS와 다른 스타일 라이브러리와의 상호운용성
tailwindCSS 와 다른 스타일 라이브러리를 혼용하여 사용하는 경우에 CSS 주입 순서의 오류로 인하여 원하지 않는 렌더링 결과를 얻을 수 있다.

스타일 라이브러리의 특성마다 이 부분에 대하여 설정이 필요하다.

mui 라이브러리에 대해서는 아래 문서를 참조하여 이 부분을 해결하였다.

mui 가이드 문서

https://mui.com/material-ui/guides/interoperability/#tailwind-css

# 2. IDE, 개발환경 설정
## stylelint
사용하는 IDE에서 stylelint를 설정해야 한다.

아래는 WebStorm IDE에서의 설정이다.
![img.png](document/readme/webstorm_stylelint_settings.png)

## [eslint] Delete 'cr' [prettier/prettier] 이슈
`eol`을 `native`로 설정합니다.
```shell
git config --global core.eol native
```

macOS, linux `autocrlf` 를 `input`으로 설정합니다.
```shell
git config --global core.autocrlf input
```

windows 에서는 `autocrlf` 를 `auto`으로 설정합니다.
```shell
git config --global core.autocrlf auto
```

참조 : https://developpaper.com/solution-to-delete-%E2%90%8Deslint-prettier-prettier-error/

# 3. 프로젝트 설정
## Install Tailwind CSS with Next.js
참조 : [공식문서 (Install Tailwind CSS with Next.js) ](https://tailwindcss.com/docs/guides/nextjs)

# 4. 배포
## pm2
ecosystem.config.js pm2로 실행하기 위한 설정이 정의되어 있다.

[실행방법]
--env: NODE_ENV 지정

```bash
pm2 --env production start ecosystem.config.js
```

## docker
### docker build
프로젝트 root 경로에서 아래 명령어를 실행한다.
```bash
docker build -t react-nextjs-template:1.0.0 -f docker/Dockerfile-production .
```

### docker compose
docker/docker-compose.yml 아래 두개의 서비스에 대한 docker 컨테이너를 생성한다.
- nextjs: docker build 포함
- nginx: nextjs의 프록시역할

프로젝트 root 경로에서 아래 명령어를 실행한다.
```bash
docker-compose -f docker/docker-compose.yml up --build -d
```