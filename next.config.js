const withPlugins = require('next-compose-plugins');
const withImages = require('next-images')
const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)$/,
})

module.exports = withPlugins([withMDX,  withImages], {
  pageExtensions: ['js', 'jsx', 'md', 'mdx']
});