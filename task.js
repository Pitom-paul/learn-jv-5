// function sayHello(){
//     console.log('Hello World');
    
// }
// sayHello()



// function showName(){
//     console.log('My name is Pitom');
    
// }
// showName()


// function greet(name){
//     console.log('hello', name);
    
// }
// greet('pitom')


// function city(name){
//     console.log(name);
    
// }
// city('Dhaka')

// function introduce(name, age){
//     console.log('My name is', name);
//     console.log('I am' +' ' + age + " " + 'years old');
    
// }
// introduce('Pitom', 24)
// function studentInfo(name, department){
//     console.log('Student Name:', name);
//     console.log('Department:', department );
    
    
// }
// studentInfo('Pitom', 'Marketing')


// function add(a,b){

//     return a + b;
    
// }
// let result = add(10,20);
// console.log(result);

// function isAdult(age){
//     if (age >= 18) {
//         return true;
        
//     }else{
//         return false;
        
//     }
// }
// let result = isAdult(18);
// console.log(result);


// function getEvenOdd(number){
//      if (number % 2 === 0) {
//         return 'even';
//      }else{
//         return 'odd';

//      }
    
// }
// let result1 = getEvenOdd(8)
// console.log(result1);
// let result2 = getEvenOdd(7);
// console.log(result2);


// function calculateDiscount(price){
//     if (price >= 1000) {
//        let discoutnPrice = price * 10 / 100
//        let totalPrice = price - discountPrice
//         return totalPrice;
//     }else{
//         return price;
//     }
// }
// console.log(calculateDiscount(5000));


function calculateGrade(mark){
    if (mark >= 80) {
        return 'A';

    }
    else if (mark >= 70) {
       return 'A'; 
    }
    else if (mark >= 60) {
       return 'B'; 
    }
    else if (mark >= 50) {
       return 'C'; 
    }
   else{
    return 'Fail';
    
   }
}
console.log(calculateGrade(95));


