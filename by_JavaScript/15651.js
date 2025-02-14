const fs = require('fs'); //'fs' 객체 가져오기

const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';

//자연수 N, M 입력 받기
const [N, M] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

//1부터 N까지 자연수 중 M개를 골라야 하므로, 길이가 N인 수열 num_list 만들어야 함
let num_list = [];
for(let i = 0; i < N; i++) {
  num_list.push(i+1);
}

//만들어낸 조합을 저장하는 combination
let combination = Array(M).fill(0);
let result = [];

/* 
  같을 수를 여러 번 골라도 된다 (중복순열)
  재귀를 호출했을 때 중복 검사 필요 없음
*/

function Permutation_withRep(depth) {
  /*
    기저조건: 끝 칸까지 모두 골랐을 때 만들어낸 조합을 출력하고
    함수를 종료해야 한다
  */
  if(depth === M) {
    result.push(combination.join(' '));
    return;
  }
  
  //1부터 N까지 모두 선택해 가며 조합을 만들어 낸다
  for(let i = 0; i<N; i++) {
    combination[depth] = num_list[i];

    Permutation_withRep(depth+1); //재귀 호출
  }
}

Permutation_withRep(0); //초기 호출(첫번째(0) 칸부터 탐색 시작)
console.log(result.join('\n')); //한 번에 result에 combination들을 모아서 출력