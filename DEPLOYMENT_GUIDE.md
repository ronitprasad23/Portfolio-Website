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

## Option 3: Netlify &mdash; via GitHub (Recommended for Netlify)

1.  **Connect to Netlify**:
    *   Log in to Netlify.
    *   Click **"Add new site"** -> **"Import an existing project"**.
    *   Select **GitHub** and choose your `Ronit_portfolio` repository.

2.  **Configure Build & Environment Variables**:
    *   **Build Command**: `npm run build`
    *   **Publish Directory**: `dist`
    *   **Environment Variables**:
        *   Click **"Add environment variable"**.
        *   Add `VITE_GEMINI_API_KEY` and paste your key.
        *   Add other keys (`VITE_EMAILJS_SERVICE_ID`, etc.) if needed.

3.  **Deploy**:
    *   Click **"Deploy site"**.

---

## Important Note on Environment Variables
NEVER commit your `.env` file to GitHub. It contains secret keys.
*   **Vercel/Netlify**: You must enter these keys in the "Settings" dashboard of the platform you choose.

## How to Redeploy (After Changing Settings)

If you change Environment Variables, you must redeploy for them to take effect.

### On Netlify:
1.  Go to the **"Deploys"** tab in your site dashboard.
2.  Click the **"Trigger deploy"** button (usually on the right).
3.  Select **"Deploy project without cache"** (recommended to ensure changes apply) or **"Deploy project"**.

### On Vercel:
1.  Go to your **"Deployments"** tab.
2.  Click the three dots **(...)** next to your latest deployment.
3.  Select **"Redeploy"**.

---

## Troubleshooting: API Key Issues (Google Gemini)

If you see `API_KEY_INVALID` or "API Key is missing" on your deployed site (but it works locally), check these common issues:

1.  **API Key Restrictions (Most Common)**:
    *   Go to [Google AI Studio / Cloud Console](https://aistudio.google.com/app/apikey).
    *   Click on your API Key to edit settings.
    *   **Application restrictions**: If set to "HTTP referrers", you MUST add your Netlify domain (e.g., `https://your-site-name.netlify.app/*`).
    *   **Recommendation**: For testing, set "Application restrictions" to **None**.

2.  **Copy-Paste Errors**:
    *   Check your Netlify Environment Variables again.
    *   Ensure there are **no spaces** at the beginning or end of the key.
    *   Ensure there are **no quotes** (`""`) around the key.

3.  **Build Not Updated**:
    *   Did you redeploy *after* adding the key? Vite bundles the key at build time.
    *   trigger a **"Deploy project without cache"** to be sure.

4.  **"Page Not Found" (404) on Refresh**:
    *   This happens because Netlify looks for `projects.html` instead of handling it via React.
    *   **Fix**: Create a file named `_redirects` inside your `public/` folder with this content:
        ```
        /* /index.html 200
        ```

