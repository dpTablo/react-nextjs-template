import { setupServer, SetupServerApi } from 'msw/node';
import { defaultHandlers } from '@mocks/handlers/defaultHandlers';
import { loginHandlers } from '@mocks/handlers/loginHandlers';

export const server: SetupServerApi = setupServer(
    ...defaultHandlers,
    ...loginHandlers,
);
