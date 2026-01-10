# Deploying Your Portfolio (Free Options)

The best free platforms to deploy a React/Vite application are **Vercel** and **Netlify**. Both are excellent, but **Vercel** is highly recommended for its speed and ease of use.

## Option 1: Vercel (Recommended) &mdash; via GitHub

This is the professional way to deploy. Every time you push code to GitHub, your site updates automatically.

1.  **Push your code to GitHub**:
    *   Create a new repository on [GitHub](https://github.com/new).
    *   Run these commands in your project terminal:
        ```bash
        git init
        git add .
        git commit -m "Initial commit"
        git branch -M main
        git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
        git push -u origin main
        ```

2.  **Connect to Vercel**:
    *   Go to [Vercel.com](https://vercel.com/signup) and sign up with GitHub.
    *   Click **"Add New..."** -> **"Project"**.
    *   Find your `Ronit_portfolio` repository and click **"Import"**.

3.  **Configure Project**:
    *   **Framework Preset**: It should auto-detect "Vite".
    *   **Environment Variables** (IMPORTANT):
        *   Expand the "Environment Variables" section.
        *   Copy-paste all your secrets from your `.env` file here:
            *   `VITE_GEMINI_API_KEY`
            *   `VITE_EMAILJS_SERVICE_ID`
            *   `VITE_EMAILJS_TEMPLATE_ID`
            *   `VITE_EMAILJS_PUBLIC_KEY`
    *   Click **"Deploy"**.

4.  **Done!**
    *   Vercel will give you a live URL (e.g., `https://ronit-portfolio.vercel.app`).

---

## Option 2: Netlify &mdash; Drag & Drop (Easiest)

If you don't want to use GitHub, you can just drag and drop your build folder.

1.  **Build your project**:
    *   Run this command in your terminal:
        ```bash
        npm run build
        ```
    *   This creates a `dist` folder in your project directory.

2.  **Upload to Netlify**:
    *   Go to [Netlify Drop](https://app.netlify.com/drop).
    *   Drag and drop the **`dist`** folder onto the page.
    *   Your site will be online instantly!

3.  **Note**:
    *   For the contact form and AI chatbot to work, you might need to manually set "Environment Variables" in the "Site Settings" -> "Build & Deploy" -> "Environment" section on Netlify after uploading.

---

## Important Note on Environment Variables
NEVER commit your `.env` file to GitHub. It contains secret keys.
*   **Vercel/Netlify**: You must enter these keys in the "Settings" dashboard of the platform you choose.
