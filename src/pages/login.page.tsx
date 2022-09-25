import React, { useState, FC, ReactElement } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import loginPageStyled from './login.page.module.scss';
import { LoginService } from '../service/LoginService';

interface LoginProps {
    loginService: LoginService;
}

interface LoginState {
    userId: string;
    password: string;
}

const LoginPage = styled.div.attrs({
    className: 'flex h-screen items-screen md:flex-row flex-col-reverse',
})``;

/** FC 페이지 예제 */
const Login: FC<LoginProps> = ({ loginService }): ReactElement => {
    const [state, setState] = useState<LoginState>({
        userId: '',
        password: '',
    });

    const router = useRouter();

    const onClickLoginButton = async () => {
        try {
            validateLogin();
            loginService.login(state.userId, state.password);
            goToDashBoardPage();
        } catch (error) {
            // TODO 예외 처리
            console.log(error);
        }
    };

    const validateLogin = () => {
        if (state.userId.length === 0 || state.password.length === 0) {
            throw new Error('아이디 또는 비밀번호를 입력해 주세요.');
        }
    };

    const goToDashBoardPage = () => {
        router.push('/dashboard');
    };

    const onChangeHandlerForInput = (
        event: React.FormEvent<HTMLInputElement>,
    ) => {
        const newState = Object.assign({}, state);

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        newState[event.currentTarget.name] = event.currentTarget.value;
        setState(newState);
    };

    return (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        <LoginPage className={loginPageStyled.loginPage}>
            <form>
                <input
                    name="userId"
                    type="text"
                    value={state?.userId}
                    aria-label="userId"
                    placeholder="아이디"
                    autoComplete="on"
                    onChange={onChangeHandlerForInput}
                />
                <input
                    name="password"
                    type="password"
                    value={state?.password}
                    aria-label="password"
                    placeholder="비밀번호"
                    autoComplete="off"
                    onChange={onChangeHandlerForInput}
                />
                <button
                    name="loginButton"
                    type="button"
                    aria-label="loginButton"
                    onClick={onClickLoginButton}
                >
                    로그인
                </button>
            </form>
        </LoginPage>
    );
};

export default Login;
