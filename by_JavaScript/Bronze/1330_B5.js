const fs = require('fs') //'fs' 객체 가져오기

const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';

//input 한 번에 받기
const [A, B] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

//각 경우에 맞게 출력을 한다.
if(A > B) {
  console.log('>');
} else if(A < B) {
  console.log('<');
} else if(A === B) {
  console.log('==');
}