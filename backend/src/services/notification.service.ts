import Notification from '../models/notification';
import UserService from './user.service';
import LogService from './log.service';
import Log from '../models/log';
import User from '../models/user';

class NotificationService {
  public async sendNotification(category: string, message: string): Promise<void> {
    const users = await UserService.findUsersWithCategory(category);

    const notification = await Notification.create({ category, message });

    if(!users) {
        return;
    }

    for (const user of users) {
        for (const channel of user.channels!) {
          await LogService.createLog({
            userId: user.id,
            category,
            channel,
            notificationId: notification.id,
            timestamp: new Date(),
            success: true
        });
        }
    }
  }

  public getAlls() {
    return Notification.findAll();
  }

  public getById(id: number) {
    return Notification.findOne({ where: { id: +id }});
  }
}

export default new NotificationService();