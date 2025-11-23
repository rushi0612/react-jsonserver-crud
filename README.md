This repository contains a simple React application that demonstrates CRUD (Create, Read, Update, Delete) operations using a JSON server as a mock backend.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Create:** Add new data entries.
- **Read:** Display a list of existing data.
- **Update:** Modify existing data entries.
- **Delete:** Remove data entries.
- **Mock Backend:** Uses `json-server` for easy local development without a real database.

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **JSON Server:** A full fake REST API with zero coding.
- **Axios:** A promise-based HTTP client for the browser and node.js.
- **React Router (optional, depending on project structure):** For navigation within the application.
- **Bootstrap/CSS (optional):** For styling.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following installed:

- Node.js (v14 or higher recommended)
- npm (Node Package Manager) or yarn

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/rushi0612/react-jsonserver-crud.git
   cd react-jsonserver-crud
   ```

2. **Install frontend dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Install JSON Server globally (if not already installed):**

   ```bash
   npm install -g json-server
   # or
   yarn global add json-server
   ```

### Running the Application

This project requires two separate processes to run: the React frontend and the JSON server backend.

1. **Start the JSON Server:**

   Open a new terminal window in the project root and run:

   ```bash
   json-server --watch db.json --port 8000
   ```
   This will start the JSON server on `http://localhost:8000`. The `db.json` file will serve as your data store.

2. **Start the React Development Server:**

   In your original terminal window (or another new one), run:

   ```bash
   npm start
   # or
   yarn start
   ```
   This will start the React application in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

Now you should have both the frontend and backend running, and you can interact with the CRUD operations.

## Project Structure

A typical structure for this project might look like this:

```
react-jsonserver-crud/
├── public/
│   └── index.html
├── src/
│   ├── components/       # Reusable UI components (e.g., forms, lists)
│   │   ├── AddItem.js
│   │   ├── ItemList.js
│   │   └── EditItem.js
│   ├── App.js            # Main application component
│   ├── index.js          # Entry point of the React app
│   └── api/              # (Optional) For Axios instances or API service functions
│       └── axiosInstance.js
├── db.json               # JSON Server data file
├── package.json
├── README.md
└── .gitignore
```
Let me know if you'd like a visual representation of this project structure! 

## Scripts

In the project directory, you can run:

- `npm start` or `yarn start`: Runs the app in development mode.
- `json-server --watch db.json --port 8000`: Starts the mock backend server.
- `npm test` or `yarn test`: Launches the test runner (if configured).
- `npm run build` or `yarn build`: Builds the app for production.

## Contributing

Contributions are always welcome! If you have suggestions for improvements or new features, please feel free to:

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

