const fs = require('fs'); //'fs' 객체 가져오기

const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';

//input 한 번에 읽어오기
const input = fs.readFileSync(filePath).toString().split('\n');

//수열의 크기(N), 합(M)
let [N, M] = input[0].split(' ').map(Number);

/*
  수열의 i번째 수부터 j번째 수까지의 합 A[i] + .. + A[j]가 M이 되는 경우의 수?
  => 시간 제한 0.5초 / Sequential Search로 일일이 다 찾는 건.. 분명 시간 터짐
  => N의 개수가 10,000개, 부분집합을 일일이 탐색하려면..? 2^10000개 다 탐색? 말도 안되는 짓이지!
  => 연속된 원소의 집합에서 찾는거임..
    -> 투 포인터 쓰면 되는 거 아님?
*/

let num_list = [];

//우선 수열 입력 받기
num_list = input[1].split(' ').map(Number);

let sum = 0;
let answer = 0;
let start = 0, finish = 0;

/* 
  연속된 수의 집합에서 결과를 도출해야 함.. --> 투 포인터!
  sum에 더하기 빼기 하는 연산은.. 수열의 모든 원소에 대해 한 번씩만 진행 --> 최대 10,000번
*/
while (finish < N) {
  if (sum < M) {
    sum += num_list[finish];
    finish++;
  } else {
    if (sum === M) answer++;
    sum -= num_list[start];
    start++;
  }
}

/* 
  마지막 부분합이 M인지 추가 검사 
  --> finish가 N이 되었어도.. start를 증가 시키면서 남아있는 답을 찾아내야 함
*/
while (sum >= M) {
  if (sum === M) answer++;
  sum -= num_list[start];
  start++;
}

console.log(answer);