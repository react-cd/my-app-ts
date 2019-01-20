// interface Decd { 
//     (name:string):number
// }
// let data= (name: string) => number;
// data = (name)=>{
//     return 3323
// }
// 只有一个签名
// interface SearchFunc {
//     (source: string, subString: string): boolean;
// }
// type 
//  不用箭头函数 函数还是错的
const mySearch: (source: string, subString: string) => boolean =  (source: string, subString: string) =>{
    const result = source.search(subString);
    return result > -1;
}

// interface Success{
//     (name:string):number
// }
// 这是一个泛型接口 区别就是如何将 
// interface TTTT {

//     <T>(arg:T):T
// }

    // 泛型多个参数
    // interface MultiplePara {
    //     <T, U>(arg: T[], arg2: U[]): [T, U]
    // }

const MultiplePara: <T, U>(arg: T[], arg2: U[]) => [T, U] = (arg, arg2) => {
        const item1 = arg[0];
        const item2 = arg2[1]
        return [item1, item2]
    }
    // MultiplePara([1], [2])

// 单个参数  泛型单个参数
// interface TTTTary {
//     <T>(arg: T[]): T
// }
const SinglePara: <T>(arg: T[]) => T = (arg)=>{
    const ary = [...arg].reverse()
    return ary[0]
}
// name([{name:10},{age:11}])
// const data:Success=(name)=>{
//     return 233223
// }
// data({name:10});
// data('323232')
// var makeSound = function (animal) {
//     if (animal instanceof Duck) {
//         console.log('嘎嘎嘎');
//     } else if (animal instanceof Chicken) {
//         console.log('咯咯咯');
//     }
// }
// var Duck = function () { }
// var Chiken = function () { };
// makeSound(new Chicken());
// makeSound(new Duck());
// 写了函数
function identity<T>(arg: T): T {
    return arg;
}



//  泛型参数当做一个 接口的一个变量 这样能够更加 泛型是什么样的类型  这样使用的时候就可以看到 是一个样的数据类型了 
// 多态的概念 做什么  和 谁 以及怎么做分开 
// 重载 就是根绝输入参数的不同 有不同的行为展示
// 如何泛型变量 
            
interface InterfacePar<T>{
    name?:string,
    (arg:T):T
    // 这是泛型借口 
}
// 泛型借口 
const par:InterfacePar<string>=(arg)=>{
    const test='323232';
    return `${test}${arg}`
}

// 泛型类 
class  GenNumber<T,U> {
    public zeroValue:T;
    // 这边只是约束了类型，类具体实现
    public add: (x: U, y: U) => U = (a,b)=>{
        return a
    };
    // 这是泛型 类中的函数 
}
const testNumber = new GenNumber<number,string>();
testNumber.zeroValue=0;
// testNumber.add = (a,b)=>{
//     return `${a}${b}`
// }
testNumber.add('1','3')

// 泛型约束 

// 借口名称必须是大写的I 开头 泛型约束了
interface ILength{
    length:number
}
// 
function test1<T extends ILength>(arg:T):T{
    // const length = arg.length;
    // console.log(arg,length);
    return arg;
}

test1('2232')

// 
// 使用类型参数 都是强制约束的
// function getProperty(obj: T, key: K) {
//     return obj[key];
// }
// const x = { a: 1, b: 2, c: 3, d: 4 };
// getProperty(x, "a"); // okay
// getProperty(x, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.
// function getProperty(obj:T,key:K) {
//     return obj[key]
// }
// const obj={a:1}
// getProperty(obj,'a')
// getProperty(obj,'v')

// function test() {
//     const name = 10;
//     return 10
// }
// function test2() {
//     const name = 10;
//     return 10
// }
// function test4() {
//     const name = 10;
//     return 10
// }
// function test5() {
//     const name = 10;
//     return 10
// }
export {
    testNumber,
    par,
    mySearch,
    identity,
    MultiplePara,
    SinglePara
}