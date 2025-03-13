const fs = require('fs'); //'fs' 객체 가져오기

const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';

//input 한 번에 입력 받기
const input = fs.readFileSync(filePath).toString().trim().split('\n');

console.log('\\    /\\');
console.log(' \)  ( \'\)');
console.log('\(  /  \)');
console.log(' \\\(__\)|');
   