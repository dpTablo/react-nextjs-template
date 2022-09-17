import { rest } from 'msw';

export const defaultHandlers = [
    rest.get('/api/hello', (request, response, context) => {
        return response(
            context.status(200),
            context.json({
                message: 'hello',
            }),
        );
    }),
    rest.get(
        'https://api.dptablo.com/api/user/list',
        (request, response, context) => {
            return response(
                context.status(200),
                context.json([
                    {
                        name: 'dpTablo',
                        email: 'leeyw2355@gmail.com',
                    },
                    {
                        name: 'dpTablo2',
                        email: 'dpTablo@gmail.com',
                    },
                ]),
            );
        },
    ),
];
