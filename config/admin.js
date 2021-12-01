module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '831a9ea86da8e9dd0211061fb5da241f'),
  },
});
