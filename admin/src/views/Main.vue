<template>
  <el-container>
      <el-aside width="200px">
         <el-menu mode="vertical" :default-active="$route.path" router>
             <el-submenu v-for="(item, index) in menu.items"
                 :index="`menu-item-${index}`"
                 :key="`menu-item-${index}`">
                 <template slot="title">{{item.title}}</template>
                 <el-menu-item v-for="(subItem, subIndex) in item.items"
                     :index="subItem.path"
                     :key="`menu-item-${index}-${subIndex}`">
                         {{subItem.title}}
                 </el-menu-item>
             </el-submenu>
         </el-menu>       
      </el-aside>
      <el-container>
          <el-header height="">
              <h3>小崔之家 - 后台管理系统</h3>
          </el-header>
          <el-main height="">
              <router-view :key="$route.path"></router-view>
          </el-main>
      </el-container>
  </el-container> 
</template>

<script lang= "ts">
import { Vue, Component} from 'vue-property-decorator'

@Component({})
export default class Main extends Vue {
    menu = {
        items:[
            {
                title: '课程管理',
                items:[
                    { title: '首页', path: '/' },
                    { title: '课程管理', path: '/course/list' },
                    { title: '课时管理', path: '/episode/list' }
                ]
            },
            {
                title: '运营管理',
                items:[
                    { title: '用户管理', path: '/user/list' }
                ]
            }
        ]
    }
}
</script>

<style>

</style>