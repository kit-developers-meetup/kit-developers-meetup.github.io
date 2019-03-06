<template>
  <div>
    <TheMobileNav v-if="isMobileNavDisplayed" style="position: absolute;" />
    <TheHeader />
    <nuxt />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TheHeader from '~/components/TheHeader'
import TheMobileNav from '~/components/TheMobileNav'

export default {
  components: {
    TheHeader,
    TheMobileNav
  },
  computed: {
    ...mapGetters(['isMobileNavDisplayed'])
  }
}
</script>


<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  min-height: 100vh;
  min-width: 100vw;
  color: #535c68;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
