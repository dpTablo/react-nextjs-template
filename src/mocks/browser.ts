import { setupWorker, SetupWorkerApi } from 'msw';
import { defaultHandlers } from '@mocks/handlers/defaultHandlers';
import { loginHandlers } from '@mocks/handlers/loginHandlers';

export const worker: SetupWorkerApi = setupWorker(
    ...defaultHandlers,
    ...loginHandlers,
);
