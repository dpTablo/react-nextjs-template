import { setupWorker, SetupWorkerApi } from 'msw';
import { defaultHandlers } from '@mocks/handlers/defaultHandlers';
import { loginHandlers } from '@mocks/handlers/loginHandlers';
import { dbnSfpHandlers } from '@mocks/handlers/dbnSfpHandlers';

export const worker: SetupWorkerApi = setupWorker(
    ...defaultHandlers,
    ...loginHandlers,
    ...dbnSfpHandlers,
);
