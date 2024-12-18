# Chat App 💬

**Chat App** 🗨️ is a real-time messaging web application built with **React**, **ShadCN**, and **Tailwind CSS**. The app supports both group chats and direct messaging, enabling users to communicate seamlessly with others. It leverages **socket.io** for real-time updates, **JWT** for secure authentication, and **MongoDB** for scalable data storage.

🌟 Connect with friends, share media, and enjoy smooth, instant messaging with [Chat App](https://chat-app-9ftv.onrender.com) today!

---

## 🖼️ **Home Page**

![Home](./Screenshots/home.png)

---

## 🚀 **Features at a Glance**

- **Real-Time Messaging**: Enjoy seamless communication with real-time message delivery for group and direct chats.
- **JWT Authentication**: Secure login and user authentication using JWT tokens.
- **File Upload/Download**: Send and receive files with ease using Multer for media handling.
- **Scalable Backend**: MongoDB ensures smooth and reliable data storage for all users.
- **Responsive UI**: Designed for optimal performance across all devices, using Tailwind CSS for styling.

---

## 🛠️ **Tech Stack**

- **Frontend**: React.js ⚛️, ShadCN 🧩, Tailwind CSS 🎨
- **Backend**: Node.js, Express 🛠️
- **Real-Time Messaging**: socket.io 💬
- **Authentication**: JWT 🔑
- **Database**: MongoDB 🗄️
- **File Handling**: Multer 📁

---

## 🖥️ **Live Demo**

Experience the **Chat App** live:

- **Frontend**: [Chat App Frontend](https://chat-app-9ftv.onrender.com)
- **Backend**: [Chat App Backend](https://chat-app-backend-kiip.onrender.com/)

---

## 🖼️ **Screenshots**

### Group Chat

![Group Chat](./Screenshots/group-message.png)

### Direct Message

![Direct Message](./Screenshots/direct-message.png)

### File Upload/Download

![File Upload/Download](./Screenshots/file-upload-download.png)

### Chat Settings

![Chat Settings](./Screenshots/chat-settings.png)

### Login Page

![Login](./Screenshots/login.png)

---

## 📦 **Installation & Setup Guide**

Follow these steps to set up the project on your local machine:

### 1. **Clone the repository**:

```bash
git clone https://github.com/abhishekcultivates/chat-app.git
```

### 2. **Navigate to the project directory**:

```bash
cd chat-app
```

### 3. **Set up the Backend**:

Navigate to the server directory:

```bash
cd server
```

Install the backend dependencies:

```bash
npm install
```

Create a .env file in the server directory with the following contents:

```bash
PORT=8747
JWT_KEY="your-jwt-secret-key-here"
ORIGIN="http://localhost:5173"
DATABASE_URL="mongodb+srv://username:password@cluster.example.mongodb.net/dbname?retryWrites=true&w=majority"
```

**Note**: Replace DATABASE_URL with your MongoDB connection string if necessary.

Start the backend server:

```bash
npm run dev
```

The backend will be running at http://localhost:8747 (or whatever port you set in .env).

### 4. **Set up the Frontend**:

Navigate to the client directory:

```bash
cd ../client
```

Install the frontend dependencies:

```bash
npm install
```

Create a .env file in the client directory with the following contents:

```
VITE_SERVER_URL="http://localhost:8747"
VITE_SOCKET_URL="http://localhost:8747"
```

**Note**: When you are ready to deploy, change it to the production URLs and provide as environment variables.

Start the frontend development server:

```bash
npm run dev
```

The frontend will be running at http://localhost:5173.

### 5. **Access the App**:

Once both servers are running, you can open your browser and navigate to http://localhost:5173 to start using the app.

---

## 📩 **Contact**

For questions, suggestions, or feedback, feel free to reach out!

- **Email**: abhishekcultivates@gmail.com
- **LinkedIn**: [Abhishek Raj](https://www.linkedin.com/in/@abhishekcultivates/)
- **Twitter**: [@a_cultivates](https://twitter.com/a_cultivates)

---

© 2024 Abhishek Raj
