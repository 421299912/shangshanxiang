<template>
  <v-ons-page>
    <div class="camera">
      <v-ons-alert-dialog modifier="rowfooter"
                          :title=title
                          :footer="{
        // 取消: () => alertDialog2Visible = false,
        确定: () => alertDialog2Visible = false
      }"
                          :visible.sync="alertDialog2Visible"
      >
        {{ message }}
      </v-ons-alert-dialog>
      <div class="focus" @click="getImage()"></div>
    </div>
  </v-ons-page>
</template>

<script>
  export default {
    data () {
      return {
        alertDialog2Visible: false,
        title: '',
        message: ''
      }
    },
    methods: {
      getImage () {
        let _this = this // vue中的this在回调函数中并不指向vue实例，所以在此暂存一下，在回调函数中使用
        if (navigator.camera !== undefined) { // 判断是否有插件
          navigator.camera.getPicture(onSuccess, onFail, {
            quality: 50,
            destinationType: navigator.camera.DestinationType.FILE_URI,
            sourceType: navigator.camera.PictureSourceType.CAMERA
          })
        } else {
          this.title = '错误'
          this.message = '未加载相机插件'
          this.alertDialog2Visible = true
        }
        function onSuccess (imageURI) {
          _this.title = '照片地址'
          _this.message = imageURI
          _this.alertDialog2Visible = true
        }

        function onFail (message) {
          _this.title = '错误'
          _this.message = message
          _this.alertDialog2Visible = true
        }
      }
    }
  }
</script>

<style scoped>
  .camera {
    width: 100%;
    height: 100%;
    background-color: lightgrey;
    vertical-align: middle;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .focus {
    width: 100px;
    height: 100px;
    border: 12px solid whitesmoke;
    border-radius: 100%;
  }
</style>
