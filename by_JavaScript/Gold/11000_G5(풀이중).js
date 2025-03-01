const fs = require('fs'); //'fs' 객체 가져오기
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';
//input 한 번에 읽어오기
const input = fs.readFileSync(filePath).toString().split('\n');

/*
  Si에 시작해서 Ti에 끝나는 N(1<=N<=200,000)개의 수업, 최소의 강의실을 사용해서 모든 수업을 가능하게 해야 함
  수업 끝난 직후에 바로 같은 강의실에서 연강 가능 --> 사용하는 강의실 갯수를 최소로 해야 함!  
  N개의 줄에 Si, Ti가 주어짐 (0 <= Si < Ti <= 10억)
*/

//입력 받기
let N = Number(input[0]);
let class_list = []
for(let i = 0; i < N; i++) {
  class_list.push(input[i+1].split(' ').map(Number));
}

/*
  (S1, T1)이 있고, (S2, T2)가 있다고 가정해보자.
  
*/

console.log(class_list);