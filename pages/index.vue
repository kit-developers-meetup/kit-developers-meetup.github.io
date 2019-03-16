<template>
  <div class="wrapper">
    <TheSideNav class="side-nav" />
    <div class="container">
      <ContentSection id="about" class="content">
        <template slot="title">
          # KIT Developers Meetup とは
        </template>
        <template slot="body">
          <p>金沢工業大学を中心とした周辺地域のエンジニアの交流と成長を目的としたイベントです。</p>
          <p>
            主催者である
            <a href="https://twitter.com/saitoeku3" target="_blank" rel="noopener noreferrer">
              saitoeku3
              <fa class="mobile-nab__icon" :icon="fas.faExternalLinkAlt" />
            </a>
            が学生ということもあり「学生が参加しやすいイベント」を目指しています。
          </p>
        </template>
      </ContentSection>

      <ContentSection id="activities" class="content">
        <template slot="title">
          # 活動内容
        </template>
        <template slot="body">
          <p>もくもく会をメインに活動しています。</p>
          <p>活動中はあなたの好きな作業をして、楽しい時間を過ごしましょう。</p>
          <p>プログラミングやデザインに限らず、読書や学習など自由に過ごしてください。</p>
          <p>LT会やハッカソンのようなイベントの開催も検討しています。</p>
        </template>
      </ContentSection>

      <ContentSection id="date" class="content">
        <template slot="title">
          # 開催日時
        </template>
        <template slot="body">
          <p>基本的に毎月第4土曜日の13:00 - 17:00に実施します。</p>
          <p>通常と異なる場合は Twitter 等で告知をします。</p>
        </template>
      </ContentSection>

      <ContentSection id="join" class="content">
        <template slot="title">
          # 参加方法
        </template>
        <template slot="body">
          <p>開催日の1ヶ月ほど前に connpass で募集ページが公開されるので、そこから申し込んでください。</p>
          <p>直前の申込みでも構いませんが、余裕を持って申し込みいただくと事前に Slack に招待させていただきます。</p>
        </template>
      </ContentSection>

      <ContentSection id="question" class="content">
        <template slot="title">
          # Q & A
        </template>
        <template slot="body">
          <table>
            <tbody>
              <tr>
                <td>
                  Q.
                </td>
                <td>活動場所は？</td>
              </tr>
              <tr>
                <td>
                  A.
                </td>
                <td>
                  <p>基本的に金沢工業大学23号館のパフォーミングスタジオで開催する予定です。</p>
                  <p>違う場所で行うこともありえるので、connpass の募集ページで確認してください。</p>
                </td>
              </tr>
            </tbody>
          </table>

          <table>
            <tbody>
              <tr>
                <td>
                  Q.
                </td>
                <td>初心者でも参加していい？</td>
              </tr>
              <tr>
                <td>
                  A.
                </td>
                <td>大歓迎です。困ったことがあれば、主催者や他の参加者で優しくサポートさせていただきます。</td>
              </tr>
            </tbody>
          </table>

          <table>
            <tbody>
              <tr>
                <td>
                  Q.
                </td>
                <td>金沢工業大学の学生じゃないけど参加していい？</td>
              </tr>
              <tr>
                <td>
                  A.
                </td>
                <td>大歓迎です。ただし、学内の Wi-Fi は学生専用のためポケット Wi-Fi やテザリングが必要です。</td>
              </tr>
            </tbody>
          </table>

          <table>
            <tbody>
              <tr>
                <td>
                  Q.
                </td>
                <td>持ってくるものは？</td>
              </tr>
              <tr>
                <td>
                  A.
                </td>
                <td>
                  <p>あなたの活動に必要な PC や本など好きなものを持参してください。</p>
                  <p>常識の範囲内であれば問題ありません。</p>
                </td>
              </tr>
            </tbody>
          </table>
        </template>
      </ContentSection>
    </div>
  </div>
</template>

<script>
import { fas } from '@fortawesome/free-solid-svg-icons'
import ContentSection from '~/components/ContentSection'
import TheSideNav from '~/components/TheSideNav'

export default {
  components: {
    ContentSection,
    TheSideNav
  },
  computed: {
    fas() {
      return fas
    }
  }
}
</script>


<style>
.wrapper {
  display: flex;
  margin: 88px 80px 0 80px;
}

.side-nav {
  margin-right: 32px;
}

.container {
  display: flex;
  flex-direction: column;
  max-width: 60vw;
}

.content {
  margin-bottom: 72px;
}

/* Tablet */
@media screen and (min-width: 551px) and (max-width: 1024px) {
  .wrapper {
    margin: 88px 24px 0 24px;
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

  .container {
    margin-top: 72px;
    max-width: 100vw;
  }

  .content {
    margin-bottom: 40px;
  }
}
</style>
