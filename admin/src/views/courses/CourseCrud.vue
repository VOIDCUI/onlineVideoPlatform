<template>
  <div>
    <h3>课程列表</h3>
    
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class CourseList extends Vue {
  data = {};
  fields = {
    _id: { label: "课程id" },
    name: { label: "课程名称" },
    cover: { label: "课程封面" }
  };

  async fetch() {
    const res = await this.$http.get("courses")
    this.data = res.data
  }

  created() {
    this.fetch()
  }

  async remove(row:any) {
    try {
      await this.$confirm("是否选择删除")
    } catch (error) {
      return
    }
    await this.$http.delete(`courses/${row._id}`)
    this.fetch()
  }
}
</script>

<style>
</style>