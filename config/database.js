module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', '121.4.97.117'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'gridsome_blog_job'),
        username: env('DATABASE_USERNAME', 'root'),
        password: env('DATABASE_PASSWORD', '31448600'),
      },
      options: {},
    },
  },
});
