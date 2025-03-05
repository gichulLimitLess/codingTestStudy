const fs = require('fs'); //'fs' 객체 가져오기

const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';

const y = Number(fs.readFileSync(filePath).toString());

//결과 바로 그냥 출력해 버리기~
console.log(y-543);