<template>
  <section class="wrapper">
    <TheSideNav class="side-nav" />
    <main class="container">
      <p>
        coming soon...
      </p>
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
  height: 80vh;
}

.side-nav {
  margin-right: 32px;
}

.container {
  margin: auto;
  padding-top: 16px;
}

/* Tablet */
@media screen and (min-width: 551px) and (max-width: 1024px) {
  .wrapper {
    margin: 12px 24px 0 24px;
  }

  .side-nav {
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
