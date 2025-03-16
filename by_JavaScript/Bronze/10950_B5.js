const fs = require('fs'); //'fs' 객체 가져오기

const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';

//input 한 번에 입력 받기
// const N = Number(fs.readFileSync(0, 'utf-8').toString().trim());
// const input = fs.readFileSync(filePath).toString().trim().split('\n');
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const N = Number(input[0]);

//반복
for(let i = 0; i < N; i++) {
  let [A, B] = input[i+1].split(' ').map(Number);
  console.log(A+B);
}