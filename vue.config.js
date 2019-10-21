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
    },
    'deets': {
      entry: 'src/pages/deets/main.js',
      template: 'public/index.html',
      filename: 'deets/index.html',
      title: 'Deets',
      chunks: ['chunk-vendors', 'chunk-common', 'deets'],
    },
    'faq': {
      entry: 'src/pages/faq/main.js',
      template: 'public/index.html',
      filename: 'faq/index.html',
      title: 'FAQ',
      chunks: ['chunk-vendors', 'chunk-common', 'faq'],
    },
    'registry': {
      entry: 'src/pages/registry/main.js',
      template: 'public/index.html',
      filename: 'registry/index.html',
      title: 'Buy us stuff',
      chunks: ['chunk-vendors', 'chunk-common', 'registry'],
    },
    'rsvp': {
      entry: 'src/pages/rsvp/main.js',
      template: 'public/index.html',
      filename: 'rsvp/index.html',
      title: 'LOL YA TOO EARLY',
      chunks: ['chunk-vendors', 'chunk-common', 'rsvp'],
    }

  }
}