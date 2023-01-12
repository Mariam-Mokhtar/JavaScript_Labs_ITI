
var shape;
var area;
do {
    shape = prompt(`Enter the name of the shape you want to calc Area :
    \n Circle, Triangle, Square, Rectangle, Parallelogram, Trapezium or Ellipse`);
    if (shape != null && shape != "") {
        switch (shape.toLowerCase()) {
            case "circle": {
                var redius = prompt("Enter the redius of the circle:");
                redius = Number(redius);
                if (redius > 0) {
                    area = (Math.PI) * (Math.pow(redius, 2));
                    alert(`Area of ${shape} is ${area}`);
                } else {
                    alert("Invaild radius")
                }
            } break;

            case "triangle": {
                var base = prompt("Enter the Base of the triangle:");
                var height = prompt("Enter the Height of the triangle:");
                base = Number(base);
                height = Number(height);
                if (base > 0 && height > 0) {
                    area = 0.5 * base * height;
                    alert(`Area of ${shape} is ${area}`);
                } else {
                    alert("Invaild dimensions")
                }
            } break;

            case "square": {
                var length = prompt("Enter the length & width of the square:");
                length = Number(length);
                if (length > 0) {
                    area = (Math.pow(length, 2));
                    alert(`Area of ${shape} is ${area}`);
                } else {
                    alert("Invaild dimension")
                }
            } break;

            case "rectangle": {
                var length = prompt("Enter the Length of the Rectangle:");
                var width = prompt("Enter the Width of the Rectangle:");
                length = Number(length);
                width = Number(width);
                if (length > 0 && width > 0) {
                    area = length * width;
                    alert(`Area of ${shape} is ${area}`);
                } else {
                    alert("Invaild dimensions")
                }
            } break;

            case "parallelogram": {
                var base = prompt("Enter the Base of the Parallelogram:");
                var height = prompt("Enter the Height of the Parallelogram:");
                base = Number(base);
                height = Number(height);
                if (base > 0 && height > 0) {
                    area = base * height;
                    alert(`Area of ${shape} is ${area}`);
                } else {
                    alert("Invaild dimensions")
                }
            } break;

            case "trapezium": {
                var length1 = prompt("Enter the First Length of the Trapezium:");
                var length2 = prompt("Enter the Second Length of the Trapezium:");
                var height = prompt("Enter the Height of the Trapezium:");
                length1 = Number(length1);
                length2 = Number(length2);
                height = Number(height);
                if (length1 > 0 && length2 > 0 && height > 0) {
                    area = (0.5 * (length1 + length1)) * height;
                    alert(`Area of ${shape} is ${area}`);
                } else {
                    alert("Invaild dimensions")
                }
            } break;

            case "ellipse": {
                var minor = prompt("Enter the Minor axis of the Ellipse:");
                var major = prompt("Enter the Major of the Ellipse:");
                minor = Number(minor);
                major = Number(major);
                if (minor > 0 && major > 0) {
                    area = Math.PI * (0.5 * major) * (0.5 * minor);
                    alert(`Area of ${shape} is ${area}`);
                } else {
                    alert("Invaild dimensions")
                }
            } break;

            default:
                { alert("Invaild Shape") }
        }

    }

    var ans = confirm("Do you want to continue?");
    if (!ans)
        break;
} while (true)
