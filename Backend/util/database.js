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
    username:'localhost',
    password:'password',
    dialect:'mysql',
    host:"localhost",
});
