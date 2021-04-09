//Условные операторы
// function sum(a, b) {
//     if (a % 2 === 0) {
//         return a * b
//     } else {
//         return a + b
//     }
// }
// console.log(sum(2, 4));
// console.log(sum(3, 4));
// function defAxis(x, y) {
//     if (x > 0 && y > 0) {
//         return 'Точка в первой четверти'
//     }
//     else if (x < 0 && y > 0) {
//         return 'Во второй четверти'
//     }
//     else if (x < 0 && y < 0) {
//         return 'В третей четверти'
//     }
//     else if (x > 0 && y > 0) {
//         return 'В четвертой четверти'
//     }
//     else if (x > 0 && y === 0) {
//         return 'Между первой и четвертой четвертью'
//     }
//     else if (x < 0 && y === 0) {
//         return 'Между второй и третей четвертью'
//     }
//     else if (y > 0 && x === 0) {
//         return 'Между первой и второй четвертью'
//     }
//     else if (y < 0 && x === 0) {
//         return 'Между ттрей и четвертой четвертью'
//     }
//     else {
//         return '0 , 0'
//     }
// }
// // console.log(defAxis(2, 4))

// function sumPosNum(a, b, c) {
//     var result = 0
//     if (a > 0) {
//         result += a
//     }
//     if (b > 0) {
//         result += b
//     }
//     if (c > 0) {
//         result += c
//     }
//     return result;
// }
// // console.log(sumPosNum( -3, 4, 5))
// function sumPosNum1(...arguments) {
//     var result = 0
//     for (let i = 0; i < arguments.length; i++) {
//         if (arguments[i] > 0) {
//             result += arguments[i]
//         }
//     }
//     return result
// }
// // console.log(sumPosNum1(1, 2, 3 , -2)) 
// function sumMax(a, b, c) {
//     if (a * b * c > a + b + c) {
//         return a * b * c + 3
//     }
//     else if (a * b * c < a + b + c) {
//         return a + b + c + 3
//     }
//     else return 'hgfvhfhn'
// }
// // console.log(sumMax(0, 0, 0))
// function rating(num){
//     switch (true){
//         case (num === 0 || num <= 19 ):
//         console.log('F');
//         break;
//         case(num === 20 || num <= 39):
//         console.log('E')
//         break;
//         case(num === 40 || num <= 59):
//         console.log('D')
//         break;
//         case(num === 60 || num <= 74):
//         console.log('C')
//         break;
//         case(num === 75 || num <= 89):
//         console.log('B')
//         break;
//         case(num === 90 || num <= 100):
//         console.log('A')
//         break;
//          default: 
//         console.log('не то кино');
//     }
// }
// // console.log(rating(111));

// 23/03
// function one(n){
//     for(var i=1; i<= n; i++){
//         if (i % 3 === 0){
//             console.log('three');
//         }   else if(i % 5 === 0){
//             console.log('five');
//         }   else if(i % 3 === 0 && i % 5 === 0){
//         console.log('threefive');
//         }   else {console.log (i);
//         }
//         }
//          }
        //  one(3);
        // function one(n){
        //     for(var i=1; i <= n; i++){
        //         if (i % 3 === 0 && i % 5 === 0){
        //             console.log('threefive');
        //         }   else if(i % 3 === 0){
        //             console.log('three');
        //         }   else if(i % 5 === 0){
        //         console.log('five');
        //         }   else {console.log (i); }
        //          }
        //              }
        //             //  one(15);
        //             // задача 2
        //             for (let i = 0; i < 20; i++) { //! Эту строку можно изменить
        //                 for (let j = 0; j < 20; j++) {
        //                 if (i === 15 && j === 15) {
        //                 //! Эту строку можно изменить
        //                 }
        //                 console.log(i, j);
        //                 }
        //                }
      //   4 задание
      // function getObj(str){
      //     var charObj = {
      //       };
      //     for(var i = 0; i < str.length; i++){
      //         var symbol = str[i].toLowerCase()
      //         if(str[i] .toLowerCase() !== str[i].toUpperCase()){
      //         charObj[symbol]= charObj [symbol] ? charObj[symbol] + 1 : 1
      //     }
      //   }
      //     console.log(charObj)
      //     return charObj;
      // }
      // function anagram(strA, strB){
      //     var aCharObj = getObj(strA);
      //     var bCharObj = getObj(strB);
      //     for(var key in aCharObj){
      //         if(aCharObj[key] !== bCharObj[key]){
      //             return false;
      //         }
      //       }
      //         for(var key in bCharObj){
      //           if(aCharObj[key] !== bCharObj[key]){
      //               return false;
      //           }
      //     }
      //     return true;
      // }
      // console.log (anagram('asda', 'ds aa .'));
// ===================ЦИКЛЫ=============================







    
