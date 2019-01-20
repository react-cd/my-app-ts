
// class Animal {
//   public name: number;
//   public constructor(theName: number = 2323) {
//     this.name = theName;
//   }
// };

class Grid {
  public static origin = { x: 0, y: 0 };
  // public scale:number;
  // 这样能
  constructor(public scale:number) {
    this.scale = scale;
  }
  // 静态变量
  public calculateDistanceFromOrigin(point: { x: number; y: number; }) {
    const xDist = (point.x - Grid.origin.x);
    const yDist = (point.y - Grid.origin.y);
    return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
  }
}

export {
  Grid
  // Animal
}