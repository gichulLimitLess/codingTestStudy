const fs = require('fs') //'fs' 객체 가져오기

const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';

const [first, second] = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

const [a, b, c] = second.toString().split('').map(Number);

//우리가 세자리수 * 세자리수 곱셉 하듯이 하면 됨
let third_num = first * c;
let forth_num = first * b;
let fifth_num = first * a;
let res = third_num + forth_num*10 + fifth_num*100;

//결과 출력
console.log(third_num);
console.log(forth_num);
console.log(fifth_num);
console.log(res);