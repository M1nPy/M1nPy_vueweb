<template>
  <v-app>
  <div id="list-wrap">
      <v-container fluid>
        <div class="list">
          <div class="header">
            <v-row align="center">
              <v-col cols="7">
                <span>リンク集</span>
              </v-col>
              <v-col cols="5">
                <v-select
                  :items="items"
                  item-text="state"
                  item-value="abbr"
                  label="Category"
                  multiple
                  v-model="message"
                ></v-select>
              </v-col>
            </v-row>
          </div>
        </div>
      </v-container>
      <transition-group name="flip-list" tag="ul">
        <div class="list" v-for="obj in links" :key="obj.name">
          <v-hover v-slot="{ hover }">
            <v-card :elevation="hover ? 10 : 2" >
              <LinkBox v-bind:linkdata="obj"></LinkBox>
            </v-card>
          </v-hover>
        </div>
      </transition-group>
  </div>
      <LinkPageNation class="pagenation" />
    </v-app>

</template>
<style scoped>
.flip-list-move {
  transition: transform 1s;
}
.flip-list-enter,
.flip-list-leave-active{
  transition: all 0.5s ease;
}
.flip-list-enter-from,
.flip-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.header {
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  box-shadow: rgba(100, 100, 100, 0.8);
}
.list {
  margin-bottom: 10px;
}
ul {
  padding: 0px 5%;
  list-style: none;
}

#list-wrap {
  width:50%;
  min-width: 800px;
  height:800px;
  box-shadow: 0 1px 2px 0 rgb(200, 200, 200);
  margin: 0px auto;
  margin-bottom:10px;
}
</style>
<script>
import LinkBox from './LinkBox.vue'
import LinkPageNation from '@/components/LinkPageNation.vue'

export default {
  name: 'Linkslist',
  components: {
    LinkBox,
    LinkPageNation
  },
  data () {
    return {
      linklist: [
        {
          name: 'いきいき音楽科',
          link: 'https://www.iki2music.work/',
          text: 'https://www.iki2music.work/',
          category: ['music', 'theory']
        },
        {
          name: 'DATT.MUSIC',
          link: 'https://datt-music.com/',
          text: 'https://datt-music.com/',
          category: ['music']
        },
        {
          name: '音楽理論.com',
          link: 'https://ongakuriron.com/',
          text: 'https://ongakuriron.com/',
          category: ['music', 'theory']
        },
        {
          name: 'Arch Wiki',
          link: 'https://www.archlinux.jp/',
          text: 'https://www.archlinux.jp/',
          category: ['it']
        },
        {
          name: 'Zenn',
          link: 'https://zenn.dev/',
          text: 'https://zenn.dev/',
          category: ['it']
        },
        {
          name: 'Qiita',
          link: 'https://qiita.com/',
          text: 'https://qiita.com/',
          category: ['it']
        },
        {
          name: 'ITmedia',
          link: 'http://www.itmedia.co.jp/',
          text: 'http://www.itmedia.co.jp/',
          category: ['it']
        },
        {
          name: 'さくらのナレッジ',
          link: 'https://knowledge.sakura.ad.jp/',
          text: 'https://knowledge.sakura.ad.jp/',
          category: ['it']
        }
      ],
      items: [
        { state: 'Music', abbr: 'music' },
        { state: 'MusicTheory', abbr: 'theory' },
        { state: 'IT', abbr: 'it' },
        { state: 'Math', abbr: 'math' },
        { state: 'Audio', abbr: 'audio' }
      ],
      message: ['music']
    }
  },
  computed: {
    links: function () {
      var message = this.message
      return this.linklist.filter(function (linklist) {
        return message
          .map(item => linklist.category.includes(item))
          .filter(x => x === true).length >= message.length
      })
    }
  }
}
</script>
