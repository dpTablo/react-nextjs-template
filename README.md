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


### tailwind-styled-component
github 문서 참고

https://github.com/MathiasGilson/tailwind-styled-component

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

