<template>
<div class="contanier" style="background:#fafafa;">
  <div class="list-echarts">
    <div id="myEcharts" style="width:55%;height:250px;float:right"></div>
    <About :data="option2" />
  </div>
  热门版块
  <br>
   <avue-card :option="option" :data="data" @row-click="tip" @row-add="tip">
  <template slot="menu" slot-scope="scope">
    <span @click.stop="tip(scope.row,scope.index)">投稿</span>
    <span @click.stop="tip(scope.row,scope.index)">关注</span>
  </template>
</avue-card>
</div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
// import Echartscom from '@/components/Echartscom.vue'
import About from "@/views/EchartsSon.vue";
@Component({
  components: {
    About,
  },
})
export default class Home extends Vue {
  option:any ={
         addBtn:false,
          props: {
            img: 'img',
            title: 'title',
            info: 'text',
  }}
   data:any = [{
          title: 'Photoshop',
          text: 'Adobe Photoshop，简称“PS”，是由Adobe Systems开发和发行的图像处理软件。Photoshop主要处理以像素所构成的数字图像。使用其众多的编修与绘图工具，可以有效地进行图片编辑工作。ps有很多功能，在图像、图形、文字、视频、出版等各方面都有涉及',
          img: 'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png'
        }, {
          title: 'premiere',
          text: 'Premiere Pro是视频编辑爱好者和专业人士必不可少的视频编辑工具。它可以提升您的创作能力和创作自由度，它是易学、高效、精确的视频剪辑软件。Premiere提供了采集、剪辑、调色、美化音频、字幕添加、输出、DVD刻录的一整套流程，并和其他Adobe软件高效集成',
          img: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png'
        }, {
          title: 'After Effect',
          text: 'Adobe After Effects软件可以帮助您高效且精确地创建无数种引人注目的动态图形和震撼人心的视觉效果。利用与其他Adobe软件无与伦比的紧密集成和高度灵活的2D和3D合成，以及数百种预设的效果和动画，为您的电影、视频、DVD和Macromedia Flash作品增添令人耳目一新的效果。',
          img: 'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png'
        }, {
          title: '平面设计',
          text: '平面设计（graphic design），也称为视觉传达设计，是以“视觉”作为沟通和表现的方式，透过多种方式来创造和结合符号、图片和文字，借此作出用来传达想法或讯息的视觉表现。平面设计师可能会利用字体排印、视觉艺术、版面（page layout）、电脑软件等方面的专业技巧，来达成创作计划的目的。平面设计通常可指制作（设计）时的过程，以及最后完成的作品。',
          img: 'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png'
        }, {
          title: '音乐',
          text: '音乐是一种艺术形式和文化活动，其媒介是按时组织的声音。一般音乐的定义包括共同元件，例如音调（其支配旋律和和声），节奏（及其相关联的概念节奏，米，和关节），动态（响度.',
          img: 'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png'
        }, {
          title: '舞蹈',
          text: '舞蹈是一种表演艺术,使用身体来完成各种优雅或高难度的动作,一般有音乐伴奏,以有节奏的动作为主要表现手段的艺术形式。它一般借助音乐,也借助其他的道这些类似的',
          img: 'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png'
        }]
  option1: any = {
    title: {
      text: "网站一周访问人数",
    },
    color: ["#3398DB"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: ["周一", "周二", "周三", "周四", "周五", "周六", "周七"],
        axisTick: {
          alignWithLabel: true,
        },
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: [
      {
        name: "访问数量",
        type: "bar",
        barWidth: "60%",
        data: [10, 52, 200, 334, 390, 330, 220],
      },
    ],
  };

  option2: any = {
    title: {
      text: "视频类型分布",
    },
    series: [
      {
        type: "pie",
        radius: "55%",
        data: [
          { value: 235, name: "剪辑软件" },
          { value: 274, name: "拍摄摄影" },
          { value: 310, name: "乐器" },
          { value: 335, name: "舞蹈" },
          { value: 400, name: "编程" },
        ],
      },
    ],
  };
  init() {
    // this.chart = this.$echarts.init(document.getElementById("content"));
    // this.chart.setOption(this.option);
    const ele = document.getElementById("myEcharts");
    const chart: any = this.$echarts.init(ele);
    chart.setOption(this.option1);
  }

  mounted() {
    this.init();
  }
}
</script>
