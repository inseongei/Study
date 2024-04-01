function execute() {
  console.log("1");
  // 3초 뒤에 실행
  setTimeout(() => {
    console.log("2");
  }, 3000);
  console.log("3");
}

execute(); // ✅ 1 , 3 , 2

/**
 * 1. 함수를 호출하면 콘솔로그 1이 출력이 된다.
 * 2. setTimeout을 실행하면 해당되는 콜백함수를 던져 놓는다.
 * 3. 콘솔로그 3이 출력이 되고
 * 4. 던져놓은 콜백함수는 3초뒤에 역할을 다하고 테스크 큐에 들어오게 된다.
 * 5. 콜스택이 비어있으면 테스크 큐에 있는 함수를 스택에 다시 가져와서 실행이 된다.
 */