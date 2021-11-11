import Sequelize from 'sequelize'
import {db} from "../util/database.js";
export const Category = db.define("category",
{   
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull : false,
        primaryKey: true,
    },
    name:{
        type: Sequelize.STRING(50),
        allowNull: false,
    },

},
{
    tableName:"category",
    timestamps:false,
    freezeTableName:true,
});
