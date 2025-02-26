const fs = require('fs'); //'fs' 객체 가져오기

const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';

//input 한 번에 읽어오기
const input = fs.readFileSync(filePath).toString().split('\n');

//수열의 크기(N), 합(M)
let [N, M] = input[0].split(' ').map(Number);

/*
  수열의 i번째 수부터 j번째 수까지의 합 A[i] + .. + A[j]가 M이 되는 경우의 수?
  => 부분집합을 탐색하면서, 그것이 M이 되는지 아닌지 확인하면 그만 아님?
*/

let num_list = [];

//우선 수열 입력 받기
for(let i = 0; i < N; i++) {
  num_list = input[1].split(' ').map(Number);
}

let sum = 0;
let answer = 0;

//부분집합은 재귀로 호출한다
function subset(depth, len) {
  //기저조건 도달(subset 함수 N번 불렀을 경우..)
  if(depth === N) {
    if(sum === M) answer++; //부분 집합의 합이 M이 되는 경우에만 경우의 수(answer)++
    return;
  }

  //특정 원소를 선택하지 않음
  subset(depth+1, len);

  //특정 원소를 선택함 (선택해서 더했다고 가정) --> 선택 했으니 부분집합에서 선택할 인덱스(len)+1
  //하
  sum += num_list[len];
  subset(depth+1, len+1);
  sum -= num_list[len];
}

//subset 함수 호출 후, 결과 출력
subset(0, 0);
console.log(answer);