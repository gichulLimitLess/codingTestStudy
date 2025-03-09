const fs = require('fs') //'fs' 객체 가져오기

const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';

//input 한 번에 받기
const input = fs.readFileSync(filePath).toString().trim().split('\n');

/*
  암호는 서로 다른 L개의 알파벳 소문자들로 구성 --> 최소 한 개의 모음(a,e,i,o,u)과 최소 두 개의 자음으로 구성되어 있음
  암호에 들어간 알파벳은 오름차순 정렬되어 있을 것임 --> ex) abc는 가능성 있음, bac는 그렇지 않음
*/

