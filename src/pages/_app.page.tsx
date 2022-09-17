import React from 'react';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { createWrapper } from 'next-redux-wrapper';
import '../styles/globals.scss';
import { store } from '@store/store';

if (
    process.env.NEXT_PUBLIC_API_MOCKING === 'enable' &&
    process.env.NODE_ENV === 'development'
) {
    console.log('=============================================');
    console.log('========== MSW API MOCKING RUNNING ==========');
    console.log('=============================================');

    /** MSW */
    require('../mocks');
}
const makeStore = () => {
    return store;
};
const wrapper = createWrapper(makeStore);

const App = ({ Component, pageProps }: AppProps) => {
    return <Component {...pageProps} />;
};

export default wrapper.withRedux(App);
