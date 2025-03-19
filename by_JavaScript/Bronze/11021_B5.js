const fs = require('fs'); 

const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';

// 한 줄 입력을 읽어와 공백을 기준으로 나누고 숫자로 변환
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

let T = Number(input[0]);

//반복문 돌리기
for(let i = 0; i < T; i++) {
  let [A, B] = input[i+1].split(' ').map(Number);
  console.log("Case #"+(i+1)+": "+(A+B));
}