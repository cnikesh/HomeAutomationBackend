module.exports = {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: 'admin',
    DB: 'home_automation_dashboard',
    dialect: 'mysql',

    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}