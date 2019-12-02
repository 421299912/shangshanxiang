<template>
  <v-ons-page>
    <!--<custom-toolbar v-bind="toolbarInfo"></custom-toolbar>-->
    <!--<div>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>卡片名称</span>
          <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
        </div>
        <div v-for="o in 4" :key="o" class="text item">
          {{'列表内容 ' + o }}
        </div>
      </el-card>
    </div>-->
    <div style="margin-top: 10px;background: white" >
      <el-row style="margin-left: 7%; padding-top: 5px">
        <el-col :span="10" v-for="(o, index) in pics" :key="o" :offset="index%2!=0 ? 2 : 0">
          <el-card :body-style="{ padding: '0px'}">
            <img :src=pics[index].src class="image" width="30" height="180">
            <div style="text-align: right">
              <span>{{pics[index].label}}</span>
              <!--<div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>-->
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </v-ons-page>
</template>

<script>
  export default {
    data() {
      return {
        currentDate: new Date(),
        pics: [
          {
            label: '大雁塔',
            src: 'src/assets/images/p1.jpg'
          },
          {
            label: '白马寺',
            src: 'src/assets/images/p2.jpg'
          },
          {
            label: '白榆关',
            src: 'src/assets/images/p3.jpg'
          },
          {
            label: '三塔',
            src: 'src/assets/images/p4.jpg'
          },
          {
            label: '最新',
            src: 'src/assets/images/p1.jpg'
          },
          {
            label: '最新',
            src: 'src/assets/images/p1.jpg'
          }
        ],
      };
    }
  }
</script>

<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 90%;
    margin: 4.5%;
  }
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
</style>

