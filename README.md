# StudentPortal — Student Directory

A responsive React + Bootstrap student directory inspired by the provided reference image.

## Features
- Bootstrap navbar, breadcrumb, responsive grid/cards, buttons, pagination, and alert.
- React components and props (`Navbar`, `StudentCard`, `App`).
- Search students by name, ID, or major.
- Add a student with the Add New Student modal.
- View a student profile and delete student records.
- Summary stats, responsive layout, and footer.

## Run locally

Requirements: Node.js 18 or newer.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

## Push to GitHub

Create an empty repository on GitHub, then run these commands from this project folder:

```bash
git init
git add .
git commit -m "Build responsive Student Directory with React and Bootstrap"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/student-directory.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username and use the repository URL GitHub provides.
