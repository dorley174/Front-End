const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    assetPrefix: isProd ? '/Front-End/' : '',
    basePath: isProd ? '/Front-End' : '',
    trailingSlash: true,
    reactStrictMode: true,
    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        });
        return config;
    }
};

export default nextConfig;
