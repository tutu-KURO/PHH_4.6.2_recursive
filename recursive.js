//再起関数　P.210

// function factorial(n){
//     if(n != 0){
//         return n * factorial(n - 1);
//     }
//     return 1;
// }
// console.log(factorial(5));


//再帰関数使わない版

// function factorial(n){
//     let x = n;
//     if(n !== 0){
//         for (let i = 1; i < x; i++){
//              n = n * (x - i);
//         }
//         return n;
//     }
//     return 1;
// }
// console.log(factorial(5));




function factorial(n) {
    let answer = n;
    if(n === 1){
        return 1;
    }
    for (let i = 1; i < n; i++){
        answer *= (n - i);
    }
    return answer;
}
console.log(factorial(1));

