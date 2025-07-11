# Portfolio Backend

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file in the `server` directory with the following:
   ```env
   MONGO_URI=your_mongodb_connection_string
   SMTP_USER=your_gmail_address@gmail.com
   SMTP_PASS=your_gmail_app_password
   CONTACT_EMAIL=dharaneesh19112006@gmail.com
   PORT=5000
   ```
   - `MONGO_URI`: MongoDB connection string (e.g., from MongoDB Atlas)
   - `SMTP_USER`/`SMTP_PASS`: Gmail credentials for sending emails (use an App Password)
   - `CONTACT_EMAIL`: Where contact form messages are sent

3. Start the server:
   ```bash
   node index.js
   ```

## API Endpoints

- `POST /api/contact` — Contact form submission
- `GET /api/github/:username` — Public GitHub activity for a user
- `GET /api/admin/messages` — Get all contact messages (admin only, requires `x-admin-token` header)

### Admin Dashboard

To access the admin dashboard route, set an `ADMIN_TOKEN` in your `.env`:

```env
ADMIN_TOKEN=your_secret_token
```

Then, make a GET request to `/api/admin/messages` with the header:

```
x-admin-token: your_secret_token
```

This will return all contact messages in the database, sorted by most recent. 

---

Absolutely! You can easily change your personal details, project info, skills, and more in your portfolio. Here’s how to do it and see the result locally before deploying:

---

## 1. **Change Your Details**

### **A. Developer Name, Title, Tagline**
- Edit `client/src/components/Home.js`
  - Change `"Your Name"`, `"Full Stack Web Developer"`, and the tagline to your own.

### **B. About Me Section**
- Edit `client/src/components/About.js`
  - Update the bio text and (optionally) the headshot image URL.

### **C. Skills**
- Edit `client/src/components/Skills.js`
  - Add/remove skills and icons as you wish.

### **D. Projects**
- Edit `client/src/components/Projects.js`
  - Update the `projects` array with your real project titles, descriptions, tech stack, GitHub/demo links.

### **E. Resume**
- Replace `client/public/resume.pdf` with your actual resume file.

### **F. Contact Email**
- In your backend `.env`, set `CONTACT_EMAIL` to your real email.

---

## 2. **See the Result Locally**

### **A. Start the Backend**
1. Open a terminal in `/server`
2. Run:
   ```
   npm install
   npm start
   ```

### **B. Start the Frontend**
1. Open a terminal in `/client`
2. Run:
   ```
   npm install
   npm start
   ```
3. Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 3. **Preview Your Changes**
- As you edit the files, the site will auto-reload and show your updates.
- Test the contact form, project links, and all sections.

---

## 4. **When Ready**
- Commit your changes.
- Deploy as described earlier to get your live website link.

---

If you want, tell me what details you want to change (name, bio, skills, projects, etc.), and I can make the edits for you automatically!  
Or, if you want to do it yourself, just follow the file locations above. Let me know if you need help with any specific section! 

---

## 1. **react-icons/si: SiVisualstudiocode not found**

**What happened:**  
You tried to import `SiVisualstudiocode` from `react-icons/si`, but this icon does not exist in the package.

**How to fix:**  
- Open `client/src/components/Skills.js`
- Remove or replace this line:
  ```js
  import { SiVisualstudiocode } from 'react-icons/si';
  ```
- If you want a VS Code icon, use `SiVscode` instead:
  ```js
  import { SiVscode } from 'react-icons/si';
  ```
  And update your skills array to use `SiVscode`.

---

## 2. **Tailwind/PostCSS Plugin Error**

**What happened:**  
Your PostCSS config is using `tailwindcss` directly, but the plugin has moved to a new package: `@tailwindcss/postcss`.

**How to fix:**
1. **Install the new package:**
   ```bash
   npm install -D @tailwindcss/postcss
   ```
2. **Update your `postcss.config.js`** in `/client` to:
   ```js
   module.exports = {
     plugins: {
       '@tailwindcss/postcss': {},
       autoprefixer: {},
     },
   };
   ```
   Or, if you want to keep the classic syntax, try:
   ```js
   module.exports = {
     plugins: [
       require('@tailwindcss/postcss'),
       require('autoprefixer'),
     ],
   };
   ```

---

## **Summary of What To Do**

1. **Fix the icon import in `Skills.js`** (remove or replace `SiVisualstudiocode`).
2. **Install the new Tailwind PostCSS plugin and update your config.**
3. **Restart your React app** (`npm start` in `/client`).

---

If you want, I can make the code changes for you—just let me know!  
Or, run the above commands and edits, and your app should compile and run fine. 

---

