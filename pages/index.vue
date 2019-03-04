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
</style>
