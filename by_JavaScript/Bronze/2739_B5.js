const fs = require('fs'); //'fs' 객체 가져오기

const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';

//input 한 번에 입력 받기
// const N = Number(fs.readFileSync(0, 'utf-8').toString().trim());
const N = Number(fs.readFileSync(filePath).toString().trim());

//N*1부터 N*9까지 출력
for(let i = 1; i <= 9; i++) {
  console.log(N, '*', i, '=', N*i);
}