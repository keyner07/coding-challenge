import React from 'react';
import NotificationForm from './components/NotificationForm';
import LogHistory from './components/LogHistory';
import './App.css';

const App: React.FC = () => {
  const handleNotificationSent = () => {
    console.log('Notification sent');
  };

  return (
    <div className="App">
      <h1>Notification System</h1>
      <NotificationForm onNotificationSent={handleNotificationSent} />
      <LogHistory />
    </div>
  );
};

export default App;
