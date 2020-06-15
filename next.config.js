module.exports = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            issuer: {
                test: /\.(js|ts)x?$/,
            },
            use: ['@svgr/webpack'],
        }, {
            test: /\.(pdf|docx?)$/i,
            loader: 'file-loader',
            options: {
                name: '[path][name].[ext]',
            }
        });

        return config;
    },
};