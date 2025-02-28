const fs = require('fs'); //'fs' 객체 가져오기
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';
//input 한 번에 읽어오기 (trim()을 하지 않으면.. 끝에 '\n'이 붙어서 들어올 수 있음!)
let exist_id = fs.readFileSync(filePath).toString().trim();

let output = exist_id + '??!';

console.log(output);