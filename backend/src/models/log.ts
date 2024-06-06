import { Model, DataTypes, BelongsToGetAssociationMixin, Optional } from 'sequelize';
import sequelize from '../db';
import User from './user';
import Notification from './notification';

interface LogAttributes {
    id: number;
    userId: number;
    notificationId: number;
    channel: string;
    category: string;
    timestamp: Date;
    success?: boolean;
  }
  
export interface LogCreationAttributes extends Optional<LogAttributes, 'id'> {}

class Log extends Model<LogAttributes, LogCreationAttributes> implements LogAttributes {
  public id!: number;
  public userId!: number;
  public notificationId!: number;
  public channel!: string;
  public category!: string;
  public timestamp!: Date;
  public success?: boolean;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public getUser!: BelongsToGetAssociationMixin<User>;
  public getNotification!: BelongsToGetAssociationMixin<Notification>;
}

Log.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    notificationId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    channel: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    success: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: 'Log',
  }
);

Log.belongsTo(User, { as: 'User', foreignKey: 'userId' });
Log.belongsTo(Notification, { as: 'Notification', foreignKey: 'notificationId' });

export default Log;