// function sum(n1=0,n2=0){
//     return(n1+n2);
// }

// console.log(sum(1/2,5))



function fatorial(n){
    let fat = 1
    for(let i=n; i>1 ; i--){
        fat *= i;

    }
    return fat
}


console.log(fatorial(5))