import jwt from 'jsonwebtoken'

const secret = '49c03269bf6a4a9c83d1ec5d7abb388d';

export const sign = payload => jwt.sign(payload, secret, { expiresIn: 86400 })
export const verify = token => jwt.verify(token, secret)