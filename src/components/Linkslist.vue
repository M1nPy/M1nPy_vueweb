<template>
  <div class="wrap">
    <div id="list-wrap">
      <v-container fluid>
        <div class="list">
          <div class="header">
            <v-row align="center">
              <v-col cols="7">
                <span class="text-h6">リンク集</span>
              </v-col>
              <v-col cols="5">
                <v-autocomplete
                  :items="items"
                  item-text="state"
                  item-value="abbr"
                  label="Category"
                  multiple
                  chips
                  v-model="CategoryValue"
                ></v-autocomplete>
              </v-col>
            </v-row>
          </div>
        </div>
      </v-container>
      <transition-group name="flip-list" tag="ul" appear>
        <div class="list" v-for="obj in SlicedLinks" :key="obj.name">
          <v-hover v-slot="{ hover }">
            <v-card :elevation="hover ? 10 : 2">
              <LinkBox v-bind:linkdata="obj"></LinkBox>
            </v-card>
          </v-hover>
        </div>
      </transition-group>
    </div>
    <LinkPageNation
      v-bind:Page.sync="CurrentPage"
      v-bind:PageLength="PageLength"
      class="pagenation"
    />
  </div>
</template>
<style scoped>
.flip-list-move {
  transition: transform 0.5s;
}

.flip-list-leave-active {
  position: absolute;
}
.flip-list-enter-active {
  transition: all 0.5s ease;
}
.flip-list-enter {
  opacity: 0;
  transform: translateX(30px);
}
.flip-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.header {
  padding: 0 30px;
}
.list {
  margin-bottom: 20px;
}
ul {
  padding: 0px 5%;
  list-style: none;
}

#list-wrap {
  width: 50%;
  width: 100%;
  max-width: 900px;
  height: 1500px;
  box-shadow: 0 1px 2px 0 rgb(200, 200, 200);
  margin: 0px auto;
  margin-bottom: 10px;
}
</style>
<script>
import LinkBox from './LinkBox.vue'
import LinkPageNation from '@/components/LinkPageNation.vue'
// import axios from 'axios'
export default {
  name: 'Linkslist',
  components: {
    LinkBox,
    LinkPageNation
  },
  mounted () {
    // axios.get('url').then(response => (this.linklist = response))
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
        },
        {
          name: 'ICSMedia',
          link: 'https://ics.media/',
          text: 'https://ics.media/',
          category: ['it']
        },
        {
          name: 'Wolframalpha',
          link: 'https://www.wolframalpha.com/',
          text: 'https://www.wolframalpha.com/',
          category: ['math']
        }
      ],
      items: [
        { state: 'Music', abbr: 'music' },
        { state: 'MusicTheory', abbr: 'theory' },
        { state: 'IT', abbr: 'it' },
        { state: 'Math', abbr: 'math' },
        { state: 'Audio', abbr: 'audio' }
      ],
      CategoryValue: ['music'],
      CurrentPage: 1
    }
  },
  methods: {
    updateCurrentPage (CurrentPage) {
      this.CurrentPage = CurrentPage
    }
  },
  computed: {
    links: function () {
      var CategoryValue = this.CategoryValue
      return this.linklist.filter(function (linklist) {
        return (
          CategoryValue.map(item => linklist.category.includes(item)).filter(
            x => x === true
          ).length >= CategoryValue.length
        )
      })
    },
    PageLength: function () {
      this.updateCurrentPage(1)
      return Math.ceil(this.links.length / 5)
    },
    SlicedLinks: function () {
      return this.links.slice(
        (this.CurrentPage - 1) * 5,
        (this.CurrentPage - 1) * 5 + 5
      )
    }
  }
}
</script>
