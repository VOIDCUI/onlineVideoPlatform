<template>
  <div>
    <h3>课程列表</h3>
    <div>
      <el-button type="success" @click="$router.push(`/course/create`)">添加课程</el-button>
    </div>
    <el-table :data="data.data" border stripe>
      <el-table-column
        v-for="(field, name) in fields"
        :prop="name"
        :key="name"
        :label="field.label"
        :width="field.width"
      ></el-table-column>
      <el-table-column
        :label="操作"
        :width="200">
        <template v-slot="{row}">
          <el-button type="success" size="small" @click="$router.push(`/course/edit/${row._id}`)">编辑</el-button>
          <el-button type="danger" size="small" @click="remove(row)">删除</el-button>
        </template>

      </el-table-column>
      
    </el-table>
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