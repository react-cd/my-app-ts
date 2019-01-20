

import * as React from 'react';
import './App.css';
import { mySearch, 
  identity, 
  MultiplePara, 
  par,
  SinglePara } from './utils'
import { Grid } from './test';
import { AccountingDepartment } from './AccountingDepartment';
import { Department } from './abstract';
import  './interface2';
import _ from 'lodash';
import {  observable } from 'mobx';
import { observer } from "mobx-react"


// import { MainValidator as Validator  } from './ZipCodeValidator';
// import * as  Validator from './ZipCodeValidator';
import   Validator from './ZipCodeValidator';

// proted 是完美的 

// import logo from './logo.svg';

class App extends React.Component<{},{count:number}> {
  
  public state = {
    count:0  
  }
  // constructor(props){
  //   super(props)
  // }
  // 默认是公共的方法 其实是没有必要的
  public componentDidMount() {
    const foo = '3232323'
    console.log(foo);
    
    // setstate 处理的 this.state
    // this.setState({
    //   count:2323
    // })
    // 
    const TodoView = observer(({ todo }) => <div>{todo.title}</div>)
    console.log(TodoView);
    
    // const TodoView = observer(
    //   React.createClass({
    //     displayName: "TodoView",
    //     render() {
    //       return <div>{this.props.todo.title}</div>
    //     }
    //   })
    // )


    const appState = observable({
      timer: 0
    });
    console.log(appState);
    
    const array = [1];
    const other = _.concat(array, 2, [3], [[4]]);
    console.log('other',other);
    
    mySearch('https:baidu.com','baidu')
    identity("myString")
    MultiplePara([1],[2])
    SinglePara(['23232']);
    par('yuda')
    let department: Department; // 允许创建一个对抽象类型的引用
    // department = new Department(); // 错误: 不能创建一个抽象类的实例
    department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
    department.printName();
    department.printMeeting();
    // department.generateReports(); // 错误: 方法在声明的抽象类中不存在

    // const dog=  new Animal(23232);
    // 非常好 就是这样
    
    this.setState({
      count: Grid.origin.x
    })
    const mainValidator = new Validator.ZipCodeValidator1();
    console.log(2323);
    console.log(mainValidator.isAcceptable('23232323'));
     
//     let grid1 = new Grid(1.0);  // 1x scale
// let grid2 = new Grid(5.0);  // 5x scale

// console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
// console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));

    // const dog = 
    // dog.name;
    // debugger;
    //  泛型变量
    // debugger;
    // this.setState({
    //   test: string
    // })
    
  }
  // 公共方法
  public render() {
    const { count} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>{count}</div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
