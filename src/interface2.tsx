interface Shape {
  name?:string;
  color: string;
}

interface PenStroke {
  penWidth: number;
}

interface Square extends Shape, PenStroke {
  sideLength: number;
}

let square:Square={
  color:'blue',
  penWidth:5.1,
  sideLength:10
  // penWidth: 5.0
};
// square={};
// square.color = "blue"; 
// square.sideLength = 10; 
// square.penWidth = 5.0;
