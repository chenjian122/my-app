import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public msg:any;

  public name:any;

  public flag:any;

  public search:any;

  constructor() {
    this.msg = '这是我们的首页组件';
    this.name = '张三';

    this.flag = true; 
    this.search = '内容';
  }

  getMsg(){ /** 自定义方法 */
    alert(this.msg);
  }

  run(){
    alert(this.search);
  }

  setName(){
    this.name = '李四';
  }

  setFlag(){
    this.flag = false;
  }
  
  keyupFn(e){  //事件对象
    console.log(e);
  }

  ngOnInit() {
  }

}
