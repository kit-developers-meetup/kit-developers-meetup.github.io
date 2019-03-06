<template>
  <nav class="mobile-nav">
    <ul class="mobile-nav__linklist">
      <li class="mobile-nav__link--red" style="margin-top: 0;">
        KIT Developers Meetup とは
      </li>
      <li class="mobile-nav__link--orange">
        活動内容
      </li>
      <li class="mobile-nav__link--yellow">
        開催日時
      </li>
      <li class="mobile-nav__link--blue">
        参加方法
      </li>
      <li class="mobile-nav__link--green">
        Q & A
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'TheMobileNav'
}
</script>

<style lang="scss" scoped>
.mobile-nav {
  border-right: 1px solid #ccc;
  height: 100vh;
  padding-right: 32px;

  .mobile-nav__linklist {
    list-style: none;
    padding: 16px 0 0 0;
  }

  .mobile-nav__link {
    border-left: 4px solid #666;
    font-size: 1rem;
    margin: 32px 0;
    padding-left: 8px;

    &--red {
      @extend .mobile-nav__link;
      border-color: #eb4d4b;
    }

    &--orange {
      @extend .mobile-nav__link;
      border-color: #f0932b;
    }

    &--yellow {
      @extend .mobile-nav__link;
      border-color: #ffc000;
    }

    &--blue {
      @extend .mobile-nav__link;
      border-color: #7ed6df;
    }

    &--green {
      @extend .mobile-nav__link;
      border-color: #badc58;
    }
  }
}
</style>
