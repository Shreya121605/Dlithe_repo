//15]fibonacci series

let n=10,first=0,second=1;
console.log(first);
console.log(second);
for(let i=3;i<=n;i++){
    let next=first+second;
    console.log(next);
    first=second;
    second=next;
}