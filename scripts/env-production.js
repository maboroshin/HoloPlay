const shell = require('shelljs');

const envs = [
  {
    value: 'SENTRY_DSN_KEY',
    property: process.env.SENTRY_DSN_KEY
  },
  {
    value: 'YOUTUBE_AUDIO_SERVER_API_URL',
    property: process.env.YOUTUBE_AUDIO_SERVER_API_URL
  },
  {
    value: 'GITHUB_RELEASE',
    property: process.env.GITHUB_RELEASE
  }
];

envs.forEach(({ value, property }) =>
  shell.exec(`echo ${value}=${property} >> .env`)
);
