<template>
  <v-ons-page>
    <custom-toolbar v-bind="toolbarInfo"></custom-toolbar>
    <div style="margin: 10px 10px 10px 10px">
      <el-radio-group v-model="direction" size="medium" style="margin-left: 10%">
        <el-radio label="ltr" class="radioitem">从左往右开</el-radio>
        <el-radio label="rtl" class="radioitem">从右往左开</el-radio>
        <el-radio label="ttb" class="radioitem">从上往下开</el-radio>
        <el-radio label="btt" class="radioitem">从下往上开</el-radio>
      </el-radio-group>

      <el-button @click="drawer = true" type="primary" style="margin-left: 130px;margin-top: 30px">
        点我打开
      </el-button>

      <el-drawer
        title="我是标题"
        :visible.sync="drawer"
        :direction="direction"
        size="50%"
        :before-close="handleClose">
        <span>我来啦!</span>
      </el-drawer>
    </div>
  </v-ons-page>
</template>

<script>
  export default {
    data() {
      return {
        drawer: false,
        direction: 'rtl',
      };
    },
    methods: {
      handleClose(done) {
        /*this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});*/
        done();
      }
    }
  };
</script>

<style>
.radioitem{
  font-size: 20px;
}
.el-radio__label {
  font-size: 20px;
  padding-left: 10px;
}
</style>

