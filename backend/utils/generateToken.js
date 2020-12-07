import jwt from 'jsonwebtoken';
export const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JSON_TOKEN_SECRET, {
    expiresIn: '30d',
  });
};
