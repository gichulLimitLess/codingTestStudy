const fs = require('fs'); //'fs' 객체 가져오기
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';
//input 한 번에 읽어오기
const input = fs.readFileSync(filePath).toString().split('\n');

let [N, M] = input[0].split(' ').map(Number);
let num_list = input[1].split(' ').map(Number);

/*
  N개의 자연수 중에서 아래의 조건을 만족하는 길이가 M인 수열을 모두 구해라.
  - N개의 자연수 중에서 M개를 고른 수열
  - 고른 수열은 비내림차순(A1 <= A2 <= .. <= Ak)이어야 한다
*/

//우선 num_list 오름차순 정렬(사전 순으로 증가하는 순서로 출력하기 위해..)
num_list.sort((a, b) => a - b);
let result_all = [];
let result = [];

//수열이 비내림차순이어야 함 -> '조합' 느낌
function combination(depth, start) {
  //기저조건 도달했을 때
  if(depth === M) {
    result_all.push(result.join(' '));
    return;
  }

  let temp = -1
  //num_list를 start부터 끝까지 전체 순회하면서 탐색
  for(let i = start; i < N; i++) {
    //같은 depth에서 같은 숫자가 여러 번 선택되면 안된다
    if(temp === num_list[i]) continue;
    temp = num_list[i];
    result[depth] = num_list[i];
    combination(depth+1, i+1);
  }
}

//결과 출력
combination(0, 0);
console.log(result_all.join('\n'));