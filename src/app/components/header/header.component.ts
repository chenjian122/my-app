import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = '这是一个头部组件';

  msg:any;

  constructor() { } /** 构造函数 */

  ngOnInit() {  /** 生命周期函数 */
    this.msg = '这是一个angular的数据';
  }

}
