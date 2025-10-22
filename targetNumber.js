let arr=[1,2,3,4,5,6,7,8,9,10];
let target = 10;
let seen= [];
let result=[];

arr.map( x => { (target-x)
    if(seen.includes(target-x)){
        result.push([x,target-x]);
    }
    seen.push(x);
   
});
let json=JSON.stringify(arr);

console.log(json);
console.log(result);