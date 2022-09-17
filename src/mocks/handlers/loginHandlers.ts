import { rest } from 'msw';

export const loginHandlers = [
    rest.get(
        'https://api.baroder.co.kr/v1/login',
        (request, response, context) => {
            return response(
                context.status(200),
                context.json({
                    accessToken: 'klsdlkjfskljf982f2cn8349238un4cr9u39re',
                    refreshToken: 'klx38p4mox13iun3ciu4tu34lbc3rjcklhwqe',
                }),
            );
        },
    ),
];
