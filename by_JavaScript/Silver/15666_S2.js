const fs = require('fs'); //'fs' 객체 가져오기
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';
//input 한 번에 받기
const input = fs.readFileSync(filePath).toString().split('\n');

/*
  - N개의 자연수 중에서 M개를 고른 수열
  - 같은 수를 여러 번 골라도 된다
  - 고른 수열은 비내림차순(A1 <= A2 <= ... <= Ai)이어야 된다
  -----> 중복조합
*/

let [N, M] = input[0].split(' ').map(Number);
let num_list = input[1].split(' ').map(Number);

//사전 순 출력을 위해 오름차순 정렬
num_list.sort((a, b) => a - b);

let result = [];
let result_all = [];

//중복조합
function Combination_withRepetition(depth, start) {
  //기저 조건
  if(depth === M) {
    result_all.push(result.join(' '));
    return;
  }

  let temp = -1
  //num_list를 start부터 탐색해봐야 함
  for(let i = start; i < N; i++) {
    if(temp === num_list[i]) continue; //같은 depth에서 같은 수를 여러 번 선택하는 경우가 있을 수 있음(temp를 통해 걸러내야 함)
    temp = num_list[i];
    result[depth] = num_list[i];
    Combination_withRepetition(depth+1, i); //재귀 호출 (자기 자신을 다시 뽑을수도 있으니, i+1 대신 i)
  }
} 

//함수 실행 후 결과 출력
Combination_withRepetition(0, 0);
console.log(result_all.join('\n'));