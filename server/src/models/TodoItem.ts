import { DataTypes, Model, Sequelize } from 'sequelize';

export class TodoItem extends Model {
  public id!: number;
  public text!: string;
  public completed!: boolean;
  public userId!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export const initTodoItem = (sequelize: Sequelize) => {
  TodoItem.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    tableName: 'todos',
  });
};

