module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: { 
        url: env('DATABASE_URL'),
      },
      options: {
        ssl: true,
      },
    },
  },
});