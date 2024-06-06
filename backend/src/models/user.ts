import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../db';

interface UserAttributes {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  subscribed?: string[];
  channels?: string[];
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: number;
  public name!: string;
  public email!: string;
  public phoneNumber!: string;
  
  public subscribed?: string[];
  public channels?: string[];
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subscribed: {
        type: DataTypes.ARRAY(DataTypes.STRING), // This is the array column
        allowNull: true
    },
    channels: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true
    }
  },
  {
    sequelize,
    modelName: 'User',
  }
);

export default User;