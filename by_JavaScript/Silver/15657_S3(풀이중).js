const fs = require('fs') //'fs' 객체 가져오기
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

/*
  N개의 자연수는 모두 다른 수 / 길이가 M인 수열 모두 구하는 거 작성!
  - N개의 자연수 중에서 M개를 고른 수열
  - 같은 수를 여러 번 골라도 됨
  - 고른 수열은 비내림차순이어야 함 (A1 <= A2 <= ... <= AM)
*/

//입력 받기
let [N, M] = input[0].split(' ').map(Number);
let num_list = input[1].split(' ').map(Number);



