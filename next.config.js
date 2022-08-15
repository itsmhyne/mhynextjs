/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  env: {
    appName: 'mhyeNextJs',
  },
  async rewrites() {
    return [
      {
        source: '/login',
        destination: '/auth/login'
      },
      {
        source: '/register',
        destination: '/auth/register'
      }
    ]
  }
}
