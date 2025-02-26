const fs = require('fs'); //'fs' 객체 가져오기
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';
//input 한 번에 읽어오기
const input = fs.readFileSync(filePath).toString().split('\n');

/*
  총 N개의 정수가 주어졌을 때, 정수 v가 몇 개인지 구해라
*/

let N = Number(input[0]);
let num_list = input[1].split(' ').map(Number);
let v = Number(input[2]);

let answer = 0;

//찾으려 하는 정수를 찾았다면..
for(let i = 0; i<N; i++) {
  if(num_list[i] === v) answer++;
}

console.log(answer);