<template>
  <v-ons-page>
    <v-ons-tabbar position="top"
                  swipeable
                  :modifier="md ? 'autogrow white-content' : null"
                  :on-swipe="md ? onSwipe : null"
                  :tabbar-style="swipeTheme"
                  :tabs="tabs"
                  :index.sync="indexs"
                  @postchange="showTip($event, 'Tip: Try swiping pages!')"
    ></v-ons-tabbar>

    <!--<v-ons-card v-for="page of pages" :key="page.label"
      @click="push(page.component, page.label)"
    >
      <div class="title">{{ page.label }}</div>
      <div class="content">{{ page.desc }}</div>
    </v-ons-card>-->
  </v-ons-page>
</template>

<script>
import PullHook from './PullHook.vue'
import Dialogs from './Dialogs.vue'
import Buttons from './Buttons.vue'
import Carousel from './Carousel.vue'
import InfiniteScroll from './InfiniteScroll.vue'
import Progress from './Progress.vue'
import DatePicker from './DatePicker.vue'
import TreeSelect from './TreeSelect.vue'
import StarRate from './StarRate.vue'
import SignatureView from './SignatureView.vue'
import Badge from './Badge.vue'
import Input from './Input.vue'
import Tag from './Tag.vue'
import Drawer from './Drawer.vue'
import Avatar from './Avatar.vue'
import Card from './Card.vue'
import ChartJs from './ChartJs.vue'
import Video from './Video.vue'
import Iframe from './iframe.vue'

// Just a linear interpolation formula
const lerp = (x0, x1, t) => parseInt((1 - t) * x0 + t * x1, 10)
// RGB colors
const red = [244, 67, 54]
const blue = [30, 136, 229]
const purple = [103, 58, 183]

export default {
  data () {
    return {
      indexs:1,
      tabs: [
        {
          label: '关注',
          icon: this.md ? null : 'ion-home',
          page: PullHook,
          theme: red
        },
        {
          label: '热门',
          icon: this.md ? null : 'ion-edit',
          page: Card,
          theme: blue
        },
        {
          label: '最新',
          icon: this.md ? null : 'ion-film-marker',
          page: Buttons,
          theme: purple
        }
      ],
      pages: [
        {
          component: PullHook,
          label: 'Pull Hook',
          desc: '下拉刷新列表组件',
          icon: 'ion-home'
        },
        {
          component: Dialogs,
          label: 'Dialogs',
          desc: '提示框样式',
          icon: 'ion-edit'
        },
        {
          component: Buttons,
          label: 'Buttons',
          desc: '各种各样的按钮样式',
          icon: 'ion-film-marker'
        }/*,
        {
          component: Carousel,
          label: 'Carousel',
          desc: '图片轮播组件'
        },
        {
          component: InfiniteScroll,
          label: 'Infinite Scroll',
          desc: '无线滚动上拉加载列表组件'
        },
        {
          component: Progress,
          label: 'Progress',
          desc: '进程提示组件'
        },
        {
          component: DatePicker,
          label: 'DatePicker',
          desc: '时间日期选择组件'
        },
        {
          component: TreeSelect,
          label: 'TreeSelect',
          desc: '自定义搜索的树形下拉组件'
        },
        {
          component: StarRate,
          label: 'StarRate',
          desc: '评分组件'
        },
        {
          component: SignatureView,
          label: 'SignatureView',
          desc: '签名生成图像组件'
        },
        {
          component: Badge,
          label: 'Badge',
          desc: '未处理任务消息提醒组件'
        },
        {
          component: Input,
          label: 'Input',
          desc: '各式各样的输入框'
        },
        {
          component: Tag,
          label: 'Tag',
          desc: '可动态编辑的tag标签'
        },
        {
          component: Drawer,
          label: 'Drawer',
          desc: 'Drawer侧边可弹出抽屉'
        },
        {
          component: Avatar,
          label: 'Avatar',
          desc: '用图标、图片或者字符的形式展示图片和数据'
        },
        {
          component: Card,
          label: 'Card',
          desc: '将信息聚合在卡片容器中展示'
        },
        {
          component: ChartJs,
          label: 'ChartJs',
          desc: 'Chart报表组件'
        },
        {
          component: Video,
          label: 'Video',
          desc: '视频播放组件'
        },
        {
          component: Iframe,
          label: 'Iframe',
          desc: '跳转外部链接页面'
        }*/
      ]
    }
  },

  methods: {
    push (page, key) {
      this.$store.commit('navigator/push', {
        extends: page,
        data () {
          return {
            toolbarInfo: {
              backLabel: 'Home',
              title: key
            }
          }
        }
      })
    },
    onSwipe (index, animationOptions) {
      // Apply the same transition as ons-tabbar
      this.animationOptions = animationOptions

      // Interpolate colors and top position
      const a = Math.floor(index)
      const b = Math.ceil(index)
      const ratio = index % 1
      this.colors = this.colors.map((c, i) => lerp(this.tabs[a].theme[i], this.tabs[b].theme[i], ratio))
      this.topPosition = lerp(this.tabs[a].top || 0, this.tabs[b].top || 0, ratio)
    },
    showTip (e, message) {
      if (!this.shutUp && !(e && e.swipe) && !this.showingTip) {
        this.showingTip = true
        /*this.$ons.notification.toast({
          message,
          buttonLabel: 'Shut up!',
          timeout: 2000
        }).then(i => {
          this.shutUp = i === 0
          this.showingTip = false
        })*/
      }
    }
    /* turn (url) {
      //window.location.href = url
      window.open(url)
      //this.$store.commit('navigator/push',url)
    } */
  },
  computed: {
    index: {
      get () {
        return this.$store.state.tabbar.index
      },
      set (newValue) {
        this.$store.commit('tabbar/set', newValue)
      }
    },
    title () {
      return this.md ? 'Onsen UI' : this.tabs[this.index].title || this.tabs[this.index].label
    },
    swipeTheme () {
      return this.md && {
        backgroundColor: `rgb(${this.colors.join(',')})`,
        transition: `all ${this.animationOptions.duration || 0}s ${this.animationOptions.timing || ''}`
      }
    },
    swipePosition () {
      return this.md && {
        top: this.topPosition + 'px',
        transition: `all ${this.animationOptions.duration || 0}s ${this.animationOptions.timing || ''}`
      }
    }
  }
}
</script>

<style>
.intro {
  text-align: left;
  padding: 0 22px;
  margin-top: 20px;
  font-size: 14px;
  line-height: 1.4;
  color: rgba(0, 0, 0, .54);
}

ons-card {
  cursor: pointer;
  color: #333;
}

:checked + .tabbar__button {
  color: red;
  background-color: transparent;
  box-shadow: none;
  border-top: none;
}

.card__title, .card--material__title {
  font-size: 20px;
}
</style>
