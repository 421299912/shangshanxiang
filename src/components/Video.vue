<template>
  <v-ons-page>
    <custom-toolbar v-bind="toolbarInfo"></custom-toolbar>
    <div style="margin: 10px 10px 10px 10px">
      <!--<video-player  class="video-player-box"
                     ref="videoPlayer"
                     :options="playerOptions"
                     :playsinline="true"
                     customEventName="customstatechangedeventname"
                     @play="onPlayerPlay($event)"
                     @pause="onPlayerPause($event)"
                     @statechanged="playerStateChanged($event)"
                     @ready="playerReadied">

                     &lt;!&ndash;@ended="onPlayerEnded($event)"
                     @waiting="onPlayerWaiting($event)"
                     @playing="onPlayerPlaying($event)"
                     @loadeddata="onPlayerLoadeddata($event)"
                     @timeupdate="onPlayerTimeupdate($event)"
                     @canplay="onPlayerCanplay($event)"
                     @canplaythrough="onPlayerCanplaythrough($event)"&ndash;&gt;

      </video-player>-->
      <div>
        <video controls="controls" :src="videoSrc" id="videoPlay" v-show="flag" class="video">您的浏览器不支持 video 视屏播放。</video>     //隐藏video标签，因为移动端点击视频播放时会自动弹出
      </div>
      <el-button v-on:click="playVideo()" type="primary">播放</el-button>
    </div>
  </v-ons-page>
</template>
<script>
  export default {
    data(){
      return {
        videoSrc: 'src/assets/WIN_20190828_15_38_46_Pro.mp4',     //获取视频播放资源
        flag:false
      }
    },
    methods: {
      playVideo(){
        this.flag=true;               //浏览器测试用
        var vdo = document.getElementById("videoPlay");         //手机端会直接打开,可以去除flag逻辑
        vdo.play();
      }
    }
    /*data() {
      return {
        playerOptions: {
          playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
          autoplay: false, //如果true,浏览器准备好时开始回放。
          muted: false, // 默认情况下将会消除任何音频。
          loop: false, // 导致视频一结束就重新开始。
          preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
          language: 'zh-CN',
          aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
          fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
          sources: [{
            type: "video/mp4",
            src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
          }],
          poster: "../../static/images/test.jpg", //你的封面地址
          // width: document.documentElement.clientWidth, //播放器宽度
          notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
          controlBar: {
            timeDivider: true,
            durationDisplay: true,
            remainingTimeDisplay: false,
            fullscreenToggle: true  //全屏按钮
          },
          poster: "/static/images/author.jpg",
        }
      }
    },
    mounted() {
      console.log('this is current player instance object', this.player)
    },
    computed: {
      player() {
        return this.$refs.videoPlayer.player
      }
    },
    methods: {
      // listen event
      onPlayerPlay(player) {
        // console.log('player play!', player)
      },
      onPlayerPause(player) {
        // console.log('player pause!', player)
      },
      // ...player event

      // or listen state event
      playerStateChanged(playerCurrentState) {
        // console.log('player current update state', playerCurrentState)
      },

      // player is ready
      playerReadied(player) {
        console.log('the player is readied', player)
        // you can use it to do something...
        // player.[methods]
      }
    }*/
  }
</script>

