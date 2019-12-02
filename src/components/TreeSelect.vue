<template>
  <v-ons-page>
    <custom-toolbar v-bind="toolbarInfo"></custom-toolbar>
    <div style="margin-top: 30px;text-align: center">
      <span style="font-family: 'Helvetica Neue', 'Helvetica', sans-serif;">多选框</span>
    </div>
    <div style="margin-top: 10px">
      <treeselect v-model="value" :multiple="true" :options="options2" />
    </div>
    <div style="margin-top: 80px;text-align: center">
      <span style="font-family: 'Helvetica Neue', 'Helvetica', sans-serif;">单选框</span>
    </div>
    <div style="margin-top: 10px">
      <treeselect
        :options="options"
        :disable-branch-nodes="true"
        :show-count="true"
        placeholder="select"
      />
    </div>
    <div style="margin-top: 100px;text-align: center">
      <span style="font-family: 'Helvetica Neue', 'Helvetica', sans-serif;font-size: 20px;color: #0076ff">更多详细属性用法介绍:https://vue-treeselect.js.org</span>
    </div>
  </v-ons-page>
</template>

<script>
  import Treeselect from '@riophae/vue-treeselect'
  // import the styles
  import '@riophae/vue-treeselect/dist/vue-treeselect.css'
export default {
  data () {
    return {
      value: null,
      // define options
      options: [ {
        id: 'a',
        label: 'a',
        children: [ {
          id: 'aa',
          label: 'aa',
        }, {
          id: 'ab',
          label: 'ab',
        } ],
      }, {
        id: 'b',
        label: 'b',
      }, {
        id: 'c',
        label: 'c',
      } ],
      options2: [ {
        id: 'fruits',
        label: 'Fruits',
        children: [ {
          id: 'apple',
          label: 'Apple 🍎',
          isNew: true,
        }, {
          id: 'grapes',
          label: 'Grapes 🍇',
        }, {
          id: 'pear',
          label: 'Pear 🍐',
        }, {
          id: 'strawberry',
          label: 'Strawberry 🍓',
        }, {
          id: 'watermelon',
          label: 'Watermelon 🍉',
        } ],
      }, {
        id: 'vegetables',
        label: 'Vegetables',
        children: [ {
          id: 'corn',
          label: 'Corn 🌽',
        }, {
          id: 'carrot',
          label: 'Carrot 🥕',
        }, {
          id: 'eggplant',
          label: 'Eggplant 🍆',
        }, {
          id: 'tomato',
          label: 'Tomato 🍅',
        } ],
      } ],
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
    Treeselect
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
