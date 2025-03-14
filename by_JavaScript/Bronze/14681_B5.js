const fs = require('fs'); //'fs' 객체 가져오기

const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';

//input 한 번에 입력 받기
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let x = Number(input[0]);
let y = Number(input[1]);

if(x > 0 && y > 0) { // 제1사분면
  console.log(1);
} else if(x < 0 && y > 0) { // 제2사분면
  console.log(2);
} else if(x < 0 && y < 0) { // 제3사분면
  console.log(3); 
} else if(x > 0 && y < 0) { // 제4사분면
  console.log(4);
}