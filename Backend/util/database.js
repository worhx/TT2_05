import Sequelize from 'sequelize'
export const db = new Sequelize({
    database:'project_expenses',
    username:'dbsseed',
    password:'password',
    dialect:'mysql',
    host:"worhx.ddns.net",

});

export const db_local = new Sequelize({
    database:'project_expenses',
    username:'root',
    password:'password',
    dialect:'mysql',
    host:"127.0.0.1:3306",
});
