# Ronit's Portfolio

Welcome to my personal portfolio website! This project showcases my skills, projects, and professional background. It is built with a modern tech stack to ensure performance, responsiveness, and a great user experience.

## Features

-   **Responsive Design**: Fully responsive layout that works seamlessly on desktops, tablets, and mobile devices.
-   **Modern UI/UX**: Clean and modern interface designed with **Taiwind CSS** and **Framer Motion** for smooth animations.
-   **Contact Form**: Integrated contact form powered by **EmailJS** to send messages directly to my inbox.
-   **Project Showcase**: Dedicated section to display my projects with details and links.
-   **Admin Dashboard**: Secure admin area to manage project entries (Add/Edit/Delete).
-   **Authentication**: Admin login protected by **Firebase Authentication**.
-   **AI Integration**: Features powered by **Google Gemini API** (Chatbot/Assistant).
-   **Dark/Light Mode**: (If applicable, based on `bg-light-base` and `dark:bg-dark-base` classes found).

## Tech Stack

This project is built using the following technologies:

-   **Frontend**: [React](https://reactjs.org/) (v18), [Vite](https://vitejs.dev/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)
-   **Routing**: [React Router](https://reactrouter.com/)
-   **Backend/Services**:
    -   [Firebase](https://firebase.google.com/) (Authentication & Database)
    -   [EmailJS](https://www.emailjs.com/) (Contact Form)
    -   [Google Generative AI](https://ai.google.dev/) (AI Features)

## Getting Started

Follow these steps to set up the project locally.

### Prerequisites

-   Node.js (v16 or higher)
-   npm or yarn

### Installation

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd Ronit_portfolio
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Environment Variables:**

    Create a `.env` file in the root directory and add your API keys. You can use `.env.example` as a reference if available.

    ```env
    VITE_EMAILJS_SERVICE_ID=your_service_id
    VITE_EMAILJS_TEMPLATE_ID=your_template_id
    VITE_EMAILJS_PUBLIC_KEY=your_public_key
    VITE_FIREBASE_API_KEY=your_api_key
    ...
    ```

4.  **Run the development server:**

    ```bash
    npm run dev
    ```

    The app should now be running at `http://localhost:5173`.

## Build for Production

To build the project for production, run:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Project Structure

```
src/
├── assets/         # Images and static assets
├── components/     # Reusable UI components (Navbar, Hero, etc.)
├── hooks/          # Custom React hooks
├── pages/          # Page components (Admin, NotFound, etc.)
├── services/       # API services and utilities
├── App.jsx         # Main application component
└── main.jsx        # Entry point
```
