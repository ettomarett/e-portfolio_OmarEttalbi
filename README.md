# Modern Portfolio Website

This is a modern, responsive portfolio website built with Next.js, Tailwind CSS, and Framer Motion. It showcases your education, skills, projects, and professional experience in a visually appealing and interactive way.

## Features
- **Animated Hero Section**: Eye-catching introduction with animated text and profile image.
- **About Section**: Personal introduction, animated skill bars, and education timeline.
- **Education Section**: Displays your academic background with details and locations.
- **Skills Section**: Highlights your technical skills with icons and categories.
- **Projects Showcase**: Masonry grid layout for projects, with filtering and detailed descriptions.
- **Experience Section**: Professional experience and internships.
- **Services Section**: Key areas of expertise and services offered.
- **Contact Section**: Contact information and social media links.
- **Dark Mode**: Toggle between light and dark themes.
- **Responsive Design**: Fully responsive for all devices.
- **Smooth Scrolling & Animations**: Enhanced user experience with Framer Motion and intersection observer.

## Tech Stack
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **React Icons**
- **next-themes** (dark mode)

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/your-portfolio.git
   cd your-portfolio
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure
- `app/` - Main application directory (Next.js App Router)
- `components/` - Reusable UI components and section components
- `public/` - Static assets (images, icons, etc.)
- `styles/` - Global styles and Tailwind configuration

## Customization
- Update your personal information, education, skills, and projects in the respective section files under `app/components/sections/`.
- Replace images in the `public/images/` directory.
- Adjust theme colors and fonts in `tailwind.config.js`.

## Deployment
You can deploy this project to platforms like Vercel, Netlify, or any provider that supports Next.js.

## License
This project is open source and available under the [MIT License](LICENSE).

---

Feel free to customize and enhance this portfolio to best represent your skills and experience! 