# 📚 Technical Documentation Site

A comprehensive technical documentation website built with Astro Starlight, featuring full Arabic language support and RTL (Right-to-Left) layout.

---

## ✨ Features

- 🌐 **Full Arabic Support** - Complete interface and documentation in Arabic
- ↔️ **RTL Layout** - Perfect right-to-left text direction
- 🎨 **Professional Design** - Clean, modern documentation interface
- 📱 **Fully Responsive** - Works flawlessly on mobile, tablet, and desktop
- 🔍 **Built-in Search** - Fast search across all documentation pages
- 🎬 **Multimedia Support** - Embedded images and videos
- 🌙 **Dark Mode** - Beautiful dark theme included
- ⚡ **Lightning Fast** - Built on Astro for optimal performance
- 📝 **MDX Support** - Easy content creation and management
- ♿ **Accessible** - WCAG compliant

---

## 📂 Project Structure

```
├── src/
│   ├── content/
│   │   └── docs/
│   │       ├── digital-video/      # Digital video documentation
│   │       ├── guides/             # User guides
│   │       ├── multimedia-intro/   # Multimedia introduction
│   │       ├── reference/          # Technical reference
│   │       └── index.mdx           # Homepage
│   ├── components/
│   │   ├── Video.astro            # Video component
│   │   └── YouTube.astro          # YouTube embed component
│   └── styles/
│       └── custom.css              # Custom styling with RTL support
├── public/
│   ├── videos/                     # Video files
│   └── images/                     # Image assets
├── astro.config.mjs                # Astro configuration
└── package.json
```

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/yourrepo.git
cd yourrepo
```

2. **Install dependencies**

```bash
npm install
```

3. **Start development server**

```bash
npm run dev
```

4. **Open your browser**

Navigate to `http://localhost:4321`

---

## 📝 Adding Content

### Create a New Documentation Page

1. Create a new `.mdx` file in `src/content/docs/`:

```mdx
---
title: عنوان الصفحة (Page Title)
description: وصف الصفحة (Page Description)
---

# محتوى الصفحة

Your content here...
```

2. The page will automatically appear in the sidebar navigation

### Add Videos

**Local Video:**
```mdx
<video controls width="100%">
  <source src="/videos/example.mp4" type="video/mp4" />
</video>
```

**YouTube Video:**
```mdx
import YouTube from '../../components/YouTube.astro';

<YouTube id="VIDEO_ID" title="Video Title" />
```

### Add Images

```mdx
![Alt Text](/images/example.png)
```

---

## 🎨 Customization

### Modify Colors

Edit `src/styles/custom.css`:

```css
:root {
  --sl-color-bg-sidebar: #1D5DC8;  /* Sidebar background */
  --sl-color-accent: #3b82f6;       /* Accent color */
}
```

### Update Sidebar Navigation

Edit `astro.config.mjs`:

```javascript
sidebar: [
  {
    label: 'البداية',
    items: [
      { label: 'مقدمة', link: '/intro/' },
      { label: 'البدء السريع', link: '/getting-started/' },
    ],
  },
]
```

### Change Site Title

In `astro.config.mjs`:

```javascript
starlight({
  title: 'Your Site Title',
  // ...
})
```

---

## 🛠️ Built With

- [Astro](https://astro.build/) - The web framework for content-driven websites
- [Starlight](https://starlight.astro.build/) - Documentation template for Astro
- [MDX](https://mdxjs.com/) - Markdown with JSX support
- [Noto Sans Arabic](https://fonts.google.com/noto/specimen/Noto+Sans+Arabic) - Arabic font

---

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

### Deploy Options

This site can be deployed to:

- **Vercel** - [Deploy Guide](https://docs.astro.build/en/guides/deploy/vercel/)
- **Netlify** - [Deploy Guide](https://docs.astro.build/en/guides/deploy/netlify/)
- **GitHub Pages** - [Deploy Guide](https://docs.astro.build/en/guides/deploy/github/)
- **Cloudflare Pages** - [Deploy Guide](https://docs.astro.build/en/guides/deploy/cloudflare/)

---

## 📖 Documentation Sections

- **Digital Video** - Video technology and formats documentation
- **Guides** - Step-by-step tutorials and how-tos
- **Multimedia Intro** - Introduction to multimedia systems
- **Reference** - Technical specifications and API reference

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Astro team for the amazing framework
- Starlight for the documentation template
- Google Fonts for Noto Sans Arabic
- The open-source community

---

<div align="center">

**⭐ Star this repo if you find it helpful!**

Made with ❤️ and Astro

</div>