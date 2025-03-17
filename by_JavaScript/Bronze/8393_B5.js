const fs = require('fs'); //'fs' 객체 가져오기

const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';

//input 한 번에 입력 받기
// const N = Number(fs.readFileSync(0, 'utf-8').toString().trim());
// const input = fs.readFileSync(filePath).toString().trim().split('\n');
const n = Number(fs.readFileSync(filePath, 'utf-8').trim());

let result = 1;
for(let i = 1; i <= n; i++) {
  result += i;
}

console.log(result);