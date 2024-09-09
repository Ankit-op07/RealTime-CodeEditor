# Real-time Code Editor
This is a real-time code editor built using React, TypeScript, Vite, and Express. The application allows multiple users to collaborate on code in real-time with synchronized changes, making it a perfect tool for pair programming and code reviews.

Features
Real-time collaboration: Multiple users can edit the same code simultaneously, with updates reflecting in real-time across all connected clients.
CodeMirror integration: Provides syntax highlighting, code folding, and autocompletion for various programming languages.
Socket.io: Enables seamless real-time communication between clients and the server for syncing code changes.
Express backend: Manages user sessions and handles the Socket.io connection for real-time functionality.
TypeScript: Ensures type safety across both frontend and backend, improving code reliability and maintainability.
Vite: A fast and optimized build tool for frontend development with hot module replacement (HMR) for a better developer experience.
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/realtime-code-editor.git
cd realtime-code-editor
Install dependencies for both the frontend and backend:

Frontend (React + Vite):

bash
Copy code
cd client
npm install
Backend (Express):

bash
Copy code
cd server
npm install
Set up environment variables:

Create a .env file in the server directory with necessary configurations (e.g., Socket.io port, environment settings).
Run the application:

Start the backend server:

bash
Copy code
cd server
npm run dev
Start the frontend development server:

bash
Copy code
cd client
npm run dev
Open the application:
Navigate to http://localhost:3000 in your browser to access the real-time code editor.

Technologies Used
Frontend:

React
TypeScript
Vite
CodeMirror
Socket.io-client
Backend:

Express
Socket.io
How it Works
The frontend uses React and CodeMirror to create an interactive code editing interface.
Code changes made by one user are broadcast to all connected users via Socket.io.
The backend, built with Express, manages real-time communication using Socket.io, ensuring all users see synchronized code.
