/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
    sassOptions: {
        // Absolute Import Alias for Scss Base Styles
        includePaths: [path.join(__dirname, 'src/base-styles/')],
        // Enable @debug, @warn scss functionality
        logger: {
            warn: function (message) {
                console.warn(message)
            },
            debug: function (message) {
                console.log(message)
            }
        },
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                port: '',
            },
        ],
    },
}

module.exports = nextConfig
