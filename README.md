# ChatApp 💬

A **real-time chat application** built with React Native, Socket.IO, and Node.js that enables users to join interest-based chat groups and engage in seamless conversations.


## ✨ Features

- **Real-time Communication** - Instant messaging powered by Socket.IO
- **Interest-Based Groups** - Join or create chat rooms based on shared interests
- **Intuitive UI/UX** - Clean, responsive interface for better user experience
- **Local Development Environment** - Easy setup for developers
- **Cross-Platform** - Works on iOS and Android through React Native

## 🛠️ Tech Stack

### Frontend
- **React Native** (Expo workflow)
- **Socket.IO Client** for real-time communication
- **React Navigation** for screen transitions
- **React Native Components** for UI elements

### Backend
- **Node.js** runtime environment
- **Express.js** web framework
- **Socket.IO** for WebSocket connections
- **Nodemon** for development hot-reloading

## 📂 Project Structure

```
ChatApp/
├── .git/                    # Git repository data
├── backend/                 # Node.js server
│   ├── node_modules/        # Backend dependencies
│   ├── .gitignore           # Git ignore file for backend
│   ├── index.js             # Server entry point with Socket.IO setup
│   ├── package-lock.json    # Dependency lock file
│   └── package.json         # Backend dependencies list
│
├── frontend/                # React Native (Expo) application
│   ├── .expo/               # Expo configuration
│   ├── assets/              # Images and media files
│   │   ├── adaptive-icon.png
│   │   ├── app video.mp4    # Demo video
│   │   ├── favicon.png
│   │   ├── icon.png
│   │   └── splash.png
│   ├── components/          # Reusable UI components
│   │   ├── Chatcomponent.js # Chat interface component
│   │   ├── Messagecomponent.js # Message bubble component
│   │   └── Modal.js         # Modal dialog component
│   ├── context/             # React context
│   │   └── index.js         # Context definitions
│   ├── node_modules/        # Frontend dependencies
│   ├── screens/             # App screens
│   ├── utils/               # Utility functions
│   │   └── index.js         # Socket.IO configuration
│   ├── .gitignore           # Git ignore file for frontend
│   ├── App.js               # Main application entry point
│   ├── app.json             # Expo configuration
│   ├── babel.config.js      # Babel configuration
│   ├── package-lock.json    # Dependency lock file
│   └── package.json         # Frontend dependencies list
│
└── README.md                # Project documentation
```

## 🚀 Getting Started

### Prerequisites

Before running the application, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or newer)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Nodemon](https://www.npmjs.com/package/nodemon) (for development)

### Installation & Setup

#### 1. Clone the Repository

```bash
git clone https://github.com/RahulPobari/ChatApp.git
cd ChatApp
```

#### 2. Backend Setup

```bash
cd backend
npm install
```

**Important:** Update the IP address in `backend/index.js` to your machine's IP address:

```javascript
// Change this line in backend/index.js
const server = http.createServer(app).listen(3000, "192.168.x.x", () => {
  console.log("Server running on http://192.168.x.x:3000");
});
```

Start the server:
```bash
npm start
```

#### 3. Frontend Setup

```bash
cd ../frontend
npm install
```

**Important:** Update the Socket.IO connection address in `frontend/utils/index.js`:

```javascript
// Change this line in frontend/utils/index.js
const socket = io("http://192.168.x.x:3000");
```

Start the Expo project:
```bash
expo start
```

This will launch the Expo developer tools in your browser. You can:
- Scan the QR code with your phone using the Expo Go app
- Press 'a' to run on an Android emulator
- Press 'i' to run on an iOS simulator

## 📱 Using the App

1. **Launch the app** on your device/emulator
2. **Enter your display name** on the welcome screen
3. **Browse available chat groups** or create a new one
4. **Join a group** and start chatting in real-time!

## 🔌 Socket.IO Implementation

The application uses Socket.IO for real-time communication:

- The frontend connects to the backend using the Socket.IO client in `utils/index.js`
- Events are emitted and received to handle messaging and user presence
- Room-based architecture allows for group conversations

Example connection in frontend:
```javascript
import io from 'socket.io-client';

const socket = io('http://192.168.x.x:3000');
```

## 🧩 Key Components

### Backend
- **Socket Server**: Manages WebSocket connections and routes messages
- **Room Management**: Handles joining/leaving chat groups
- **Event Handlers**: Processes user actions and broadcasts updates

### Frontend
- **Chat Component**: Displays messages and input field (`components/Chatcomponent.js`)
- **Message Component**: Visualizes sent and received messages (`components/Messagecomponent.js`)
- **Modal Component**: Handles pop-up dialogs (`components/Modal.js`)
- **Context Provider**: Manages application state (`context/index.js`)

## 🛣️ Roadmap

Future enhancements planned for ChatApp:

- [ ] **User Authentication** - Account creation and login
- [ ] **Persistent Storage** - Message history with MongoDB/Firebase
- [ ] **Push Notifications** - For new messages when app is in background
- [ ] **Media Sharing** - Support for images, files, and voice messages
- [ ] **Direct Messaging** - Private conversations between users
- [ ] **Profile Customization** - Avatar uploads and status updates
- [ ] **Cloud Deployment** - Moving from local IP to cloud hosting

## 🧪 Development

### Environment Setup

For developers wanting to modify the code:

1. Make changes to the backend or frontend code
2. Use nodemon on the backend for automatic server restarts
3. Expo will hot-reload frontend changes automatically

### Testing on Physical Devices

To test on physical devices:
1. Ensure your device is on the same network as your development machine
2. Use your machine's IP address (not localhost) in both backend and frontend configurations
3. Update both files mentioned in the setup instructions

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

Rahul Pobari
- [GitHub](https://github.com/RahulPobari)
- [LinkedIn](https://linkedin.com/in/rahulpobari)

Project Link: [https://github.com/RahulPobari/ChatApp](https://github.com/RahulPobari/ChatApp)

## 🙏 Acknowledgements

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [Socket.IO](https://socket.io/)
- [Node.js](https://nodejs.org/)

---

<p align="center">
  Made with ❤️ by Rahul Pobari
</p>
