import Sequelize from 'sequelize'
import { db, db_local } from "../util/database.js";

export const Expense = db.define("expense",
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        project_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        category_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING(50),
            allowNull: false,
        },
        amount: {
            type: Sequelize.FLOAT,
            allowNull: false,
        },
        description: {
            type: Sequelize.STRING(50),
            allowNull: false,
        },
        created_at:{
            type: Sequelize.DATE,
            allowNull: true,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        created_by:{
            type: Sequelize.STRING(50),
            allowNull:true,
        },
        updated_at:{
            type: Sequelize.DATE,
            allowNull: true,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        updated_by:{
            type: Sequelize.STRING(50),
            allowNull:true,
        },

    },
    {
        tableName: "Expense",
        timestamps: false,
        freezeTableName: true,

    });


