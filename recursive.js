function factorial(n){
    if(n != 0){
        return n * factorial(n -1);
    }
    return 1;
}
console.log(factorial(5));

function kaijyou(n){
    if(n != 0){
        for (let i = n; i < 0; --i){
            return n * n[i];
        }
    }
    return 1;
}
console.log(kaijyou(5));