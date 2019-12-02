<template>
  <v-ons-page>
    <custom-toolbar v-bind="toolbarInfo"></custom-toolbar>
    <div style="margin: 10px 10px 10px 10px">
      <el-row class="demo-avatar demo-basic">
        <el-col :span="12">
          <div class="sub-title">圆形</div>
          <div class="demo-basic--circle">
            <div class="block"><el-avatar :size="50" :src="circleUrl"></el-avatar></div>
            <div class="block" v-for="size in sizeList" :key="size">
              <el-avatar :size="size" :src="circleUrl"></el-avatar>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row class="demo-avatar demo-basic">
        <el-col :span="12">
          <div class="sub-title">方形</div>
          <div class="demo-basic--circle">
            <div class="block"><el-avatar shape="square" :size="50" :src="squareUrl"></el-avatar></div>
            <div class="block" v-for="size in sizeList" :key="size">
              <el-avatar shape="square" :size="size" :src="squareUrl"></el-avatar>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div style="margin: 10px 10px 10px 10px">
      <div class="sub-title">展示图标、图片、文字</div>
      <div style="margin: 10px 10px 10px 10px" >
        <div style="float: left">
          <el-avatar icon="el-icon-user-solid"></el-avatar>
        </div>
        <div style="float: left;margin-left: 10px">
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        </div>
        <div style="float: left;margin-left: 10px">
          <el-avatar> user </el-avatar>
        </div>
      </div>
    </div>

  </v-ons-page>
</template>

<script>
  // 类名常量

  export default {
    data () {
      return {
        circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
        sizeList: ["large"]
      }
    },
    methods: {

    }
  }
</script>

<style>
.block{
  float: left;
  margin: 10px 10px 10px 10px;
}

</style>

