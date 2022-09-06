react/nextjs 프로젝트 템플릿 입니다.

# 적용 라이브러리

### 1.1.0
```json
"dependencies": {
    "axios": "^0.27.2",
    "next": "12.2.3",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "styled-components": "^5.3.5"
},
"devDependencies": {
    "@testing-library/dom": "^8.16.0",
    "@testing-library/jest-dom": "^5.16.4",
    "@testing-library/react": "^13.3.0",
    "@testing-library/user-event": "^14.3.0",
    "@types/jest": "^28.1.6",
    "@types/node": "18.6.1",
    "@types/react": "18.0.15",
    "@types/react-dom": "18.0.6",
    "@types/styled-components": "^5.1.26",
    "@typescript-eslint/eslint-plugin": "^5.35.1",
    "@typescript-eslint/parser": "^5.35.1",
    "autoprefixer": "^10.4.8",
    "babel-jest": "^28.1.3",
    "cypress": "^10.6.0",
    "eslint": "8.20.0",
    "eslint-config-airbnb-typescript": "^17.0.0",
    "eslint-config-next": "12.2.3",
    "eslint-config-prettier": "^8.5.0",
    "eslint-plugin-import": "^2.26.0",
    "eslint-plugin-prettier": "^4.2.1",
    "eslint-plugin-react": "^7.31.1",
    "eslint-plugin-react-hooks": "^4.6.0",
    "identity-obj-proxy": "^3.0.0",
    "jest-dom": "^4.0.0",
    "jest-environment-jsdom": "^28.1.3",
    "node-mocks-http": "^1.11.0",
    "postcss": "^8.4.16",
    "prettier": "^2.7.1",
    "sass": "^1.54.0",
    "stylelint": "^14.11.0",
    "stylelint-config-standard": "^28.0.0",
    "stylelint-config-standard-scss": "^5.0.0",
    "stylelint-order": "^5.0.0",
    "stylelint-scss": "^4.3.0",
    "tailwindcss": "^3.1.8",
    "ts-jest": "^28.0.7",
    "ts-loader": "^9.3.1",
    "typescript": "4.7.4"
}
```


# stylelint
사용하는 IDE에서 stylelint를 설정해야 한다.

아래는 WebStorm IDE에서의 설정이다.
![img.png](document/readme/webstorm_stylelint_settings.png)

# Install Tailwind CSS with Next.js
참조 : [공식문서 (Install Tailwind CSS with Next.js) ](https://tailwindcss.com/docs/guides/nextjs)

# [eslint] Delete 'cr' [prettier/prettier] 이슈 발생 시
git config 설정을 변경하고 코드를 다시 체크아웃 합니다.
```shell
git config --global core.autocrlf false
```
참조 : https://developpaper.com/solution-to-delete-%E2%90%8Deslint-prettier-prettier-error/