let number=[1,2,3,4,5,6,7,6,5];


let result = number.reduce((acc,x) =>{
    acc[x]=(acc[x] || 0)+1;
    return acc;
},{});
console.log(result)