function clc(...numbers) {
let result= 0 
for (let i=0; i<numbers.length; i++ ) {
result += numbers[i]
}

return `ur result is ${result}`
} 


console.log(clc(50,60));
