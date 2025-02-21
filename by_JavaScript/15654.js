const fs = require('fs'); //'fs' 객체 가져오기
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';
//input 한 번에 받기
const input = fs.readFileSync(filePath).toString().split('\n');

/*
  N개의 자연수 중에서 M개를 고른 수열
  N개의 자연수를 저장할 num_list / 그 중에서 M개를 뽑아야 함
*/

const [N, M] = input[0].split(' ').map(Number);
let num_list = input[1].split(' ').map(Number);

//오름차순 정렬 (사전 순으로 증가하는 순서로 출력하기 위해)
num_list.sort((a, b) => a - b);
let answer = [];
let isSelected = Array(N).fill(false);

//수열 구하기
function Permutation(depth) {
  //기저조건
  // --> depth가 M에 도달하면.. 즉, M개를 뽑았다면 출력 후 종료
  if(depth === M) {
    console.log(answer.join(' '));
    return;
  }
  
  //num_list를 순회하면서 M개 뽑기를 시도할 것임
  for(let i = 0; i < N; i++) {
    //answer에 넣으려 하는 것이 이미 있다면 (check 배열이 true이면..)
    if(isSelected[i]) continue;
    isSelected[i] = true; //썼다고 체크
    answer[depth] = num_list[i];
    Permutation(depth+1); //재귀 호출
    isSelected[i] = false; //이젠 안 쓴다고 체크 해제
  }
}

//스타트~
Permutation(0);