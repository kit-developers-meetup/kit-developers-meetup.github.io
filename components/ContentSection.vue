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

  ul {
    list-style: none;
    margin-bottom: 24px;
    padding: 0;
  }
}
</style>
