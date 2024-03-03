{
  /**
   * JavaScript
   * Primitive(원시값) : number, string, boolean, bigint, symbol, null, undefined
   * Object(객체) : function, array, object
   */

  // number (숫자)
  const num: number = 1;

  // string (문자)
  const str: string = "hello";

  // boolean (True & false)
  const boal: boolean = false;

  // undefined (비어있는지 아닌지 아직 결정되지 않은 상태)
  let name: undefined; // 😡 이렇게 사용 X
  let age: number | undefined; // ✅ (숫자 또는 undefined) 이걸 더 많이 쓴다. ➡️ 데이터가 해당 타입이거나 없을 경우
  age = undefined; // 값이 없거나
  age = 1; // 혹은 값이 숫자티입으로 존재하거나

  function find(): number | undefined {
    return undefined;
  }

  // null ( 완전이 이곳은 비어있다고 결정난 상태 )
  let person: null; // 😡 이렇게 사용 X
  let person2: string | null; // ✅ (숫자 또는 null)

  // unknown ( 알수 없는 상태 ) 😡 비추천
  let notSure: unknown = 0;
  notSure = "hello";
  notSure = true;

  // any 😡 비추천
  let anything: any = 0;
  anything = "뭐든 가능해";

  // void (아무런 것도 리턴하지 않는다.) 생략가능
  function print(): void {
    console.log("hello");
    return;
  }

  // never ( return할 계획이 절대 없다는 뜻 )
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message);
  }

  // object (광범위하고 어떤것이든(객체,배열,함수) 담을 수 있는 상태)
  let obj: object; // 😡 비추천
  function acceptSomeObj(obj: object) {}

  acceptSomeObj({ name: "inseong" });
  acceptSomeObj({ animal: "dog" });
}
