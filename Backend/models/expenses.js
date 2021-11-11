import Sequelize, { DATE } from 'sequelize'
import { db } from "../util/database.js";

export const Expense = db.define("expense",
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING(255),
            allowNull: false,
        },
        description: {
            type: Sequelize.FLOAT,
            allowNull: false,
        },
        created_at: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Date.Now()
        },
        created_by: {
            type: Sequelize.STRING(255),
            allowNull: false,
        },
        updated_at: {
            type: Sequelize.DATE,
            defaultValue: Date.Now(),
            allowNull: false,
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


