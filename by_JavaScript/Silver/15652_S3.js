const fs = require('fs'); //'fs' 객체 가져오기

const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';

//N, M 읽어오기
const [N, M] = fs.readFileSync(filePath).toString().split(' ').map(Number);

/*
  자연수 N, M이 주어졌을 때 아래 조건을 만족하는 M인 수열 모두 구하기
  - 1부터 N까지 자연수 중에서 M개를 고른 수열
  - 같은 수를 여러 번 골라도 된다.
  - 고른 수열은 비내림차순이어야 함 (A1 <= A2 <= .. <= Ak)
*/

let num_list = [];
for(let i = 0; i<N; i++) {
  num_list.push(i+1);
}
let combination = new Array(M).fill(0);

function making_Sequence(depth) {
  //기저 조건
  if(depth === M) {
    console.log(combination.join(' '));
    return;
  }

  //같은 수 여러번 골라도 되니까.. for문을 처음부터 돌면 된다
  //재귀호출에서도 처음부터 동작하니, 사전순으로 증가하는 순서로 수열을 출력할 것임
  for(let i = 0; i<N; i++){
    if(depth > 0 && combination[depth-1] <= num_list[i]) {
      combination[depth] = num_list[i];
    } else if(depth === 0) {
      combination[depth] = num_list[i];
    } else { //조건에 만족하지 않는다면, for문 그냥.. continue
      continue;
    }
    making_Sequence(depth+1); //재귀 호출
  }
}

making_Sequence(0);