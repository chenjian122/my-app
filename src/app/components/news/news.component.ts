import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  title = '你好angular4.x'; /** 属性 */

  msg:any;  /** 另一种属性定义的方法 */

  msg1:String = '这是一个String类型的msg'; /** 这是一个String类型的属性 */

  //定义属性我们还可以加修饰符

  /** public 共有 （默认） 可以在这个类里面使用、也可以在类外面使用
      protected  保护类型   他只有在当前类和它的子类里面可以访问
      private   私有         
   */

  public username = '张三';

  public h = '';

  public list = [];

  public list1 = [];


  public list2 = [];

  public obj = {
    name:'张三'
  }

  constructor() { 

    //去服务器请求数据

    this.h = '<h2>这是新闻的数据</h2>';

    this.list = ['1','2','3'];

    this.list1 = [
      {
        name:'张三'
      },
      {
        name:'李四'
      }

    ];

    this.list2 = [
      {
        'catname':'宝马',
        'list' : [
          {'title':'x1'},
          {'title':'x2'}
        ]

      },
      {
        'catname':'奥迪',
        'list' : [
          {'title':'q1'},
          {'title':'q2'}
        ]

      }

    ];
    
  }

  ngOnInit() {
    this.msg = '你好angular4.x';
  }

}
