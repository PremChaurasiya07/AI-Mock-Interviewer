// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

module.exports = {
  async rewrites() {
    console.log('Rewrites function called');
    return [
      {
        source: '/:path*',
        destination: '/',
      },
    ];
  },
};

