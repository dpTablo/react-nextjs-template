import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import DbnSfpExamplePage from '@pages/dbnSfpExample.page';

import DefaultDbnSfpService from '@service/DefaultDbnSfpService';
import DbnSfpService from '@service/DbnSfpService';
jest.mock('../service/DefaultDbnSfpService');
const mockDbnSfpService = jest.mocked(DefaultDbnSfpService, true);

describe('dbnSfpExample Page', () => {
    beforeAll(() => {
        mockDbnSfpService.mockClear();
    });

    it('로그인 성공', async () => {
        // given
        jest.spyOn(mockDbnSfpService, 'getSample');
        const a: DbnSfpService = mockDbnSfpService;

        const { getByLabelText } = render(
            <DbnSfpExamplePage dbnSfpService={a} />,
        );

        // when
        const requestButton = getByLabelText('샘플데이터 요청');
        fireEvent.click(requestButton);
        await screen.findByLabelText('loginButton');

        // then
        expect(mockDbnSfpService).called;
    });
});
