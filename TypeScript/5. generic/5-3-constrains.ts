interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log(`full time`);
  }

  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log(`part time`);
  }

  workPartTime() {}
}

// 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수 💩
function payBad(employee: Employee): Employee {
  employee.pay();
  return employee;
}

// 제네릭은 어떤타입도 들어올 수 있기 때문에 코딩하는 시점에는 employee에 pay가 있는지 없는지 타입이 뭔지를 알 수 없음
// 제네릭에서의 extends : 어떤 타입도 들어올 수 있지만 Employee를 확장한 아이들만 된다.
function pay<T extends Employee>(employee: T): T {
  employee.pay();
  return employee;
}

const ellie = new FullTimeEmployee();
const inseong = new PartTimeEmployee();
ellie.workFullTime();
inseong.workPartTime();

const ellieAfterPay = pay(ellie);
const inseongAfterPay = pay(inseong);

const obj = {
  name: "ellie",
  age: 20,
};

const obj2 = {
  animal: "🐕",
};

console.log(getValue(obj, "name")); // ellie
console.log(getValue(obj, "age")); // 20
console.log(getValue(obj2, "animal")); // 🐕

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
