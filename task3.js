let printSegitiga = 5;
let answer = "";

if ( typeof printSegitiga != "number") {
  console.log("data harus number");
}

for ( let i = 1; i <= printSegitiga; i++) {
  answer += i + " "
  if ( i == printSegitiga ) {
    answer += "\n" + 1 + " ";
    printSegitiga -= 1; 
    i = 1;
  } 
}

console.log(answer)