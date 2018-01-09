import { Component } from '@angular/core'; /** 引入angular Component 核心 */


@Component({
  selector: 'app-root', /** 表示使用这个组件的名称 */
  styleUrls: ['./app.component.css'],  /** css */
  template:`
    <router-outlet></router-outlet>
  `
})
export class AppComponent {   /** 数据 */
  
}
