import { setupServer, SetupServerApi } from 'msw/node';
import { defaultHandlers } from '@mocks/handlers/defaultHandlers';
import { loginHandlers } from '@mocks/handlers/loginHandlers';
import { dbnSfpHandlers } from '@mocks/handlers/dbnSfpHandlers';

export const server: SetupServerApi = setupServer(
    ...defaultHandlers,
    ...loginHandlers,
    ...dbnSfpHandlers,
);
