//---Part3---

class Triple {
    static customName = "Tripler";
    static description = "I triple any number you provide";

    //Create static method calculate with n default arguments = 1 and return n * 3
    static calculate(n = 1) { //deault argument 
        return 3 * n;
    }
}
class SquaredTriple extends Triple {
    static longDescription;
    static description = "I square the triple of any number you provide";

    // Override static method calculate return calculate(n) * calculate(n) from parent class
    static calculate(n = 1) {
        return Math.pow(super.calculate(n),2);
    }
}
console.log(Triple.description); // 'I triple any number you provide'
console.log(Triple.calculate()); // 3
console.log(Triple.calculate(6)); // 18

console.log(SquaredTriple.calculate(3)); // 81 (not affected by parent's instantiation)
console.log(SquaredTriple.description); // 'I square the triple of any number you provide'
console.log(SquaredTriple.longDescription); // undefined
console.log(SquaredTriple.customName); 
