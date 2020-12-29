module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1338),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '6e91b05188c9bb9fe4b4e3f1c0dfa58a'),
    },
  },
});
