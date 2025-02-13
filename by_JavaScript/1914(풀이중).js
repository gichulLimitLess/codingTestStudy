const fs = require('fs'); //'fs' 객체 가져오기

const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';

//첫 번째 장대에 쌓인 원판의 개수 N 입력받기
const N = Number(fs.readFileSync(filePath).toString().trim());

// 하노이 탑의 이동 횟수는 항상 `2^N - 1`
// BigInt는 기본적으로 출력할 때 n이 붙는 문제가 있어서, 문자열로 변환해 주어야 함.
console.log((BigInt(2) ** BigInt(N) - BigInt(1)).toString());

//N이 20 이하일 때만 연산 수행 후 출력
if(N <= 20) {
  let result_array = [];

  function hanoi(cnt, start, imsi, finish) {
    //모든 판을 다 옮겼다면.. 종료
    if(cnt === 0) return;
    //현재 기둥에서 target(맨 아래 판)을 뺀 나머지(cnt-1)들을 임시 기둥(imsi)에 옮겨 놓기
    hanoi(cnt - 1, start, finish, imsi);
    //target(맨 아래 판)을 목적지로 옮겨 놓기 (20 이하인 경우에만 출력하니까, 나머지 경우엔 저장 X)
    result_array.push(`${start} ${finish}`);
    //임시 기둥(imsi)에 옮겨 놨던 거 다시 목적지로 옮겨 놓기
    hanoi(cnt - 1, imsi, start, finish);
  }

  hanoi(N, 1, 2, 3); //함수 호출
  console.log(result_array.join("\n")); 
}
