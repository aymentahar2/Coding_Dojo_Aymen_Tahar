// Print odds 1-20
var i=1;
while(i<=20){
    if(i%2!==0){
        console.log(i)
    }
    i++
}
// Decreaing multuples of 3
for(var i=100; i>=0 ;i--){
    if(i%3==0){
        console.log(i)
    }
}
// Print the sequence
for(var i=4 ;i>-4; i-=1.5){
    console.log(i)

}
Sigma
var sum=0 ;
for(var i=1;i<=100;i++){
    sum+=i;
}
console.log(sum)
// Factorial
var fact =1;
for(var i=1; i<=12 ;i++){
    fact*=i
}
console.log(fact)