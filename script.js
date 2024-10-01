// // Select the button using its ID
// const button = document.getElementById('btn');

// // Add a click event listener to the button
// button.addEventListener('click', function() {
//     // Generate a random color
//     const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    
//     // Change the background color of the body
//     document.body.style.backgroundColor = randomColor;
// });


// Function to calculate the area of a rectangle
// function calculateRectangleArea(length, width) {
//     return length * width;
// }

// console.log(calculateRectangleArea(5,3));


// map , filter , reduce

// let num =[2,3,,5,6]
// num.forEach((number)=>{
//     console.log(number*number);
    
// })

// filter method

// const numbers = [1, 2, 3, 4, 5];
// const num = numbers.filter((num) =>{
//    return num % 2 ==0;
// })

// // console.log(num); 

// let num1 = [2,3,4,5]
// let b = num1.reduce ((a,b)=>{
//    return a+b;
// });
// console.log(b);

   
let num2 =[3,2,4,5,2]
let b2 = num2.reduce((a,b)=>{
    return a*b;
});
console.log(b2);
