import Sequelize from 'sequelize'
export const db = new Sequelize({
    database:'project_expenses',
    username:'dbsseed',
    password:'password',
    dialect:'mysql',
    host:"worhx.ddns.net",

});
