<template>
  <div>
    <transition>
      <TheMobileNav v-show="isMobileNavDisplayed" style="position: fixed; z-index: 1;" />
    </transition>
    <TheHeader style="position: fixed; top: 0; background-color: #fff; z-index: 0;" />
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


<style lang="scss">
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

  body {
    overflow-x: hidden;
  }
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.v-enter-active,
.v-leave-active {
  transition: transform 0.4s;
}

.v-enter {
  transform: translateX(-64vw);
}

.v-leave-to {
  transform: translateX(-64vw);
}
</style>
