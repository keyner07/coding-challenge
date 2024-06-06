import React, { useEffect, useState } from 'react';
import { getLogs } from '../services';
import { Log } from '../interfaces';

const LogHistory: React.FC = () => {
  const [logs, setLogs] = useState<Log[] | null>(null);

  const loadLogs = async () => {
    const response = await getLogs();
    const data = await response.json();
    setLogs(data);
  };

  useEffect(() => {
    loadLogs();
  }, []);

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
