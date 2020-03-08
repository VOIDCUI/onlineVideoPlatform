import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import ResourceList from '../views/ResourceList.vue'
// import CourseList from '../views/courses/CourseList.vue'
// import CourseEdit from '../views/courses/CourseEdit.vue'


Vue.use(VueRouter)

const routes: RouteConfig[] = [
  {
    path: '/',
    component: Main,
    children: [
      { name: 'home', component: Home, path: '/' },
      { name: 'ResourceList', component: ResourceList, path: '/:resource/list', props:true },
      // { name: 'course-edit', component: CourseEdit, path: '/course/edit/:id', props: true },
      // { name: 'course-create', component: CourseEdit, path: '/course/create' }

    ]
  }
  
]

const router = new VueRouter({
  routes
})

export default router
