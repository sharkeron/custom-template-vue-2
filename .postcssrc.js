// https://github.com/michael-ciniawsky/postcss-load-config

const cssnano = require('cssnano')

module.exports = {
    "plugins": {
        "cssnano": {
            preset: 'default',
            autoprefixer: {
                browsers: ['last 2 versions'],
                add: true
            }
        }
    }
}