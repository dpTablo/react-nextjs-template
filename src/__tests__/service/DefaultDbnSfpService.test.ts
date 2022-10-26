import DefaultDbnSfpService from '@service/DefaultDbnSfpService';
import { server } from '@mocks/server';

describe('DefaultDbnSfpService', () => {
    beforeAll(() => {
        server.listen();
    });

    afterEach(() => server.resetHandlers());

    afterAll(() => server.close());

    it('getSample - 기본테스트', async () => {
        // given
        const service = new DefaultDbnSfpService();

        // when
        const data = await service.getSample();

        // then
        expect(data).toBeTruthy();
    });
});
