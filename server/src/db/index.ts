import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import { initUser, User } from '../models/User';
import { initTodoItem, TodoItem } from '../models/TodoItem';

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME || 'todo_db',
  process.env.DB_USER || 'postgres',
  process.env.DB_PASS || 'postgres',
  {
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 5432,
    dialect: 'postgres',
    logging: false,
  }
);

// Initialize models
initUser(sequelize);
initTodoItem(sequelize);

// Set up associations
User.hasMany(TodoItem, { foreignKey: 'userId' });
TodoItem.belongsTo(User, { foreignKey: 'userId' });

export { sequelize, User, TodoItem };

