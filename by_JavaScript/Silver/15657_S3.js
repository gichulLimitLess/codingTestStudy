const fs = require('fs') //'fs' 객체 가져오기
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

/*
  N개의 자연수는 모두 다른 수 / 길이가 M인 수열 모두 구하는 거 작성!
  - N개의 자연수 중에서 M개를 고른 수열
  - 같은 수를 여러 번 골라도 됨
  - 고른 수열은 비내림차순이어야 함 (A1 <= A2 <= ... <= AM)
    --> 중복 조합의 개수를 구해볼래?
*/

//입력 받기
let [N, M] = input[0].split(' ').map(Number);
let num_list = input[1].split(' ').map(Number);
let answer = [];

//수열들을 모아두고 한 번에 출력하기 위한 list
let result = [];

//수열을 사전 순 증가하는 순서로 출력하기 위해 오름차순 소팅해야 함
num_list.sort((a, b) => a - b);

//중복조합 
function Combination_withRepetition(depth, start) {
  //기저 조건 도달
  if(depth === M) {
    result.push(answer.join(' ')); //result에 모아 둔다
    return;
  }

  //num_list 순회하면서 모두 탐방
  for(let i = start; i < N; i++) {
    if(depth > 0 && num_list[i] < answer[depth-1]) continue; //비내림차순을 만족하지 못하면 pass
    answer[depth] = num_list[i];
    //같은 수를 여러번 골라도 되기 때문에 start는 그대로 넣는다.
    Combination_withRepetition(depth+1, start);
  }
}

//스타트~
Combination_withRepetition(0, 0);
console.log(result.join('\n'));