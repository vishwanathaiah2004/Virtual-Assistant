<!-- PROJECT LOGO -->
<p align="center">
  <img src="./6fa7893c-3fec-4e7c-9da5-e90b1693cd80.png" alt="AI Virtual Assistant Logo" width="300">
</p>

<p align="center">
  Voice-Powered Intelligent Assistant built with Gemini AI, Speech Recognition, and Real-Time Automation
</p>

<h1 align="center">🧠 Voice AI Virtual Assistant</h1>

<p align="center">
  A full-stack MERN AI Assistant powered by <strong>Google Gemini API</strong> that can listen 🎧, speak 🗣️, search 🌐 and launch apps 🚀 — all through your voice.  
  <br />
  <strong>React + Node + Express + MongoDB + Gemini API</strong>
  <br />
  <a href="https://virtual-assistant-byvishwanath.onrender.com/"><strong>🌍 Live Demo</strong></a> •
  <a href="#-features">✨ Features</a> •
  <a href="#️-installation">⚙️ Setup</a> •
  <a href="#-tech-stack">🧰 Tech Stack</a> •
  <a href="#-usage">🎯 Usage</a>
</p>

---
## 🎥 Demo Video

<a href="https://www.linkedin.com/posts/h-m-vishwanathaiah-02926932a_ai-voiceassistant-geminiapi-ugcPost-7382585705010651136-lLbN/" target="_blank">
  <img src="https://img.shields.io/badge/▶️-Watch%20Demo%20on%20LinkedIn-blue?style=for-the-badge" alt="Watch Demo Video">
</a>

## 🎥 Project Demo

👉 **Watch the full demo on LinkedIn:**  
https://www.linkedin.com/posts/h-m-vishwanathaiah-02926932a_ai-voiceassistant-geminiapi-ugcPost-7382585705010651136-lLbN/



<p align="center">
  <b>▶️ Click the image above to watch the demo on LinkedIn</b>
</p>

## ✨ Features

- 🧠 **AI-Powered Chat** – Uses Google Gemini API to generate natural, intelligent responses.  
- 🗣 **Voice Recognition & Speech Synthesis** – Full duplex voice assistant experience in the browser.  
- 🌐 **Instant Website Launch** – Commands like “Open YouTube”, “Open Instagram” open sites instantly.  
- 🔎 **Google & YouTube Search** – Say “Search cats on Google” or “Play lofi music on YouTube”.  
- ⏰ **Time / Date / Weather Support** – Ask for real-time information.  
- 🧑 **Customizable Assistant** – Change avatar, name, and personalize it.  
- 🔐 **User Authentication** – Secure login/logout with JWT.  
- ☁️ **Fully Deployed** – Hosted on Render, backed by MongoDB Atlas.  

---

## 🧰 Tech Stack

| Layer         | Technology |
|---------------|------------|
| **Frontend**  | [React](https://react.dev/), [Vite](https://vitejs.dev/), [Tailwind CSS](https://tailwindcss.com/) |
| **Backend**   | [Node.js](https://nodejs.org/), [Express](https://expressjs.com/) |
| **Database**  | [MongoDB](https://www.mongodb.com/) |
| **AI Engine** | [Google Gemini API](https://ai.google.dev/) |
| **Voice**     | Web Speech API (SpeechRecognition + SpeechSynthesis) |
| **Deployment**| [Render](https://render.com/) |
| **Auth**      | JWT, Cookies |

<p align="center">
  <img src="https://skillicons.dev/icons?i=react,nodejs,express,mongodb,tailwind,git,github" alt="Tech Stack Icons">
</p>

---

## ⚙️ How It Works

1. 🎤 User gives a voice command:  
   - “Open YouTube”  
   - “Search cars on Google”  
   - “What’s the time?”  
   - “Your assistant name + a question”

2. 🧠 The app converts speech to text using the Web Speech API.

3. 🤖 Text is sent to the backend → processed → forwarded to **Google Gemini API**.

4. 💬 Gemini returns a smart AI response.

5. 🗣 Assistant speaks the response and performs actions (open sites, searches, etc.).

---

## 🚀 Live Demo

👉 [**Try the Live App Here**]
https://virtual-assistant-byvishwanath.onrender.com

> 💻 Works best on **Chrome desktop browser** for SpeechRecognition support.

---

## 🛠️ Installation

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/voice-ai-assistant.git
cd voice-ai-assistant
```

### 2.Install dependencies
## Frontend:
```bash
cd frontend
npm install

```
## Backend:
```bash
cd backend
npm install
```
### 3. Add your environment variables
## Create a .env file inside the backend folder:
```bash
MONGO_URI=your_mongodb_uri
PORT=8000
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_api_key
```
## 🔐 You can get your Gemini API key from Google AI Studio

### 4. Run the project locally

## Start frontend:
```bash
cd frontend
npm run dev
```
## Start backend:
```bash
cd backend
npm run dev
```
### Your project runs on:
```bash
Frontend ➝ http://localhost:5173
Backend ➝ http://localhost:8000
```

| Voice Command                    | Action Performed                      |
| -------------------------------- | ------------------------------------- |
| “Open YouTube”                   | Opens YouTube in a new tab            |
| “Search dogs on Google”          | Google search in new tab              |
| “What’s the time?”               | Speaks current time                   |
| “Play music”                     | Plays lofi playlist on YouTube        |
| “Open Facebook / Instagram”      | Launches the requested website        |
| “What’s the date / day?”         | Speaks current date or day            |
| “Your Assistant Name + question” | Gemini AI responds with a smart reply |


📸 Screenshots
<p align="center"> <img src="https://your-screenshot-link-1.png" width="45%" alt="App Screenshot 1"> <img src="https://your-screenshot-link-2.png" width="45%" alt="App Screenshot 2"> </p>

### 📡 Deployment

🌍 Hosted on Render
🛢️ Database: MongoDB Atlas
🤖 AI: Google Gemini API
🔒 JWT Authentication

### 🧠 Future Enhancements

🌍 Multi-language support (English, Hindi, etc.)
🧠 AI memory for context awareness
📱 Mobile PWA support
🧑‍🎤 Custom assistant voices
🔔 Notifications & reminders

## 📜 License

This project is licensed under the MIT License.
See the LICENSE file for more info.



