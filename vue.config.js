'use strict'

// Reference: https://github.com/vuejs/vue-cli/blob/dev/docs/config/README.md
module.exports = {

  pages: {
    'index': {
      entry: 'src/pages/index/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      // when using title option, template title tag needs to be 
      // <title><%= htmlWebpackPlugin.options.title 
      title: 'Home',
      chunks: ['chunk-vendors', 'chunk-common', 'index'],
    }
  }
}