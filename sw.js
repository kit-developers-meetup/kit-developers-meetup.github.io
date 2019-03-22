importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/442fcbdfc8cd96ea9d4e.js",
    "revision": "c5dc4580fe34a1b219ac5b0597255f32"
  },
  {
    "url": "/_nuxt/a5fdcc0f9e6f9a9ccad3.js",
    "revision": "56117457e743c0f6ac31b491fbe5673a"
  },
  {
    "url": "/_nuxt/c812986db542ab842b34.js",
    "revision": "0bce562feda9b7e7e539b40c7791d2b3"
  },
  {
    "url": "/_nuxt/ebed0e508dbb787c8e3c.js",
    "revision": "f21ff8bcc3107429a0550fe7aa906fbb"
  },
  {
    "url": "/_nuxt/f75136a1bfd1293813a1.js",
    "revision": "063c421a22b3aa8a7ff0083df9b936fa"
  }
], {
  "cacheId": "kit-developers-meetup.github.io",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
