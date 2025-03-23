const fs = require('fs'); 

const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';

// 한 줄 입력을 읽어와 공백을 기준으로 나누고 숫자로 변환
// const N = Number(fs.readFileSync(0, 'utf-8').toString().trim());
const input = fs.readFileSync(filePath, 'utf-8').toString();

/*
  입력은 최대 100줄로 이루어져 있음.
  알파벳 소문자, 대문자, 공백, 숫자로만 이루어져 있음
  각 줄은 공백으로 시작하지 않고, 공백으로 끝나지 않는다
  --> "입력받은 그대로 출력한다"
*/

console.log(input);