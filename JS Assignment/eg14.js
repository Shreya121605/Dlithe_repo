//14]find the sum of digits
let digit=209,sum=0;
while(digit>0){
    let num=digit%10;
    sum=sum+num;
    digit=Math.floor(digit/10);
}console.log(sum);