let x = 6;
let a = 1;
let b = 0;
let c = 0;
function fibb(x,a,b,c){
for(let i = 1;i<=x;i++){
    console.log('fibonaci series is'+c);
    c = a+b;
    a = b;
    b = c;
}
}
let result = fibb(6,1,0,0);