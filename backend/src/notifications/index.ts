import Log from "../models/log";

export class NotificationSystem {
    static async sendMessage(data: Log): Promise<void> {
        const user = await data.getUser();
        const notification = await data.getNotification();
        console.log(`${new Date(data.timestamp).toLocaleDateString('en-US')}: Sending message to ${user.email}, Category ${notification.message} by ${data.channel}`);
    }

}