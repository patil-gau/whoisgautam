# 🚀 Gautam v10.5 – Human Patch Notes

A quirky, humorous portfolio website that looks like a changelog/console log of a human. Built with Next.js, TypeScript, and Tailwind CSS.

## ✨ Features

- **Boot Screen Hero** - Terminal-style loading screen with debug logs
- **Patch Notes Career** - Job experience presented as software version releases
- **Superpowers Dashboard** - Skills presented as unstable but effective features
- **Side Quests** - Community work and developer advocacy highlights
- **Fun UI Elements**:
  - 🚀 Custom rocket/bug cursor
  - 💻 CPU usage bar (73% tech, 27% memes)
  - 💡 Floating tooltips with fun facts
  - 🎮 Secret DevRel Mode (Konami code easter egg)
- **Pastel & Rounded Aesthetic** - Cute, welcoming design with lots of personality

## 🛠️ Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React 18** - UI library

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 🌐 Deployment

This portfolio is configured for static deployment on **GitHub Pages**!

### Quick Deploy to GitHub Pages

1. **Create GitHub repository** (public)
2. **Push your code**:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
git push -u origin main
```
3. **Enable GitHub Pages**: Settings → Pages → Source: "GitHub Actions"
4. **Done!** Site will be live at: `https://YOUR-USERNAME.github.io/portfolio/`

📖 **Detailed guide**: See [DEPLOYMENT.md](./DEPLOYMENT.md)  
⚡ **Quick reference**: See [QUICK_DEPLOY.txt](./QUICK_DEPLOY.txt)

## 🎮 Easter Eggs

- **Konami Code**: Press ↑ ↑ ↓ ↓ ← → ← → B A to unlock Secret DevRel Mode!
- **Custom Cursors**: Hover over buttons to see the cursor change from 🚀 to 🐛
- **CPU Bar**: Watch the CPU usage fluctuate between tech and memes
- **Floating Tooltip**: A fun fact appears after 3 seconds

## 📂 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Main page with all sections
│   └── globals.css      # Global styles
├── components/
│   ├── Hero.tsx         # Boot screen section
│   ├── About.tsx        # Bio card
│   ├── Skills.tsx       # Superpowers dashboard
│   ├── Experience.tsx   # Patch notes
│   ├── SideQuests.tsx   # Community work
│   ├── Cred.tsx         # Achievements
│   ├── Contact.tsx      # Contact links
│   ├── CPUBar.tsx       # CPU usage widget
│   ├── Tooltip.tsx      # Floating tooltip
│   └── SecretMode.tsx   # Easter egg overlay
└── public/              # Static assets
```

## 🎨 Customization

### Colors

Edit the Tailwind config in `tailwind.config.js` to change the pastel color scheme:

```js
colors: {
  'pastel-pink': '#FFD4E5',
  'pastel-blue': '#D4E5FF',
  // ... add more colors
}
```

### Content

All content is in the component files. Simply edit the text in:
- `components/Hero.tsx` - Hero section
- `components/Experience.tsx` - Job history
- `components/SideQuests.tsx` - Community work
- etc.

## 📱 Responsive Design

The site is fully responsive and optimized for:
- Desktop (1920px+)
- Laptop (1024px+)
- Tablet (768px+)
- Mobile (375px+)

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click!

### Deploy to Netlify

```bash
npm run build
```

Then drag the `.next` folder to Netlify or connect your GitHub repo.

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Credits

Designed and built by Gautam Patil with chaos & coffee ☕

---

**Version**: 10.5.0  
**Status**: ✅ Ready for production  
**Bugs**: Intentionally weird and funny

