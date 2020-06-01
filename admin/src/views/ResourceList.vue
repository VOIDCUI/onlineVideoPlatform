<template>
  <div>
    <avue-crud
      v-if="option.column"
      :option="option"
      :data="data.data"
      :page="page"
      @row-save="create"
      @row-update="update"
      @row-del="remove"
      @on-load="changePage"
      @order-change="changeOrder"
      @search-change="search"
    ></avue-crud>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class ResourceList extends Vue {
  @Prop() resource!: any;

  data = { };
  option = { };
  page = {
    total: 0,
    pageSize: 7,
    pageSizes: [5, 7, 10, 15]
  };
  query: any = {
    limit: 5
  };

  async fetchOption() {
    const res = await this.$http.get(`${this.resource}/option`);
    this.option = res.data;
  }

  async fetch() {
    const res = await this.$http.get(`${this.resource}`, {
      params: {
        query: this.query
      }
    });
    this.page.total = res.data.total;
    this.data = res.data;
  }

  async create(row, done) {
    await this.$http.post(`${this.resource}`, row);
    this.$message.success("成功保存");
    this.fetch();
    done();
  }

  async update(row, index, done) {
    //const data = JSON.parse(JSON.stringify(row))
    const data = { ...row };
    delete data.$index;
    await this.$http.put(`${this.resource}/${row._id}`, data);
    this.$message.success("修改成功");
    this.fetch();
    done();
  }

  async remove(row: any) {
    try {
      await this.$confirm("是否选择删除");
    } catch (error) {
      return;
    }
    await this.$http.delete(`${this.resource}/${row._id}`);
    this.fetch();
  }

  changePage({pageSize, currentPage}) {
    this.query.page = currentPage
    this.query.limit = pageSize
    this.fetch()
    // console.log(pageSize)
  }

  async changeOrder({prop, order}){
    if(!order) {
      this.query.sort = null
    }else{
      this.query.sort ={
         [prop] : order === 'desending' ? 1 : -1
      }
    }
  }

  async search(where,done) {
    where.name = { $regex: where.name }
    this.query.where = where;
    done();
    this.fetch();
  }

  created() {
    this.fetch();
    this.fetchOption();
  }
}
</script>

<style>
</style>