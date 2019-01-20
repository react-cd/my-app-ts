function padLeft(value: string, padding: any) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
    return padding + value;
  }
  throw new Error(`Expected string or number, got '${padding}'.`);
}

padLeft("Hello world", 4); // returns "    Hello world"

// function padLeft(value: string, padding: string | number) {
//   if (typeof padding === "number") {
//     return Array(padding + 1).join(" ") + value;
//   }
//   if (typeof padding === "string") {
//     return padding + value;
//   }
//   throw new Error(`Expected string or number, got '${padding}'.`);
// };

// function isNumber(x: any): x is number {
//   return typeof x === "number";
// }

// function isString(x: any): x is string {
//   return typeof x === "string";
// }

// function padLeft(value: string, padding: string | number) {
//   if (isNumber(padding)) {
//     return Array(padding + 1).join(" ") + value;
//   }
//   if (isString(padding)) {
//     return padding + value;
//   }
//   throw new Error(`Expected string or number, got '${padding}'.`);
// }

interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLength: number;
}

//  类型断言
const dd = {} as Square;
dd.color = "blue";
dd.sideLength = 10;

interface IObservableValue<T> {
  name:T
}
// 
interface ReadInterceptor<T> {
  age?:number;
  (name:T):void;
}

let handler: ReadInterceptor<number>=(arg)=>{
  return arg;
}


function interceptReads<T>(value: IObservableValue<T>, handler: ReadInterceptor<T>): void
function interceptReads(value, handler):void {
  console.log(value);
  console.log(handler);
}

const obj={
  name:2323
};

interceptReads<number>(obj, handler)

function public<T, K extends keyof T>(o: T, names: K[]): Array<T[K]>{
  return names.map((n) => o[n])
}

// 索引类型

// 
interface IMap<T>{
  [key:string]:T
}
let key:keyof IMap<number>;
let value:
