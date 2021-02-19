<template>
  <div id="list-wrap">
      <div class="list">
        <div class="header">
          <span>リンク集</span>
          <div class="menu">a</div>
        </div>
      </div>
      <div class="list" v-for="obj in links" :key="obj.name">
        <LinkBox v-bind:linkdata="obj"></LinkBox>
      </div>
  </div>
</template>
<style scoped>
.header{
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  padding: 15px;
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
    links: [
    {name: 'いきいき音楽科', link: 'https://www.iki2music.work/',text:'https://www.iki2music.work/'},
    {name: 'DATT.MUSIC', link: 'https://datt-music.com/',text:'https://datt-music.com/'},
    {name: '音楽理論.com', link: 'https://ongakuriron.com/',text:'https://ongakuriron.com/'}
    ]
  }
  }
}
</script>
