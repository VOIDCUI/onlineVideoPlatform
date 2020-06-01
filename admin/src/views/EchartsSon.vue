<template>
  <div class="echarts-son">
    <div id="content" style="width:40%;height:300px;"></div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue} from "vue-property-decorator";
@Component({})
export default class EchartsSon extends Vue {
  // 接受父组件的值
  @Prop(Object) data!: any;
  draw() {
    const ele = document.getElementById("content");
    const chart: any = this.$echarts.init(ele);
    chart.setOption(this.data);
  }
  update() {
    this.draw();
  }
  mounted() {
    this.draw();
  }
}
</script>
