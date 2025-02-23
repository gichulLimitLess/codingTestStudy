/*
  크기가 N*N인 그리드의 각 칸에 R(빨강), G(초록), B(파랑) 중 하나를 색칠한 그림이 있다.
  적록색약: R과 G의 차이를 느끼지 못함 -> 같은 것으로 취급
  같은 색상이 상하좌우로 인접해 있는 경우에 두 글자는 같은 구역에 속함
  --> 적록색약인 사람이 봤을 때와 아닌 사람이 봤을 때 구역의 수를 구하는 프로그램?
*/
const fs = require('fs'); //'fs' 객체 가져오기
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';

//입력 받기
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');
let N = Number(input[0]);
let picture = [];
for(let i = 0; i < N; i++) {
  picture.push(input[i+1].split(''));
}

