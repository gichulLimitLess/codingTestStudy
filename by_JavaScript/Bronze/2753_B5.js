const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';
const N = Number(fs.readFileSync(filePath).toString().trim());

//윤년의 조건에 따라서 수행
if((N % 4 === 0 && N % 100 !== 0) || N % 400 === 0) {
  console.log(1);
} else {
  console.log(0);
}