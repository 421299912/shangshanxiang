<template>
  <v-ons-page>
    <custom-toolbar v-bind="toolbarInfo"></custom-toolbar>
    <div style="margin: 10px 10px 10px 10px">
      <div class="sub-title">可删除的输入框</div>
      <el-input
        placeholder="请输入内容"
        v-model="input"
        clearable>
      </el-input>
    </div>
    <div style="margin: 10px 10px 10px 10px">
      <div class="sub-title">密码输入框</div>
      <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
    </div>
    <div style="margin: 10px 10px 10px 10px">
      <div class="sub-title">自动增加高度的文本输入框</div>
      <el-input
        type="textarea"
        :autosize="{ minRows: 2, maxRows: 4}"
        placeholder="请输入内容"
        v-model="textarea">
      </el-input>
    </div>
    <div class="sub-title" style="margin: 10px 10px 10px 10px">复合型输入框</div>
    <div style="margin: 10px 10px 10px 10px">
      <el-input placeholder="请输入内容" v-model="input1">
        <template slot="prepend">Http://</template>
      </el-input>
    </div>
    <div style="margin: 10px 10px 10px 10px">
      <el-input placeholder="请输入内容" v-model="input2">
        <template slot="append">.com</template>
      </el-input>
    </div>
    <div style="margin: 10px 10px 10px 10px">
      <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
        <el-select v-model="select" slot="prepend" placeholder="请选择">
          <el-option label="餐厅名" value="1"></el-option>
          <el-option label="订单号" value="2"></el-option>
          <el-option label="用户电话" value="3"></el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>
    <div style="margin: 10px 10px 10px 10px">
      <div class="sub-title">激活即列出输入建议</div>
      <el-autocomplete
        style="width: 100%"
        v-model="state1"
        :fetch-suggestions="querySearch"
        placeholder="请输入内容"
        @select="handleSelect"
      ></el-autocomplete>
    </div>
    <div style="margin: 10px 10px 10px 10px">
      <el-select ref="dropList" v-model="value1" value-key="dropName" filterable placeholder="请选择1">
        <el-option
          v-for="item in restaurants"
          :key="item.id"
          :label="item.title"
          :value="item.title">
        </el-option>
      </el-select>
    </div>
    <div style="margin: 10px 10px 10px 10px">
      <el-select ref="dropList" v-model="value2" filterable placeholder="请选择2">
        <el-option
          v-for="item in restaurants1"
          :key="item.id"
          :label="item.title"
          :value="item.title">
        </el-option>
      </el-select>
    </div>
  </v-ons-page>
</template>

<script>
  // 类名常量

  export default {
    data () {
      return {
        input: '',
        password: '',
        textarea: '',
        input1: '',
        input2: '',
        input3: '',
        select: '',
        restaurants: [],
        restaurants1: [],
        state1: '',
        value1: '',
        value2: ''
      }
    },
    methods: {
      querySearch(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll() {
        let length = this.$refs.dropList.$children.length;
        for( let i=0;i++;i<length){
          this.$refs.dropList[i]
        }
        return [
          { "id": 1, "title": "长宁区新渔路144号" },
          { "id": 2, "title": "上海市长宁区淞虹路661号" },
          { "id": 3, "title": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
          { "id": 4, "title": "天山西路438号" },
          { "id": 5, "title": "上海市长宁区金钟路9" },
        ];
        return [
          { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
          { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
          { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
          { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
          { "value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路9" },
        ];
      },
      handleSelect(item) {
        console.log(item);
      }
    },
    mounted() {
      this.restaurants = this.loadAll();
    }
  }
</script>

<style>
  .el-select .el-input {
    width: 100%;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }

</style>

