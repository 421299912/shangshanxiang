<template>
  <v-ons-page ng-controller="loginController">

    <v-ons-modal var="app.modal">
      <v-ons-icon icon="gear" spin="true" style="line-height: 20px; vertical-align: middle;"></v-ons-icon>
      <span style="line-height: 20px; font-size: 15px;">正在登录...</span>
    </v-ons-modal>
    <div class="login-bg-img">
      <div style="width:100%;height:15%;">
        <!--<img src="img/login/login_title1.jpg" style="width:100%;height:100%" />-->
      </div>
      <div style="width:100%;height:25%;">
        <!--<img src="img/login/login_title.jpg" style="width:100%;" />-->
      </div>
      <div class="login-content">

        <input  type="text" class="text-input" style="background: black" :placeholder="userNameText"
               @focus="cleanMessage()" v-model="user.userName">
        <input type="password" class="text-input" style="background: black" :placeholder="passWordText" @focus="cleanMessage()"
               v-model="user.passWord">

        <div style="width: 100%;">
          <span ng-if="errorMessage" class="error">{{errorMessage}}</span>
        </div>
        <v-ons-button class="loginbtn"
                    @click="login(user.userName, user.passWord)">登 录
        </v-ons-button>
      </div>
    </div>
  </v-ons-page>

</template>

<script>
  import AppSplitter from '../AppSplitter.vue'

  export default {
    name: 'login',
    data () {
      return {
        userNameText: '用户名',
        passWordText: '密码',
        errorMessage: ''
      }
    },
    methods: {
      cleanMessage () {
        this.errorMessage = null
      },
      login (userName, passWord) {
        this.$store.commit('navigator/push', AppSplitter)
        /*let config = {
          loginCode: userName,
          ticket: passWord
        }
        this.$axios.post("/api/userInfo/mLogin",this.Qs.stringify(config)).then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })*/

        /*let _this = this // 这种方式有跨域问题
        this.$http.post(this.$store.state.haiyishuzi.baseUrl + 'mobile/loginApp', {
          username: userName,
          password: passWord
        }, {
          emulateJSON: true
        }).then(success => {
          if (success.body.code === 'SUCCESS') {
            // 登录成功将信息保存到全局变量
            this.$store.commit('haiyishuzi/setUser', {
              userName,
              passWord
            })
            // 跳转到主界面
            this.$store.commit('navigator/push', AppSplitter)
          } else {
            _this.errorMessage = success.body.message
          }
        }, error => {
          _this.errorMessage = '网络请求失败'
          console.log(error)
        })*/
      },
      push (page, key) {
        this.$store.commit('navigator/push', {
          extends: page,
          data () {
            return {
              toolbarInfo: {
                backLabel: '',
                title: key
              }
            }
          }
        })
      }
    },
    computed: {
      user () {
        return this.$store.state.haiyishuzi.user
      }
    }
  }
</script>

<style scoped>
  @import "../assets/css/login.css";
</style>
