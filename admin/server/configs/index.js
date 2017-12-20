module.exports = {
    port: 8015,
    appKey: 'sup',
    sessionKey: 'milo:sess',
    jwtSecret: 'xxx',
    jwtExpires: 3600,
    hmacSecretKey: 'mmm',
    mongodb: 'mongodb://localhost:27017/test',
    unlessJwt: ['/', '/index', /^\/api\/login/, /^\/api\/register/, /^\/js/, /^\/css/, /^\/images/]
};