<template>
  <nav class="side-nav">
    <ul class="side-nav__linklist">
      <li class="side-nav__link--red" style="margin-top: 0;">
        KIT Developers Meetup とは
      </li>
      <li class="side-nav__link--orange">
        活動内容
      </li>
      <li class="side-nav__link--yellow">
        開催日時
      </li>
      <li class="side-nav__link--blue">
        参加方法
      </li>
      <li class="side-nav__link--green">
        Q & A
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'TheSideNav'
}
</script>

<style lang="scss" scoped>
.side-nav {
  border-right: 1px solid #ccc;
  height: 84vh;
  padding-right: 32px;

  .side-nav__linklist {
    list-style: none;
    padding: 16px 0 0 0;
  }

  .side-nav__link {
    border-left: 4px solid #666;
    font-size: 1rem;
    margin: 32px 0;
    padding-left: 8px;

    &--red {
      @extend .side-nav__link;
      border-color: #eb4d4b;
    }

    &--orange {
      @extend .side-nav__link;
      border-color: #f0932b;
    }

    &--yellow {
      @extend .side-nav__link;
      border-color: #ffc000;
    }

    &--blue {
      @extend .side-nav__link;
      border-color: #7ed6df;
    }

    &--green {
      @extend .side-nav__link;
      border-color: #badc58;
    }
  }
}

/* Tablet */
@media screen and (min-width: 551px) and (max-width: 1024px) {
  .side-nav {
    height: 90vh;
    padding-right: 24px;
  }
}
</style>
