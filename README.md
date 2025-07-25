# Daily UI Dashboard - Daily UI Challenge Showcase

[![Live Demo](https://img.shields.io/badge/Live_Demo-Visit_Site-brightgreen?style=for-the-badge)](https://benedekkata.github.io/100-day-daily-ui-dashboard/)

A personal dashboard to track and showcase my solutions to the [Daily UI challenges](https://dailyui.co/).

<!--
  **✨ Add a Screenshot later✨**
-->

## 🚀 Features

- Displays a collection of completed Daily UI challenges.
- Individual, routable pages for each challenge solution.
- Responsive design for various screen sizes.
- Modern UI built with ShadCn/UI components.
- Type-safe routing with TanStack Router.
- Fast development and build times powered by Vite.

## 🛠️ Tech Stack

- **Framework:** [React](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [ShadCn/UI](https://ui.shadcn.com/)
- **Routing:** [TanStack Router (@tanstack/react-router)](https://tanstack.com/router/v1/docs/overview)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Deployment:** [GitHub Pages](https://pages.github.com/) via [GitHub Actions](https://github.com/features/actions)

## 🏁 Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/), [yarn](https://yarnpkg.com/), or [pnpm](https://pnpm.io/)

### Installation & Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/benedekkata/100-day-daily-ui-dashboard.git
   cd 100-day-daily-ui-dashboard
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   # yarn install
   # or
   # pnpm install
   ```

3. **Run the development server:**
   The app will be available at `http://localhost:5173` (or another port if 5173 is busy).

   ```bash
   npm run dev
   # or
   # yarn dev
   # or
   # pnpm dev
   ```

4. **Build for production:**
   This will create a `dist` folder with the optimized build artifacts.

   ```bash
   npm run build
   # or
   # yarn build
   # or
   # pnpm build
   ```

## 🚀 Deployment

This project is automatically deployed to GitHub Pages whenever changes are pushed to the `main` branch. The deployment process is handled by a GitHub Actions workflow defined in `.github/workflows/deploy.yml`.

The live site is available at: `https://benedekkata.github.io/100-day-daily-ui-dashboard/`

## 📁 Project Structure (Brief Overview)

```text
100-day-daily-ui-dashboard/
├── .github/workflows/ # GitHub Actions CI/CD configuration
├── public/ # Static assets
├── src/
│ ├── components/ # Shared UI components (including ShadCn/UI)
│ │ └── ui/ # ShadCn generated components
│ ├── challenges/ # Components for each specific Daily UI challenge solution
│ ├── lib/ # Utility functions (e.g., ShadCn's utils.ts)
│ ├── routes/ # Route-specific components (layouts, pages)
│ ├── main.tsx # Application entry point, router setup
│ ├── index.css # Global styles, Tailwind directives
| ├── vite-env.d.ts
| └── routeTree.gen.ts # Auto generated routes (TanStack Router)
├── .gitignore
├── index.html # Main HTML entry point for Vite
├── package.json
├── package-lock.json
├── README.md
├── vite.config.ts
├── eslint.config.js
└── tsconfig.json # TypeScript configuration
```

## License

This project is proprietary. See [LICENSE](./LICENSE) for details.

## 🙏 Acknowledgements

- [Daily UI](https://dailyui.co/) for the design challenges and inspiration.
- The creators and maintainers of React, Vite, Tailwind CSS, ShadCn/UI, and TanStack Router.

## 👤 Author

- Katalin Benedek
- GitHub: [@benedekkata](https://github.com/benedekkata)
- LinkedIn: [Katalin Benedek](https://www.linkedin.com/in/katalin-benedek/)

---

Made with ❤️ and code.
