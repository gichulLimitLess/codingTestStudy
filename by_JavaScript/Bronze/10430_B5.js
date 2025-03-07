const fs = require('fs') //'fs' 객체 가져오기

const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';

const [A, B, C] = fs.readFileSync(filePath).toString().split(' ').map(Number);

console.log((A+B)%C);
console.log(((A%C) + (B%C))%C);
console.log((A * B)%C);
console.log(((A%C) * (B%C))%C);