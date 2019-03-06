<template>
  <section class="wrapper">
    <TheSideNav class="sidenav" />
    <main class="container">
      <div>content</div>
    </main>
  </section>
</template>

<script>
import TheSideNav from '~/components/TheSideNav'

export default {
  components: {
    TheSideNav
  }
}
</script>


<style>
.wrapper {
  display: flex;
  margin: 24px 80px 0 80px;
  min-height: 100vh;
}

.sidenav {
  margin-right: 32px;
}

.container {
  padding-top: 16px;
}

/* Tablet */
@media screen and (min-width: 551px) and (max-width: 1024px) {
  .wrapper {
    margin: 12px 24px 0 24px;
  }

  .sidenav {
    margin-right: 24px;
  }
}

/* Smart Phone */
@media screen and (max-width: 550px) {
  .wrapper {
    margin: 0 24px;
  }

  .side-nav {
    display: none;
  }
}
</style>
