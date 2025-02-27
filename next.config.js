/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,

  i18n: {
    locales: ['en', 'ar'],
    defaultLocale: 'en',
  },
}

module.exports = nextConfig
