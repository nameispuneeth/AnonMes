# AnonMes

**AnonMes** is a web-based anonymous messaging platform that allows users to receive secret messages through a unique, shareable URL — without revealing the sender’s identity. It is designed to be simple, secure, and real-time.

---

## Features

- **Unique Shareable URL**  
  Each user gets a unique link that anyone can use to send anonymous messages.

- **Authentication**
  - Normal Email & Password Authentication
  - Google OAuth Authentication

-  **Expiry Control**
  - Set an expiry date for message links
  - Messages stop accepting submissions after expiry

-  **Custom URLs**
  - Users can set a custom URL
  - Option to regenerate a new URL anytime

- **Real-Time Messaging**
  - Messages are delivered instantly using **WebSockets (Socket.IO)**

- **Copy & Share**
  - One-click copy of the anonymous message link
  - Easily share across platforms

- **UI/UX**
  - Personalized UI experience

- **Responsive Design**
  - Works smoothly on desktop and mobile devices

---

## Project Screenshots
### Authentication :
<img width="732" height="838" alt="Screenshot 2025-12-24 184604" src="https://github.com/user-attachments/assets/bc35c642-5e04-43e6-9772-4922cbf74830" />
<img width="700" height="859" alt="Screenshot 2025-12-24 184615" src="https://github.com/user-attachments/assets/1d289bb4-f391-4833-ad14-eef73965966d" />

### Home Page For User : 
<img width="855" height="794" alt="Screenshot 2025-12-24 184513" src="https://github.com/user-attachments/assets/182ae400-3aa6-4f7b-9cc8-b35e13f1fe3c" />

- #### User Setting Custom URL :
  <img width="788" height="525" alt="Screenshot 2025-12-24 184525" src="https://github.com/user-attachments/assets/60977dd7-648b-40ff-a6e3-643630fddf41" />
  
- #### User Setting Custom Expiry Date :
  <img width="739" height="506" alt="Screenshot 2025-12-24 184534" src="https://github.com/user-attachments/assets/b84aa773-1a6f-4fb5-81eb-2179b2e80dff" />

### Home Page For Anonymous Sender :
<img width="727" height="844" alt="Screenshot 2025-12-24 184551" src="https://github.com/user-attachments/assets/5698f02d-9a6c-417d-8b0c-97d9ffa4910d" />
<img width="712" height="615" alt="Screenshot 2025-12-24 184827" src="https://github.com/user-attachments/assets/37a1b827-1bb9-4e30-b96f-1db8f8b53cfa" />



## Tech Stack

### Frontend
- React
- Tailwind CSS
- Socket.IO Client

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- Socket.IO (WebSockets)
- JWT Authentication
- Google OAuth

---

## How It Works

1. User signs up or logs in (Email/Password or Google).
2. A **unique anonymous URL** is generated for the user.
3. Anyone with the link can send a secret message.
4. Messages are delivered **in real-time** using WebSockets.
5. User can:
   - Set expiry date
   - Customize or regenerate the URL
   - View received anonymous messages securely

---

## Use Cases

- Receiving anonymous feedback
- Fun secret messages among friends
- Honest opinions without identity pressure
- Personal or professional feedback collection

---

## Security

- JWT-based authentication
- Secure OAuth login
- No sender identity stored or exposed
- Optional expiry to prevent misuse

---
