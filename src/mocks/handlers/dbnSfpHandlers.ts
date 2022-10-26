import { rest } from 'msw';
import dbnSfpSampleJsonData from './dbnSfp_sample.json';

export const dbnSfpHandlers = [
    rest.get(
        'https://api.dptablo.com/v1/dbnSfp/sample',
        (request, response, context) => {
            return response(
                context.status(200),
                context.json(dbnSfpSampleJsonData),
            );
        },
    ),
];
