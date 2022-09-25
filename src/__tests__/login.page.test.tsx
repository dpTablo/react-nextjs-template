import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import LoginPage from '@pages/login.page';
import { LoginService } from '@service/LoginService';

/* Router Mocking */
import mockNextRouter from '../test/NextMockRouter';

jest.mock('../service/LoginService');

describe('Login', () => {
    beforeAll(() => {});

    it('로그인 성공', async () => {
        // given
        const userId = 'user1';
        const password = '1234';

        const loginService: LoginService = {
            login: jest.fn(),
        };

        const { getByLabelText } = render(
            <LoginPage loginService={loginService} />,
        );

        const mockRouter = mockNextRouter({});
        jest.spyOn(mockRouter, 'push');
        jest.spyOn(loginService, 'login');

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
        expect(mockRouter.push).toHaveBeenCalledWith('/dashboard');
    });
});
