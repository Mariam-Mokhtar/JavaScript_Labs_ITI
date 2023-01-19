// Setup following Using Constructor functions, Using Classes, Using Objects Linking to Other Objects (OLOO),
// Using Factory functions
// Person:
// -	Attributes (full name, money, sleep mood, health Rate)
// -	Methods (sleep, eat, buy)

// Implement Person methods:
// 	Sleep(hours): 
// (7-> happy, 
// < 7 -> tired,
//  >7 ->lazy)
// 	Eat(meals): (3 meals -> 100 health rate, 
// 		         2 meals -> 75 health rate, 1 meal-> 50 health rate)
// 	Buy(items): (1 item -> decrees Money 10 LE)	

// 1
// Constructor Functions

// function Person(name, money) {
//     this.fullName = name;
//     this.money = money;
//     this.sleepMode = null;
//     this.healthRate = null;
// }

// Person.prototype.Sleep = function (hours) {
//     this.sleepMode = (hours == 7) ? `Happy` : (hours > 7) ? `Lazy` : `Tired`;
// }
// Person.prototype.Eat = function (meals) {
//     switch (meals) {
//         case 1:
//             {
//                 this.healthRate = `50 Health Rate`;
//                 break;
//             }
//         case 2:
//             {
//                 this.healthRate = `75 Health Rate`;
//                 break;
//             }
//         case 3:
//             {
//                 this.healthRate = `100 Health Rate`;
//                 break;
//             }
//     }

// }
// Person.prototype.Buy = function (items) {
//     this.money -= (10 * items);
// }

// const person1 = new Person("Mariam Mokhtar", 5000);
// const person2 = new Person("Yosra Ahmed", 7000);

// 2
// Classes 

// class Person {
//     constructor(name, money) {
//         this.fullName = name;
//         this.money = money;
//         this.sleepMode = null;
//         this.healthRate = null;
//     }
//     Sleep(hours) {
//         this.sleepMode = (hours == 7) ? `Happy` : (hours > 7) ? `Lazy` : `Tired`;
//     }
//     Eat(meals) {
//         switch (meals) {
//             case 1:
//                 {
//                     this.healthRate = `50 Health Rate`;
//                     break;
//                 }
//             case 2:
//                 {
//                     this.healthRate = `75 Health Rate`;
//                     break;
//                 }
//             case 3:
//                 {
//                     this.healthRate = `100 Health Rate`;
//                     break;
//                 }
//         }
//     }
//     Buy(items) {
//         this.money -= (10 * items);
//     }
// }

// const person1 = new Person("Mariam Mokhtar", 5000);
// const person2 = new Person("Yosra Ahmed", 7000);

// 3
// OlOO

// const Person = {
//     init(name, money) {
//         this.fullName = name;
//         this.money = money;
//         this.sleepMood = null;
//         this.healthRate = null;
//     },
//     Sleep(hours) {
//         this.sleepMood = (hours == 7) ? `Happy` : (hours > 7) ? `Lazy` : `Tired`;
//     },
//     Eat(meals) {
//         switch (meals) {
//             case 1:
//                 {
//                     this.healthRate = `50 Health Rate`;
//                     break;
//                 }
//             case 2:
//                 {
//                     this.healthRate = `75 Health Rate`;
//                     break;
//                 }
//             case 3:
//                 {
//                     this.healthRate = `100 Health Rate`;
//                     break;
//                 }
//         }
//     },
//     Buy(items) {
//         this.money -= (10 * items);
//     }
// }

// const person1 = Object.create(Person);
// person1.init("Mariam Mokhtar", 5000);

// const person2 = Object.create(Person);
// person2.init("Yosra Ahmed", 7000);

// 4
// Factory Function 


// function Person(fullName, money) {
//     return {
//         fullName,
//         money,
//         sleepMood: null,
//         healthRate: null,
//         Sleep(hours) {
//             this.sleepMood = (hours == 7) ? `Happy` : (hours > 7) ? `Lazy` : `Tired`;
//         },
//         Eat(meals) {
//             switch (meals) {
//                 case 1:
//                     {
//                         this.healthRate = `50 Health Rate`;
//                         break;
//                     }
//                 case 2:
//                     {
//                         this.healthRate = `75 Health Rate`;
//                         break;
//                     }
//                 case 3:
//                     {
//                         this.healthRate = `100 Health Rate`;
//                         break;
//                     }
//             }
//         },
//         Buy(items) {
//             this.money -= (10 * items);
//         }
//     }

// }

// const person1 = Person("Mariam Mokhtar", 5000);
// const person2 = Person("Yosra Ahmed", 7000);

// //person 1
// console.log(person1);
// person1.Sleep(7);
// person1.Eat(2);
// person1.Buy(10);
// console.log(person1);
// //person 2
// console.log(person2);
// person2.Sleep(8);
// person2.Eat(3);
// person2.Buy(1);
// console.log(person2);