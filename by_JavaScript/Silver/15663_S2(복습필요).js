const fs = require('fs'); //'fs' 객체 가져오기
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';
//input 한 번에 읽어오기
const input = fs.readFileSync(filePath).toString().split('\n');

let [N, M] = input[0].split(' ').map(Number);
let num_list = input[1].split(' ').map(Number);

/*
  N개의 자연수 중에서 M개를 고른 수열 
  (N개의 자연수 중 같은 수가 있을 수 있음 / 중복 검사할 필요 있음)
  --> 중복되는 수열 여러 번 출력하면 X
  --> 수열은 사전 순으로 증가하는 순서로 출력해야 함
*/

//사전 순으로 증가하는 순서로 출력하기 위해 오름차순 정렬
num_list.sort((a, b) => a - b);

let result_all = [];
let result = [];
let visited = new Array(N).fill(false); // 숫자 값이 아니라 "인덱스" 기준 방문 체크

//정렬을 할 경우, 연속된 중복을 제거할 필요가 있음
function permutation(depth) {
  if (depth === M) {
    result_all.push(result.join(' '));
    return;
  }

  for (let i = 0; i < N; i++) {
    if (visited[i]) continue;
    
    // 연속된 중복 숫자가 있다면, 이전에 방문하지 않은 경우는 무시
    if (i > 0 && num_list[i] === num_list[i - 1] && !visited[i - 1]) continue;

    visited[i] = true;
    result[depth] = num_list[i];
    permutation(depth + 1);
    visited[i] = false;
  }
}

// 순열 함수 호출 후 결과 출력
permutation(0);
console.log(result_all.join('\n'));