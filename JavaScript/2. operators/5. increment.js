// 증가 & 감소 연산자 increment & decrement Operators
let a = 0;
a++; // a = a + 1;
console.log(a); // 1
a--; // a = a -1;
console.log(a); // 0

console.clear();
// 주의! (앞에 쓰는지 뒤에 쓰는지에 따라 동작방식 차이)
// a++ : 필요한 연산을 하고, 그뒤 값을 증가시킴
// ++a : 값을 먼저 증가하고 필요한 연산을 한다.
a = 0;
let b = a++;
console.log(b); // 0
console.log(a); // 1
