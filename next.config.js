/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com', 'example2.com', 'example.com', 'randomwordgenerator.com', 'lh3.googleusercontent.com', 'imgtr.ee'],
  },
}

module.exports = nextConfig
