module.exports = {
    HOST: "localhost",
    USER: "root",
    DB: 'test',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
};