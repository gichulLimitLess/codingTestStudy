const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';
//input 한 번에 읽어오기
const input = fs.readFileSync(filePath).toString().split('\n');

let [A, B] = input[0].split(' ').map(Number);

//나누기는 floor로 소수를 반올림 해줘야 함
console.log(A+B);
console.log(A-B);
console.log(A*B);
console.log(Math.floor(A/B));
console.log(A%B);