# Notification System

This project is a simple notification system built with Node.js, TypeScript, PostgreSQL, and React. The system allows you to send notifications to users based on their subscription categories and preferred channels (SMS, Email, Push Notification). The notifications are logged and displayed in a log history.

## Features

- Send notifications based on categories (Sports, Finance, Movies)
- Three types of notifications: SMS, Email, Push Notification
- Log all sent notifications
- Display log history in the user interface

## Prerequisites

- Node.js
- PostgreSQL
- npm (Node Package Manager)

## Setup

### Backend

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/notification-system.git
    cd notification-system
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory backend and add the following environment variables:
    ```env
    HOST_DB=
    DATABASE_DB=
    USERNAME_DB=
    PASSWORD_DB=
    ```

4. Build and start the backend server:
    ```bash
    npm run dev
    ```

### Frontend

1. Navigate to the `client` directory:
    ```bash
    cd client
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the frontend development server:
    ```bash
    npm start
    ```

### Usage

1. Open your browser and go to `http://localhost:3000`.

2. You will see a form to send notifications and a log history of all sent notifications.

## Project Structure

```plaintext
notification-system/
├── client/                     # React frontend
│   ├── public/                 # Public assets
│   ├── src/                    # Source files
│   ├── package.json            # Frontend dependencies
│   └── ...                     # Other frontend files
├── src/                        # Backend source files
│   ├── controllers/            # Controller files
│   ├── models/                 # Database models
│   ├── routes/                 # API routes
│   ├── services/               # Service files
│   ├── views/                  # Static files
│   ├── app.ts                  # Main app file
│   └── ...                     # Other backend files
├── .env                        # Environment variables
├── package.json                # Backend dependencies
├── tsconfig.json               # TypeScript configuration
└── README.md                   # Project README
