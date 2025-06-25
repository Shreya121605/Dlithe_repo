//3]check whether the given year is leap or not
let year=4000;
if((year%4===0 && year%100!=0)||(year%400===0)){
    console.log("Given year is a leap year");
}else{
    console.log("Given year is not a leap year");
}