import { Request, Response } from 'express';
import logService from '../services/log.service';
import notificationService from '../services/notification.service';

class NotificationController {
    public async createNotification(req: Request, res: Response) {
        const { category, message } = req.body;

        if (!category || !message) {
            return res.status(400).send('Category and message are required.');
        }

        try {
            await notificationService.sendNotification(category, message);

            res.status(201).json({ message: 'Created successfully '});
        } catch(err) {
            res.status(500).json({ message: 'Internal Server Error'})
        }


    }

    public async getLogs(req: Request, res: Response) {
        try {
            const logs = await logService.getAllLogs();
    
            res.json(logs);
        } catch(err) {
            res.status(500).json({ message: 'Internal Server Error'})
        }
    };

    public async getAlls(req: Request, res: Response) {
        try {
            const notifications = await notificationService.getAlls();
        
            res.json(notifications);
        } catch(err) {
            res.status(500).json({ message: 'Internal Server Error'})
        }
    }

    public async getById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const notification = await notificationService.getById(+id);
        
            res.json(notification);
        } catch(err) {
            res.status(500).json({ message: 'Internal Server Error'})
        }
    }
}

export default new NotificationController();
