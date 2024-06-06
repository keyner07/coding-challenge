import User from '../models/user';
import { Op } from 'sequelize';

class UserService {
  public async getAllUsers(): Promise<User[]> {
    return User.findAll();
  }

  public async getUserById(id: number): Promise<User | null> {
    return User.findByPk(id);
  }

  public async createUser(userData: User): Promise<User> {
    return User.create(userData);
  }

  public async findUsersWithCategory(item: string) {
      return  User.findAll({
        where: {
            subscribed: {
                [Op.contains]: [item]
            }
        }
    });
  }
}

export default new UserService();