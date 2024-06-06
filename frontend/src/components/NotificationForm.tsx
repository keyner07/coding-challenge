import React, { useState } from 'react';
import { createNotification } from '../services';

const NotificationForm: React.FC<{ onNotificationSent: () => void }> = ({ onNotificationSent }) => {
  const [category, setCategory] = useState('Sports');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const response = await createNotification(category, message);

    if (response.ok) {
      onNotificationSent();
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="category">Category:</label>
      <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Sports">Sports</option>
        <option value="Finance">Finance</option>
        <option value="Movies">Movies</option>
      </select>
      <label htmlFor="message">Message:</label>
      <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
      <button type="submit">Send Notification</button>
    </form>
  );
};

export default NotificationForm;