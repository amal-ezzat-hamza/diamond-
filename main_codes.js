function diamond(size){

if(size % 2 == 0 || size < 0 || size == 0)
   return null;
 
  let j = Math.ceil(size/2);  
  let arr = [];
   for(let i = 1; i <= size; i = i + 2){  
     arr.push("*".repeat(i).padStart(j).padEnd(size) + '\n');
     j++;
   }

let first = arr.slice();
let reverse =  first.reverse().slice(1);
  
  return [...arr, ...reverse].join(' ');
  
} 
