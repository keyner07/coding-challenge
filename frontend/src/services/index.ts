const URL_API = 'http://localhost:3001/api';

export const createNotification = (category: string, message: string) => {
    return fetch(`${URL_API}/notifications`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({ category, message }),
    });
}

export const getLogs = () => {
    return fetch(`${URL_API}/logs`);
}