"use strict";
/**
 * 글로벌 컨텍스트의 this
 * - 브라우저:
 * - 노드:
 */
const x = 0;
module.exports.x = x;
console.log(this);
console.log(globalThis); // 생략이 가능하다
// globalThis.setTimeout()
// setTimeout()
console.clear();

/**
 * 함수 내부에서의 this
 */
function fun() {
  console.log(this);
}

fun();

/**
 * 생성자 함수 또는 클래스에서의 this, 앞으로 생성될 인스턴스 자체를 가리킴
 */

function Cat(name) {
  this.name = name;
  this.printName = function () {
    console.log(this.name);
  };
}

const cat1 = new Cat("냐옹");
