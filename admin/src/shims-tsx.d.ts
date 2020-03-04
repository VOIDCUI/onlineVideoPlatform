import Vue, { VNode } from 'vue'
import {AxiosInstance} from 'axios'

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any
    }
  }
}
declare module 'vue/types/vue' {
  // 3. 声明为 Vue 补充的东西
    interface Vue {
      $http: AxiosInstance;
    }
  }
