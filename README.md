# Real-time Code Editor
This is a real-time code editor built using React, TypeScript, Vite, and Express. The application allows multiple users to collaborate on code in real-time with synchronized changes, making it a perfect tool for pair programming and code reviews.

# Features
Real-time collaboration: Multiple users can edit the same code simultaneously, with updates reflecting in real-time across all connected clients.
CodeMirror integration: Provides syntax highlighting, code folding, and autocompletion for various programming languages.
Socket.io: Enables seamless real-time communication between clients and the server for syncing code changes.
Express backend: Manages user sessions and handles the Socket.io connection for real-time functionality.
TypeScript: Ensures type safety across both frontend and backend, improving code reliability and maintainability.
Vite: A fast and optimized build tool for frontend development with hot module replacement (HMR) for a better developer experience.
The backend, built with Express, manages real-time communication using Socket.io, ensuring all users see synchronized code.

# Installation

To run Frontend
1. npm i
2. npm run dev

To run Server
1. cd src
2. node server.js


