import Sequelize from 'sequelize'
import {db} from "../util/database.js";
export const User = db.define("user",
{   
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull : false,
        primaryKey: true,
    },
    username:{
        type: Sequelize.STRING(50),
        allowNull: false,
    },
    password:{
        type: Sequelize.STRING(50),
        allowNull: false,
    },
    name:{
        type: Sequelize.STRING(50),
        allowNull: false,
    },
    appointment:{
        type: Sequelize.STRING(50),
        allowNull: false,
    },

},
{
    tableName:"User",
    timestamps:false,
    freezeTableName:true,
});
