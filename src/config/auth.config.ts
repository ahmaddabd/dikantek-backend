export default {
  jwtSecret: process.env.JWT_SECRET || 'secretKey',
  jwtExpiresIn: '1h',
};