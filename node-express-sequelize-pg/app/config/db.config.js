module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "123456789",
    DB: "Users_Database",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };