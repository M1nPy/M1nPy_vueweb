<template>
  <div id="list-wrap">
    <v-app>
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
      <div class="list" v-for="obj in links" :key="obj.name">
        <LinkBox v-bind:linkdata="obj"></LinkBox>
      </div>
    </v-app>
  </div>
</template>
<style scoped>
.header{
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  box-shadow: rgba(100, 100, 100, 0.8);
}
.list{
  border-bottom: 1px solid #eee;
}
ul{
  padding: 0;
  list-style: none;
}
li{
  height: 100px;
}
#list-wrap{
  width: 800px;
  box-shadow: 0 1px 4px 0 rgb(35, 35, 35);
  margin: auto;
}
</style>
<script>
import LinkBox from "./LinkBox.vue"
export default {
  name: 'Linkslist',
  components:{
    LinkBox
  },
  data() {
    return{
    linklist: [
    {name: 'いきいき音楽科', link: 'https://www.iki2music.work/',text:'https://www.iki2music.work/',category:['music','theory']},
    {name: 'DATT.MUSIC', link: 'https://datt-music.com/',text:'https://datt-music.com/',category:['music']},
    {name: '音楽理論.com', link: 'https://ongakuriron.com/',text:'https://ongakuriron.com/',category:['music','theory']}
    ],
    items:[
      {state:'Music',abbr:'music'},
      {state:'MusicTheory',abbr:'theory'},
      {state:'IT',abbr:'it'},
      {state:'Math',abbr:'math'},
      {state:'Audio',abbr:'audio'},
    ],
    message:['music']
  }
  },
  computed:{
    links: function () {
        var message = this.message
        return this.linklist.filter(function (linklist) {
        return message.map(item => linklist.category.includes(item)).includes(true)
      })
    }
  }
}
</script>
