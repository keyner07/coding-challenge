import Log, { LogCreationAttributes } from '../models/log';
import Notification from '../models/notification';
import User from '../models/user';


class LogService {
  public async createLog(logData: LogCreationAttributes): Promise<Log> {
    return Log.create({ ...logData, timestamp: new Date() });
  }

  public async getAllLogs(): Promise<Log[]> {
    return Log.findAll({ order: [['timestamp', 'DESC']],
        include: [
            { model: User, as: 'User' },
            { model: Notification, as: 'Notification' }
        ]
     });
  }
}

export default new LogService();