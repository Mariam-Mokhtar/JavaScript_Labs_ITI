
//---Part1---

class Shape {
    constructor(name, sides, sideLength) {
        this.name = name;
        this.sides = sides;
        this.sideLength = sideLength;
    }
    calcPerimeter() {
        return `Perimeter of ${this.name} is ${this.sides * this.sideLength}`;
    }
}
// var square=new Shape("square",4,5);
// console.log(square.calcPerimeter());

// var triangle=new Shape("triangle",3,3);
//  console.log(triangle.calcPerimeter());

//---Part2---

class Square extends Shape {
    constructor(sideLength) {
        super("square",4,sideLength);
    }
    calArea() {
        return `Area of ${this.name} is ${Math.pow(this.sideLength,2)}`;
    }
}

var square_=new Square(5);
console.log(square_.calcPerimeter());
console.log(square_.calArea());

