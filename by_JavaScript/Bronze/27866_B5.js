const fs = require('fs'); //'fs' 객체 가져오기

const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';

//읽어오기
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let S = input[0];
let i = Number(input[1]);

console.log(S.slice(i-1, i));