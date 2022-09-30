module.exports = {
    apps: [
        {
            name: 'react-nextjs-template',
            cwd: './',
            script: 'node_modules/next/dist/bin/next',
            args: 'start',
            exec_mode: 'cluster',
            instances: 4,
            autorestart: true,
            listen_timeout: 50000,
            kill_timeout: 5000,
            max_memory_restart: '2G',
            env: {
                NODE_ENV: 'development',
                PORT: '3000',
                NEXT_PUBLIC_API_MOCKING: 'disable',
            },
            env_production: {
                NODE_ENV: 'production',
                PORT: '3333',
                NEXT_PUBLIC_API_MOCKING: 'enable',
            },
        },
    ],
};
