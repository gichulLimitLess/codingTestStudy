const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

/*
  총 100,000비트로 이루어진 이진수 A와 B가 주어짐
  -> A&B, A|B, A^B, ~A, ~B한 값을 출력하는 프로그램 작성
*/