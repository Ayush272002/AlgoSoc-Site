# AlgoSoc - Algorithmic and Programming Society

<div align="center">
  <img src="public/logo.png" alt="AlgoSoc Logo" width="120" height="120">
  
  **Where algorithms meet innovation**
  
  [![Next.js](https://img.shields.io/badge/Next.js-15.4.6-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.23.12-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
  
  [🌐 Live Site](https://algosoc.com) • [📸 Instagram](https://www.instagram.com/algo.soc/) • [💬 Discord](#) • [📧 Contact](#)
</div>

## 📖 About

AlgoSoc (Algorithmic and Programming Society) is a society that brings together passionate programmers, competitive coders, and tech visionaries. Our mission is to foster innovation in computing through hands-on workshops, competitive programming contests, and networking opportunities.

### 🎯 What We Offer

- **🧩 Algorithm Workshops** - Deep dive into data structures and problem-solving techniques
- **🏆 Competitive Programming** - Participate in coding competitions and hackathons
- **🎯 Career Development** - Technical interview prep and industry networking
- **🤝 Community** - Connect with like-minded programmers and tech enthusiasts

## 🛠️ Tech Stack

### Frontend

- **Framework**: [Next.js 15.4.6](https://nextjs.org/) with App Router
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion 12.23.12](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

### Development

- **Package Manager**: pnpm
- **Linting**: ESLint with Next.js config
- **Font**: Geist Sans & Geist Mono

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm 

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/AlgoSoc/AlgoSoc-Site.git
   cd AlgoSoc-Site
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Run the development server**

   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
pnpm build
pnpm start
```

## 📁 Project Structure

```
algosoc/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles and CSS variables
├── components/             # React components
│   ├── ui/                 # UI components (buttons, cards, etc.)
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section
│   ├── Feature.tsx         # Features showcase
│   ├── Events.tsx          # Events section
│   ├── Footer.tsx          # Footer with social links
│   └── NeuralNetworkBackground.tsx
├── utils/                  # Utility functions and data
│   ├── events.json         # Events data
│   ├── links.ts            # External links configuration
│   ├── StaggerContainer.ts # Animation variants
│   └── FadeInUp.ts         # Animation variants
└── README.md               # You are here!
```

## 🎨 Customization

### Colors

The project uses a custom color scheme defined in CSS variables:

```css
:root {
  --algo-yellow: #ffce6d; /* Primary brand color */
}
```

### Adding New Events

Update the `utils/events.json` file:

```json
{
  "type": "Workshop",
  "date": "Mar 15",
  "title": "Your Event Title",
  "description": "Event description here...",
  "color": "blue"
}
```

### Social Media Links

Update links in `utils/links.ts`:

```typescript
export const INSTAGRAM_LINK = "https://instagram.com/algo.soc";
export const GITHUB_LINK = "https://github.com/AlgoSoc";
export const DISCORD_LINK = "https://discord.gg/algosoc";
```

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Use semantic commit messages
- Ensure responsive design
- Test across different browsers
- Maintain accessibility standards

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact & Social Media

- **Website**: [algosoc.com](https://algosoc.com)
- **Instagram**: [@algo.soc](https://www.instagram.com/algo.soc/)
- **GitHub**: [AlgoSoc](https://github.com/AlgoSoc)
- **Email**: [contact@algosoc.com](mailto:contact@algosoc.com)
- **Discord**: Join our community server

---

<div align="center">
  <p><strong>Built with ❤️ by the AlgoSoc Team</strong></p>
</div>
