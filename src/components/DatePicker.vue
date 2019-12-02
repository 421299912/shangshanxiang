<template>
  <v-ons-page>
    <custom-toolbar v-bind="toolbarInfo"></custom-toolbar>
    <div class="date-time-item">
      <div class="date-time-input" @click="show">Time：{{ data }}</div>
      <date-time ref="dateTime"
                   type="dateTime"
                   @confirm="select"></date-time>
    </div>

  </v-ons-page>
</template>

<script>
  import DateTime from 'hy-datepick-tool'
export default {
  data () {
    return {
      data: ''
    }
  },
  methods: {
    //  展示日期组件
    show () {
      this.$refs.dateTime.show()
    },
    // 日期组件回调
    select (val) {
      this.data = val
    }
  },
  components:{
    DateTime
  }
}
</script>

<style>

  .date-time-item {
    margin-top: 10px;
    display: flex;
    justify-content: center;
  }

  .date-time-input {
    border: 1px solid #a2a2a2;
    width: 80vw;
    display: inline-block;
    line-height: 36px;
    height: 36px;
    background: white;
    padding: 0 10px;
    color: #a2a2a2;
    border-radius: 2px;
  }
</style>
