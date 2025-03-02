const fs = require('fs'); //'fs' 객체 가져오기
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';
//input 한 번에 받기
const input = fs.readFileSync(filePath).toString().split('\n');

/*
  - N개의 자연수 중에서 M개를 고른 수열 (N개의 자연수는 같은 게 있을 수 있음)
  - 같은 수를 여러 번 골라도 된다
*/

//입력 받기
let [N, M] = input[0].split(' ').map(Number);
let num_list = input[1].split(' ').map(Number);

/*
  유의점: 같은 수를 여러 번 골라도 되지만, 같은 depth에서 같은 수를 여러 번 고르면 안된다
  --> 중복 검사 필요 (temp 변수 활용)
*/
let result = [];
let result_all = [];

//사전 순 출력을 위해 오름차순 정렬
num_list.sort((a, b) => a - b);

//중복 순열
function Permutation_withRepetition(depth) {
  //기저 조건에 도달했을 때
  if(depth === M) { 
    result_all.push(result.join(' '));
    return;
  }

  let temp = -1
  //num_list를 모두 순회하며 탐색 (중복순열이므로, 그냥 순열 때와 다르게 visited 체크 필요 X)
  for(let i = 0; i < N; i++) {
    if(temp === num_list[i]) continue; //같은 depth에서 같은 수를 여러 번 고르면 안된다
    temp = num_list[i];
    result[depth] = num_list[i];
    Permutation_withRepetition(depth+1); //재귀 호출
  }
}

//함수 실행 후 결과 출력
Permutation_withRepetition(0);
console.log(result_all.join('\n'));
