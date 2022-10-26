import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import DbnSfpExamplePage from '@pages/dbnSfpExample.page';
import DbnSfpService from '@service/DbnSfpService';

describe('dbnSfpExample Page', () => {
    beforeAll(() => {
        // mockDbnSfpService.mockClear();
    });

    it('정상적인 dbnSfp 샘플 데이터 요청', async () => {
        // given
        const mockDbnSfpService: DbnSfpService = {
            getSample: jest.fn(),
        };

        const { getByLabelText } = render(
            <DbnSfpExamplePage dbnSfpService={mockDbnSfpService} />,
        );

        // when
        const requestButton = getByLabelText('requestButton');
        fireEvent.click(requestButton);

        // then
        expect(mockDbnSfpService.getSample).toHaveBeenCalled();
    });
});
