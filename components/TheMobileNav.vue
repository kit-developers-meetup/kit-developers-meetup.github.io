<template>
  <div style="display: flex;">
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

      <span style="display: flex; justify-content: space-between;">
        <a
          href="https://twitter.com/kitdm_official"
          target="_blank"
          rel="noopener noreferrer"
        >
          <fa class="mobile-nab__icon" :icon="faTwitter" />
        </a>
        <a
          href="https://github.com/kit-developers-meetup"
          target="_blank"
          rel="noopener noreferrer"
        >
          <fa class="mobile-nab__icon" :icon="faGithub" />
        </a>
        <a
          href="https://kit-developers-meetup.connpass.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <fa class="mobile-nab__icon" :icon="fas.faTicketAlt" />
        </a>
      </span>
    </nav>
    <div style="background-color: rgba(0, 0, 0, 0.253); width: 36vw;" @click="toggleMobileNavDisplay" />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

export default {
  name: 'TheMobileNav',
  computed: {
    fas() {
      return fas
    },
    faTwitter() {
      return faTwitter
    },
    faGithub() {
      return faGithub
    }
  },
  methods: {
    ...mapActions(['toggleMobileNavDisplay'])
  }
}
</script>

<style lang="scss" scoped>
.mobile-nav {
  background-color: #fff;
  box-shadow: 4px 0 10px #c0c0c0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 64vw;
  padding: 32px 24px;

  .mobile-nav__linklist {
    list-style: none;
    padding: 0;
  }

  .mobile-nav__link {
    border-left: 4px solid #666;
    color: #535c68;
    font-size: 1rem;
    margin: 4vh 0;
    padding-left: 8px;
    text-decoration: none;

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

  .mobile-nab__icon {
    height: 1.25rem;
    width: 1.25rem;
    color: #535c68;
  }

  .a {
    background-color: rgba(0, 0, 0, 0.253);
  }
}
</style>
