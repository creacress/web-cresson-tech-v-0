module.exports = {
    apps: [
      {
        name: 'nextjs-app',
        script: 'npm',
        args: 'start',
        instances: 'max',
        exec_mode: 'cluster',
        env: {
          NODE_ENV: 'production',
        },
      },
    ],
  };
  