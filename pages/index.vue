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
          <p>主催者（@saitoeku3）が学生ということもあり「学生が参加しやすいイベント」を目指しています。</p>
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
          <p>開催日の1ヶ月ほど前に conpass で募集ページが公開されるので、そこから申し込んでください。</p>
          <p>直前の申込みでも構いませんが、余裕を持って申し込みいただくと事前にSlackに招待させていただきます。</p>
        </template>
      </ContentSection>

      <ContentSection id="question" class="content">
        <template slot="title">
          # Q & A
        </template>
        <template slot="body">
          <ul>
            <li>
              <span>Q.</span>
              <span>活動場所は？</span>
            </li>
            <li>
              <span>A.</span>
              <span>基本的に金沢工業大学23号館のパフォーミングスタジオで開催する予定です。</span>
              <p style="margin-left: 20px;">
                違う場所で行うこともありえるので、conpass の募集ページで確認してください。
              </p>
            </li>
          </ul>

          <ul>
            <li>
              <span>Q.</span>
              <span>初心者でも参加していい？</span>
            </li>
            <li>
              <span>A.</span>
              <span>大歓迎です。困ったことがあれば、主催者や他の参加者で優しくサポートさせていただきます。</span>
            </li>
          </ul>

          <ul>
            <li>
              <span>Q.</span>
              <span>金沢工業大学の学生じゃないけど参加していい？</span>
            </li>
            <li>
              <span>A.</span>
              <span>大歓迎です。ただし、学内のWi-Fiは使えないのでポケットWi-Fiやテザリングが必要です。</span>
            </li>
          </ul>

          <ul>
            <li>
              <span>Q.</span>
              <span>何を持って行けばいい？</span>
            </li>
            <li>
              <span>A.</span>
              <span>あなたの活動に必要なPCや本など好きなものを持参してください。</span>
              <p style="margin-left: 20px;">
                常識の範囲内であれば問題ありません。
              </p>
            </li>
          </ul>
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
  margin: 24px 80px 0 80px;
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

  .container {
    margin-top: 24px;
    max-width: 100vw;
  }

  .content {
    margin-bottom: 40px;
  }
}
</style>
