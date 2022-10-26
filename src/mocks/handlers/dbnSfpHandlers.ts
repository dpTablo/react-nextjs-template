import fs from 'fs';
import path from 'path';
import { rest } from 'msw';

export const dbnSfpHandlers = [
    rest.get(
        'https://api.dptablo.com/v1/dbnSfp/sample',
        (request, response, context) => {
            const data = fs.readFileSync(
                path.resolve(
                    __dirname,
                    './src/mocks/handlers/dbnSfp_sample.json',
                ),
                {
                    encoding: 'utf8',
                    flag: 'r',
                },
            );

            return response(context.status(200), context.json(data));
        },
    ),
];
