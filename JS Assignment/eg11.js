//11]reverse a number
let n=2025;
let reverse=0;
while(n>0){
    reverse=reverse*10+(n%10);
    n=Math.floor(n/10);
}console.log(reverse);