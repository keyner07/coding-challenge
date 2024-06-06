import { Router } from 'express';
import NotificationController from '../controllers/notification.controller';

const router = Router();

router.post('/notifications', NotificationController.createNotification);
router.get('/notifications', NotificationController.getAlls);
router.get('/notifications/:id', NotificationController.getById);
router.get('/logs', NotificationController.getLogs);

export default router;