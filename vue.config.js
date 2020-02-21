module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/spotify-web' : '',

  transpileDependencies: ['vuetify']
}
