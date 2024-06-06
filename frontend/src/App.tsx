import React, { useEffect, useState } from 'react';
import NotificationForm from './components/NotificationForm';
import LogHistory from './components/LogHistory';
import './App.css';
import { Log } from './interfaces';
import { getLogs } from './services';

const App: React.FC = () => {
  const [logs, setLogs] = useState<Log[] | null>(null);

  const loadLogs = async () => {
    const response = await getLogs();
    const data = await response.json();
    setLogs(data);
  };

  useEffect(() => {
    loadLogs();
  }, []);

  const handleNotificationSent = () => {
    loadLogs();
  };

  return (
    <div className="App">
      <h1>Notification System</h1>
      <NotificationForm onNotificationSent={handleNotificationSent} />
      <LogHistory logs={logs} />
    </div>
  );
};

export default App;