You are seeing this error because your version of Tailwind CSS (v3.4+) **requires a different PostCSS plugin setup** than before. The error message is misleading: there is **no package called `@tailwindcss/postcss`**. The correct setup is to use `require('tailwindcss')` in your `postcss.config.js`, but you must ensure that all related packages (`tailwindcss`, `postcss`, `autoprefixer`) are compatible and up to date.

**This error is common with mismatched or corrupted dependencies.**

---

## **How to Fix (Step-by-Step, Guaranteed):**

### 1. **Delete node_modules and package-lock.json**
This ensures a clean install.

```bash
cd client
rm -rf node_modules package-lock.json
```

### 2. **Install the correct versions**
Install the latest compatible versions:

```bash
npm install tailwindcss@latest postcss@latest autoprefixer@latest
```

### 3. **Check your `postcss.config.js`**
It should look like this:
```js
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};
```

### 4. **Start your app**
```bash
npm start
```

---

## **If you still see the error:**
- Make sure you do NOT have `@tailwindcss/postcss` in your config or installed (it does not exist).
- Make sure there are no typos in your `postcss.config.js`.
- If you use VS Code, sometimes you need to restart the editor after deleting `node_modules`.

---

## **Summary**
- Clean out old dependencies.
- Install the latest versions of Tailwind, PostCSS, and Autoprefixer.
- Use the correct `postcss.config.js` (as above).
- Start your app.

---

**If you want, I can run these commands for you. Would you like me to proceed and fix it automatically?**

**Here's how to fix it:**

1. **Update your `postcss.config.js` file in `/client` to look like this:**
   ```js
   module.exports = {
     plugins: {
       tailwindcss: {},
       autoprefixer: {},
     }
   }
   ```
   - Make sure you are NOT using `require('tailwindcss')` or `require('autoprefixer')` in an array. The new format is an object as shown above.

2. **Ensure you do NOT have `@tailwindcss/postcss7-compat` installed.**  
   You should only have `tailwindcss`, `postcss`, and `autoprefixer` as dependencies.

3. **Double-check your installed versions:**
   - `tailwindcss` should be v3 or later.
   - `postcss` should be v8 or later.
   - `autoprefixer` should be v10 or later.

4. **After updating the config, restart your dev server:**
   - Stop the current process (`Ctrl+C` in the terminal).
   - Run `npm start` again.

---

**If you want me to automatically update your `postcss.config.js` to the correct format, let me know!**  
Or, if you want to see the current contents of your `postcss.config.js`, please upload or paste it here.

Let me know how you'd like to proceed!

---

You have a **version conflict** between Tailwind CSS packages:
- You have both `tailwindcss@4.1.11` (devDependency) and `tailwindcss@3.4.17` (dependency of `react-scripts`).
- You also have `@tailwindcss/postcss` (which is for Tailwind v4+), but your `react-scripts` is using Tailwind v3.

**This is why you keep getting the error. React Scripts (Create React App) does not support Tailwind v4+ out of the box.**

---

## How to Fix (Step-by-Step)

1. **Uninstall all Tailwind/PostCSS-related packages:**
   ```sh
   npm uninstall tailwindcss @tailwindcss/postcss autoprefixer postcss
   ```

2. **Install the latest Tailwind v3 (not v4), PostCSS, and Autoprefixer:**
   ```sh
   npm install tailwindcss@3.4.4 postcss@8.4.38 autoprefixer@10.4.19
   ```

3. **Remove `@tailwindcss/postcss` from your `devDependencies` in `package.json`.**
   - You can do this manually or with:
     ```sh
     npm uninstall @tailwindcss/postcss
     ```

4. **Ensure your `postcss.config.js` is:**
   ```js
   module.exports = {
     plugins: {
       tailwindcss: {},
       autoprefixer: {},
     }
   }
   ```

5. **Delete `node_modules` and `package-lock.json` again:**
   ```sh
   rm -rf node_modules package-lock.json
   ```

6. **Reinstall everything:**
   ```sh
   npm install
   ```

7. **Start your app:**
   ```sh
   npm start
   ```

---

Would you like me to run these commands for you automatically?  
**This will finally resolve the error and allow you to deploy.**

Let me know if you want me to proceed!

Great! Since you’ve completed all the steps to resolve the Tailwind/PostCSS version conflict, let’s verify that everything is working:

1. **Start your React app** (if it’s not already running):
   ```sh
   npm start
   ```
2. **Check for errors in the terminal and browser.**
   - If the app compiles and loads, the issue is fixed!
   - If you see any errors, please copy and paste the exact error message here.

---

### Next Steps

- If your app is running without errors, you’re ready to deploy!
- If you still see any issues, let me know the details so I can help you debug further.

Would you like instructions for deploying your portfolio now, or do you want to confirm the app is running first?