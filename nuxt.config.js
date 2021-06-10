import { resolve } from 'path'

export default {
    // plugins: [
    //     {src: '~/plugins/vuetify.js', ssr: false}
    // ],
    // css: [
    //     {src:'~/assets/css/info.css'}
    // ],
    // build: {
    //     vendor: ['vuetify'],
    // }
    buildModules: [
        // With options
        ['@nuxtjs/vuetify', { /* module options */ }]
      ]
}