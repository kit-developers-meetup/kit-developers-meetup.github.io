<template>
  <nav class="sidenav">
    <ul class="sidenav__linklist">
      <li class="sidenav__link--red" style="margin-top: 0;">
        KIT Developers Meetup とは
      </li>
      <li class="sidenav__link--orange">
        活動内容
      </li>
      <li class="sidenav__link--yellow">
        開催日時
      </li>
      <li class="sidenav__link--blue">
        参加方法
      </li>
      <li class="sidenav__link--green">
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
.sidenav {
  border-right: 1px solid #ccc;
  height: 84vh;
  padding-right: 32px;

  .sidenav__linklist {
    list-style: none;
    padding: 16px 0 0 0;
  }

  .sidenav__link {
    border-left: 4px solid #666;
    font-size: 1rem;
    margin: 32px 0;
    padding-left: 8px;

    &--red {
      @extend .sidenav__link;
      border-color: #eb4d4b;
    }

    &--orange {
      @extend .sidenav__link;
      border-color: #f0932b;
    }

    &--yellow {
      @extend .sidenav__link;
      border-color: #ffc000;
    }

    &--blue {
      @extend .sidenav__link;
      border-color: #7ed6df;
    }

    &--green {
      @extend .sidenav__link;
      border-color: #badc58;
    }
  }
}

/* Tablet */
@media screen and (min-width: 569px) and (max-width: 1024px) {
  .sidenav {
    height: 90vh;
    padding-right: 24px;
  }
}

/* Smart Phone */
@media screen and (max-width: 568px) {
  .sidenav {
    display: none;
  }
}
</style>
