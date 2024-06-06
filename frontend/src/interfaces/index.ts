export interface Log {
    id: number;
    User: User;
    Notification: Notification;
    channel: string;
    category: string;
    timestamp: Date;
    success?: boolean;
}

export interface User {
    id: number;
    name: string;
    email: string;
    phoneNumber: string;
    subscribed?: string[];
    channels?: string[];
}

export interface Notification {
    id: number;
    category: string;
    message: string;
}