const fs = require('fs'); //'fs' 객체 가져오기

const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';

/*
  [입력 받기]
  N (1<=N<=1000)
  N개의 줄에 걸쳐서 두 정수 d(1<=d<=1000/마감일까지 남은 일수), w(1<=w<=100/과제의 점수), 
*/
//정수 N (1<=N<=1000)
const input = fs.readFileSync(filePath).toString().split('\n');
let N = Number(input[0]);
for(let i = 0; i < N; i++) {
  
}

/*
  마감일이 적게 남은 것부터 오름차순으로 정렬
  마감일이 같은 경우, 얻을 수 있는 점수가 큰 것부터 내림차순으로 정렬하면.. Greedy를 효율적으로 사용할 수 있는 거 아닌가?
  그리고, 남은 마감일수에 대해서.. 점수를 저장하는 배열의 size()와 비교해서 그 값이 size()보다 작으면 그냥 넣으면 되는데.. 
  size()보다 크거나 같을 경우엔.. 기존의 것을 꺼내와서 내 점수와 비교해서 날릴건지.. 얘를 넣어야 할지 "선택"해야 한다.
*/

