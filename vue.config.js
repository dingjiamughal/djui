const path = require('path');
module.exports = {
    // 修改 src 为 examples
    pages: {
        index: {
                entry: 'examples/main.js',
                template: 'public/index.html',
                filename: 'index.html'
            }
    },
    configureWebpack: {
        resolve: {
            extensions: ['.js', '.vue', '.css', '.less', '.json'],
            alias: {
                src: path.resolve(__dirname, './src')
            }
        }
    },
    // 强制内联CSS
    css: {
        extract: false,
        loaderOptions: {
            less: {
                data: '@import "src/css/utilities/theme.less";'
            }
        }
    },
    // 扩展 webpack 配置，使 packages 加入编译
    chainWebpack: config => {
        config.module
            .rule('js')
            .include.add('packages').end()
            .use('babel')
            .loader('babel-loader')
            .tap(options => {
                // 修改它的选项...
                return options;
            });
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
        types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)));
    }
};

function addStyleResource(rule) {
    rule.use('style-resource')
        .loader('style-resources-loader')
        .options({
            patterns: [
                path.resolve(__dirname, './src/css/utilities/theme.less'),
                path.resolve(__dirname, './src/css/utilities/mixins.less')
            ]
        });
}
