const fs = require('fs'); //'fs' 객체 가져오기

const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';

//input 한 번에 읽어오기
const input = fs.readFileSync(filePath).toString().split('\n');

//수열의 크기(N), 합(M)
let N = Number(input[0]);
let M