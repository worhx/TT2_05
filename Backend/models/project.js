import Sequelize from 'sequelize'
import {db} from "../util/database.js";
export const Project = db.define("project",
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
    description:{
        type: Sequelize.STRING(50),
        allowNull: false,
    },
    budget:{
        type: Sequelize.FLOAT,
        allowNull:false,
    },
    user_id:{
        type: Sequelize.INTEGER,
        allowNull:false,
    },

},
{
    tableName:"Project",
    timestamps:false,
    freezeTableName:true,
    
});
