import { StringValidator } from './Validation';
export const numberRegexp = /^[0-9]+$/;

class ZipCodeValidator implements StringValidator {
  public isAcceptable(s: string) {
    return s.length === 5 && numberRegexp.test(s);
  }
}
class ZipCodeValidator1 implements StringValidator {
  /**
   * tests
   */
  public isAcceptable(s: string) {
    console.log('232323232');
    return false
  }
}
// 借口合并
interface Box {
  height: number;
  width: number;
}

interface Box {
  scale: number;
  // width: string;
}

const box: Box = { height: 5, width: 6, scale: 10 };
console.log(box);

// function trace(n:number):void {
//   console.log(232323);
// }
// export function trace(thing?: any, prop?: string, enterBreakPoint?: boolean): void
// export function trace(thing?: any, enterBreakPoint?: boolean): void
// export function trace(enterBreakPoint?: boolean): void

// export function trace(...args: any[]): void {
//   let enterBreakPoint = false
//   if (typeof args[args.length - 1] === "boolean") enterBreakPoint = args.pop()
//   const derivation = getAtomFromArgs(args)
//   if (!derivation) {
//     return fail(
//       process.env.NODE_ENV !== "production" &&
//       `'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly`
//     )
//   }
//   if (derivation.isTracing === TraceMode.NONE) {
//     console.log(`[mobx.trace] '${derivation.name}' tracing enabled`)
//   }
//   derivation.isTracing = enterBreakPoint ? TraceMode.BREAK : TraceMode.LOG
// }

// // 重载就是根据参数不同 
// function getAtomFromArgs(args): any {
//   switch (args.length) {
//     case 0:
//       return globalState.trackingDerivation
//     case 1:
//       return getAtom(args[0])
//     case 2:
//       return getAtom(args[0], args[1])
//   }
// }
// 使用as 不如直接使用 default


interface Bird {
  fly():void;
  layEggs():void;
}

interface Fish {
  swim():void;
  layEggs():void;
}

function getSmallPet(): Fish | Bird {
  // return {}
}

const pet = getSmallPet();
// pet.layEggs(); // okay
// pet.swim();    // errors
// // pet as Bird 类型断言
// if ((pet as Bird).fly) {
//   pet.fly()
// }

// 类型谓词 这样就可以
function isFish(pet: Bird | Fish): pet is Fish {
  return !!(pet as Fish).swim
}

export default { ZipCodeValidator, ZipCodeValidator1 };

// interface Iname{
//   name:string;
//   [s:string]:string;
// }