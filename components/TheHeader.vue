<template>
  <header class="header">
    <div class="header__btn" @click="toggleMobileNavDisplay">
      <fa :icon="fas.faBars" style="height: 24px; width: 24px; color: #535c68;" />
    </div>
    <span style="display: flex;">
      <img class="header__logo" src="~/assets/logo.png" height="40px" alt="logo">
      <h1 class="header__title">
        <span class="header__text--red">K</span>
        <span class="header__text--orange">I</span>
        <span class="header__text--yellow">T</span>
        <span class="header__text--blue" style="margin-left: 8px;">D</span>
        <span class="header__text">evelopers</span>
        <span class="header__text--green" style="margin-left: 8px;">M</span>
        <span class="header__text">eetup</span>
      </h1>
    </span>
    <span style="display: flex;">
      <a
        class="header__link--twitter"
        href="https://twitter.com/kitdm_official"
        target="_blank"
        rel="noopener noreferrer"
      >
        <fa :icon="faTwitter" />
        <span class="header__link-text">Twitter</span>
      </a>
      <a
        class="header__link--github"
        href="https://github.com/kit-developers-meetup"
        target="_blank"
        rel="noopener noreferrer"
      >
        <fa :icon="faGithub" />
        <span class="header__link-text">GitHub</span>
      </a>
      <a
        class="header__link--connpass"
        href="https://kit-developers-meetup.connpass.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <fa :icon="fas.faTicketAlt" />
        <span class="header__link-text">connpass</span>
      </a>
    </span>
  </header>
</template>

<script>
import { mapActions } from 'vuex'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

export default {
  name: 'TheHeader',
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
.header {
  display: flex;
  justify-content: space-between;
  padding: 12px 80px;
  width: 100vw;
  box-shadow: 0px 2px 4px #bbb;

  .header__btn {
    display: none;
    margin: auto 12px;
  }

  .header__logo {
    margin: auto 0;
  }

  .header__title {
    font-size: 0px;
    margin: auto 0 auto 12px;
  }

  .header__text {
    font-size: 1.5rem;

    &--red {
      @extend .header__text;
      color: #eb4d4b;
    }

    &--orange {
      @extend .header__text;
      color: #f0932b;
    }

    &--yellow {
      @extend .header__text;
      color: #ffc000;
    }

    &--blue {
      @extend .header__text;
      color: #7ed6df;
    }

    &--green {
      @extend .header__text;
      color: #badc58;
    }
  }

  .header__link {
    color: #535c68;
    margin: auto 16px;
    text-decoration: none;
    transition-property: color;
    transition-duration: 0.5s;

    &--twitter {
      @extend .header__link;
      &:hover {
        color: #55acee;
      }
    }

    &--github {
      @extend .header__link;
      &:hover {
        color: #24292e;
      }
    }

    &--connpass {
      @extend .header__link;
      &:hover {
        color: #c82a16;
      }
    }
  }
}

@media screen and (min-width: 708px) and (max-width: 1024px) {
  .header {
    padding: 12px 24px;
  }
}

@media screen and (max-width: 707px) {
  .header {
    padding: 12px;

    .header__link-text {
      display: none;
    }
  }
}

@media screen and (max-width: 550px) {
  .header {
    justify-content: flex-start;

    .header__btn {
      display: flex;
    }

    .header__logo {
      height: 32px;
    }

    .header__text {
      font-size: 1.3rem;
    }

    .header__link {
      display: none;
    }
  }
}

@media screen and (max-width: 370px) {
  .header {
    padding: 12px 8px;

    .header__btn {
      margin-left: 8px;
      margin-right: 8px;
      display: flex;
    }

    .header__logo {
      height: 28px;
    }

    .header__text {
      font-size: 1.15rem;
    }
  }
}
</style>
