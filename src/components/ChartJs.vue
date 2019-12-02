<template>
  <v-ons-page>
    <custom-toolbar v-bind="toolbarInfo"></custom-toolbar>
    <div>
      <div class="small">
        <canvas id="myChart" width="400px" height="400px"></canvas>
        <canvas id="myChart2" width="400px" height="400px"></canvas>
      </div>
      <div style="text-align: center;color: #1e88e5;margin: 10px 10px 10px 10px">
        <span>type属性表示图形形状<br/>
          line:折线图<br/>
          bar:柱状图<br/>
          Radar:雷达图/蛛网图<br/>
          doughnut:圆环图<br/>
          pie:饼图<br/>
          polarArea:极地区域图<br/>
          bubble：气泡分布图<br/>
          scatter：散点图</span>
      </div>
    </div>
  </v-ons-page>
</template>

<script>
  // 类名常量
  import Chart from 'chart.js';
  export default {
    components: {

    },
    data() {
      return {

      }
    },
    mounted() {


      var ctx2 = document.getElementById("myChart2");
      var ctx = document.getElementById("myChart");

      var myChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
          datasets: [
            {
              label: "test1",
              backgroundColor: "rgba(225,10,10,0.3)",
              borderColor: "rgba(225,103,110,1)",
              borderWidth: 1,
              pointStrokeColor: "#fff",
              pointStyle: "crossRot",
              data: [65, 59, 0, 81, 56, 10, 40, 22, 32, 54, 10, 30],
              cubicInterpolationMode: "monotone",
              spanGaps: "false",
              fill: "false"
            }
          ]
        },
        options: {

        }

      });

      var myChart2 = new Chart(ctx2, {
        type: "bar",
        data: {
          labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
          datasets: [
            {
              label: "test1",
              backgroundColor: "rgba(225,10,10,0.3)",
              borderColor: "rgba(225,103,110,1)",
              borderWidth: 1,
              pointStrokeColor: "#fff",
              pointStyle: "crossRot",
              data: [65, 59, 0, 81, 56, 10, 40, 22, 32, 54, 10, 30],
              cubicInterpolationMode: "monotone",
              spanGaps: "false",
              fill: "false"
            }
          ]
        },
        options: {

        }

      });
    },
    methods: {

    }
  }
</script>

<style>
  .small {
    width: 100%;
    height: 800px;
  }


</style>

