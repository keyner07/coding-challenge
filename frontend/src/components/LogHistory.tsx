import React from 'react';
import { Log } from '../interfaces';

const LogHistory: React.FC<{ logs: Log[] | null }> = ({ logs }) => {

  return (
    <div>
      <h2>Log History</h2>
      <ul>
        {logs?.map((log) => (
          <li key={log.id}>
            {new Date(log.timestamp).toLocaleDateString('en-US')}: {log.User.name} ({log.User.email} / {log.User.phoneNumber}) - {log.category}: {log.Notification.message} [{log.channel}]
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LogHistory;
