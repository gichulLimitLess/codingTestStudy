const fs = require('fs'); //'fs' 객체 가져오기
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';
//input 한 번에 받기
const input = fs.readFileSync(filePath).toString().split('\n');

/*
  - N개의 자연수 중에서 M개를 고른 수열 (-> N개의 자연수는 모두 다른 수)
  - 고른 수열은 오름차순이어야 한다.
*/

//입력 받기
let [N, M] = input[0].split(' ').map(Number);
let num_list = input[1].split(' ').map(Number);
let combination = [];

//수열의 오름차순 정렬을 위해, 우선 num_list를 오름차순 정렬해야 한다
num_list.sort((a, b) => a - b);

//조합을 만들어야 함 (재귀 호출을 통해!)
function Combination(depth, start) {
  if(depth === M) {
    console.log(combination.join(' '));
    return;
  }

  /*
    num_list를 전체적으로 순회하며 조합을 찾아낸다
    재귀 호출을 진행하며, 그 다음 칸의 숫자도 찾아낸다
    이미 사용한 거면 제껴야 한다, 오름차순이 아닌 경우에도 제껴야 한다
  */

  for(let i = start; i < N; i++) {
    combination[depth] = num_list[i];
    Combination(depth+1, i+1);
  }
}

//스타트~
Combination(0, 0);