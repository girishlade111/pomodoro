/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Set for GitHub Pages project-site deploy (https://girishlade111.github.io/pomodoro/).
  // Remove basePath (or set to '') when deploying to a custom domain or a root host like Vercel/Netlify.
  basePath: '/pomodoro',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig