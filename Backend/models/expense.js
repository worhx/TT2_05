import Sequelize from 'sequelize'
import { db, db_local } from "../util/database.js";

export const Expense = db_local.define("expense",
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
            type: Sequelize.STRING(255),
            allowNull: false,
        },
        amount: {
            type: Sequelize.FLOAT,
            allowNull: true,
        },
        description: {
            type: Sequelize.STRING(255),
            allowNull: true,
        },
        created_at: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Date.now()
        },
        created_by: {
            type: Sequelize.STRING(255),
            allowNull: true,
        },
        updated_at: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Date.now()
        },
        updated_by: {
            type: Sequelize.STRING(255),
            allowNull: false,
        }

    },
    {
        tableName: "Expense",
        timestamps: false,
        freezeTableName: true,

    });


