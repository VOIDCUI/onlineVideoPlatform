<template>
  <div>
    <h3>{{isNew ?'创建课程' : '编辑课程'}}</h3>
    <ele-form
    :form-data="data"
    :form-desc="fields"
    :request-fn="submit"
    >
    </ele-form>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";


@Component({})
export default class CourseList extends Vue {
  @Prop(String) id!:string
  data = {}

  fields = {
    name: { label: "课程名称",type: "input" },
    cover: { label: "课程封面",type: "input" }
  }

  get isNew() {
    return !this.id
  }
  
  async submit(data:any) {
      const url:string = this.isNew ? `courses` : `courses/${this.id}`
      const methods = this.isNew ? 'post' : 'put'
      this.$http[methods](url, data)
      this.$router.go(-1)
      data = {}
      this.$message.success('成功修改')
  }

    async fetch() {
    const res = await this.$http.get(`courses/${this.id}`)
    this.data = res.data
  }

  created() {
    !this.isNew && this.fetch()
  }

}
</script>

<style>
</style>