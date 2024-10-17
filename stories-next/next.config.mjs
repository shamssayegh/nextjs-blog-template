/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
      ignoreBuildErrors: true,
    },
  };

  // next.config.js
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  // Any existing Next.js config options here
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
});

  
  export default nextConfig;
  