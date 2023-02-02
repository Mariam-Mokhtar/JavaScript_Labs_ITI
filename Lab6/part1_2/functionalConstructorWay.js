//Functional Constructor
console.log("Functiona Constructor Way");
function Shape_(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
}
Shape_.prototype.calcPerimeter = function () {
    return `Perimeter of ${this.name} is ${this.sides * this.sideLength}`;
};

var square1 = new Shape_("square", 4, 5);
console.log(square1.calcPerimeter());

var triangle1 = new Shape_("triangle", 3, 3);
console.log(triangle1.calcPerimeter());

function Square_(sideLength) {
    Shape_.call(this,"square", 4, sideLength);
}

Square_.prototype =Shape_.prototype;
Square_.prototype.constructor = Square_;
Square_.prototype.calArea =  function () {
    return `Area of ${this.name} is ${Math.pow(this.sideLength,2)}`;
};
var square1_=new Square_(5);
console.log(square1_.calcPerimeter());
console.log(square1_.calArea());