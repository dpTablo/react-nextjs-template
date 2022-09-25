import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import singletonRouter from 'next/router';

import LoginPage from '@pages/login.page';
import { LoginService } from '@service/LoginService';

/* Router Mocking */
jest.mock('next/router', () => require('next-router-mock'));
jest.mock('next/dist/client/router', () => require('next-router-mock'));

jest.mock('../service/LoginService');

describe('Login', () => {
    beforeAll(() => {});

    it('로그인 성공', async () => {
        // given
        const userId = 'user1';
        const password = '1234';

        jest.spyOn(singletonRouter, 'push');

        const loginService: LoginService = {
            login: jest.fn(),
        };

        const { getByLabelText } = render(
            <LoginPage loginService={loginService} />,
        );

        // when
        const userIdInput = getByLabelText('userId');
        const passwordInput = getByLabelText('password');

        fireEvent.change(userIdInput, { target: { value: userId } });
        fireEvent.change(passwordInput, { target: { value: password } });

        const loginButton = getByLabelText('loginButton');
        fireEvent.click(loginButton);

        await screen.findByLabelText('loginButton');

        // then
        expect(loginService.login).toHaveBeenCalledWith(userId, password);
        expect(singletonRouter.push).toHaveBeenCalledWith('/dashboard');
    });
});
