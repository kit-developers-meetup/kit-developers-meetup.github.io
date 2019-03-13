<template>
  <div class="content">
    <h1 class="content__title">
      <slot name="title" />
    </h1>
    <div class="content__body">
      <slot name="body" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentSction'
}
</script>

<style lang="scss" scoped>
.content {
  .content__title {
    font-size: 1.25rem;
    margin: 0 0 8px 0;
  }

  .content__body {
    font-size: 1rem;
    padding-left: 1.25rem;
  }

  table {
    margin-bottom: 24px;
  }

  a {
    color: #535c68;
  }
}

/* Smart Phone */
@media screen and (max-width: 550px) {
  .content {
    .content__title {
      font-size: 1.15rem;
    }

    .content__body {
      font-size: 0.9rem;
    }
  }
}
</style>
