<template>
  <v-ons-page>
    <custom-toolbar v-bind="toolbarInfo"></custom-toolbar>
    <div>
      <span style="font-family: sans-serif;font-size: 14px;">打个分吧</span>
    </div>
    <div class="starBox" ref="allStar">
      <div @touchstart="touchStart" @touchmove="touchMove" ref="starate" class="star" v-for="(item,index) in starArr1" :key="index" @click="starClick1(index)">
        <img :src="'./src/assets/images/'+item.imgSrc">
      </div>
      <span>{{commentScore}}</span>
    </div>

  </v-ons-page>
</template>

<script>
  // 类名常量

  export default {
    data () {
      return {
        x0: 0, // 滑动初始点击位置
        len: 0, // 包裹星星的div的宽度
        score: 0, // 分数
        lenLeft: 0, //在当前div内点击的位置
        lastStar: 0,//最后一位星的分数
        commentScore: 0,//总分
        qq: this.$store,
        starArr1: [{imgSrc: 'noneStar.png'}, {imgSrc: 'noneStar.png'}, {imgSrc: 'noneStar.png'}, {imgSrc: 'noneStar.png'}, {imgSrc: 'noneStar.png'}]
      }
    },
    methods: {
      starClick1 (index) {
        this.starArr1.forEach((element, i) => {
          this.$set(element, 'imgSrc', 'noneStar.png')
          if (i < index) {
            this.$set(element, 'imgSrc', 'allStar.png')
          }
          if (i == index) {
            if(this.lastStar==1){
              this.$set(element, 'imgSrc', 'allStar.png')
            }else if(this.lastStar==0.5){
              this.$set(element, 'imgSrc', 'halfStar.png')
            }
          }
        })
        this.commentScore = index+this.lastStar
      },
      touchStart (evt) {
        if (evt && evt.touches.length === 1) {
          this.len = evt.path[1].offsetWidth
          this.x0 = evt.touches[0].clientX
          this.lenLeft = evt.touches[0].clientX-evt.path[1].offsetLeft
          if(this.lenLeft>this.len/2){
            this.lastStar=1
          }else if(this.lenLeft>this.len/2<this.len/2){
            this.lastStar=0.5
          }
        }
      },
      touchMove (evt) {
        this.score = 0
        if (evt) {
          let score = parseInt((evt.touches[0].clientX - this.x0)/this.len * 10)
          this.score = score > 10 ? 10 : score
        }
      }
    }
  }
</script>

<style>
  .starBox {
    display: flex;
    display: -webkit-flex;
  }
  .starActive {
    color: red;
  }
  .star img {
    width: 30px;
    height: 30px;
  }

  .on{background-image: url('./../assets/images/allStar.png');width: 20px;height: 20px}

  .half{background-image:url('./../assets/images/halfStar.png');width: 20px;height: 20px}

  .off{background-image:url('./../assets/images/noneStar.png');width: 20px;height: 20px}


</style>

