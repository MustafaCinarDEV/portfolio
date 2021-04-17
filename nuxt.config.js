import components from "./config/components"
import css from "./config/css"

let description =
  " Hello, I'm AdemCan, let's introduce myself first and then talk about what I have done. I live in Istanbul at the age of 17, I am a high school student. I am a Front End developer, have been working in this business since 2018 and developing my own career."

export default {
  css,
  buildModules: [
  '@nuxtjs/tailwindcss',

],
  head: {
    title: 'AdemCan',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#2C2F33' },
      {
        name: 'og:site_name',
        hid: 'og:site_name',
        content: 'ademcan.xyz',
      },
      {
        name: 'description',
        hid: 'description',
        content: description,
      },
      {
        name: 'og:description',
        hid: 'og:description',
        content: description,
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.png' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Heebo:wght@100&display=swap',
        media: 'all',
      },
    ],
  },
  loading: { color: '#7289DA' },
  css: [],
  components: true,
  vWave: {
    color: 'green',
    duration: 0.2,
    finalOpacity: 0.2
  },
  build: {},
}