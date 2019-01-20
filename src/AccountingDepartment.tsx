// eslint-disable-next-line no-console
/*eslint no-console: ["error", { allow: ["log", "error"] }] */


import { Department } from './abstract';

class AccountingDepartment extends Department {

  constructor() {
    super('Accounting and Auditing'); // 在派生类的构造函数中必须调用 super()
  }

  public printMeeting(): void {
    console.log('The Accounting Department meets each Monday at 10am.');
  }

  public generateReports(): void {
    console.log('Generating accounting reports...');
  }
}

// interface ClockConstructor {
//   name?:string;
//   new(hour: number, minute: string): ClockInterface;
// }
// interface ClockInterface {
//   tick():void;
// }

// function createClock(ctor: ClockConstructor, hour: number, minute: string): ClockInterface {
//   return new ctor(hour, minute);
// }

// class DigitalClock implements ClockInterface {
//   constructor() {
//     console.log(222);
//    }
//    public tick() {
//     console.log("beep beep");
//   }
// }
// class AnalogClock implements ClockInterface {
//  public constructor() { 
//     console.log(22223232);
//   }
//   public tick() {
//     console.log("tick tock");
//   }
// }

// createClock(DigitalClock, 12, '3232');
// createClock(AnalogClock, 7, '23232');


interface ClockConstructor {
  name?:string;
  new(hour:number):Iclock;
}
interface Iclock{
  click():void;
}
function createClock(cot: ClockConstructor, hour: number): Iclock {
  return new cot(hour)
};
class Testee implements Iclock  {
  constructor(public hour:number=10) {
  }
  public click(){
    console.log(222);
  }
}
createClock(Testee,19)

export {
  AccountingDepartment
}
