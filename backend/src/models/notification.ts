import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../db';

interface NotificationAttributes {
  id: number;
  category: string;
  message: string;
}

interface NotificationCreationAttributes extends Optional<NotificationAttributes, 'id'> {}

class Notification extends Model<NotificationAttributes, NotificationCreationAttributes> implements NotificationAttributes {
  public id!: number;
  public category!: string;
  public message!: string;
}

Notification.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Notification',
  }
);


export default Notification;