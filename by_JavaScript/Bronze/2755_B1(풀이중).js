const fs = require('fs') //'fs' 객체 가져오기

const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';

const input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = Number(input[0]);
let grade_list = [];

//grade_list
for(let i = 0; i < N; i++) {
  grade_list.push(input[i+1].split(' '));
}


