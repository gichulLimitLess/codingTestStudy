const fs = require('fs'); 

const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';

// 한 줄 입력을 읽어와 공백을 기준으로 나누고 숫자로 변환
const [H, M, C] = fs.readFileSync(filePath, 'utf-8').trim().split(' ').map(Number);

let totalMinutes = M + C; // 현재 분 + 추가 분
let newHour = H + Math.floor(totalMinutes / 60); // 시에 추가할 값
let newMinute = totalMinutes % 60; // 60을 초과한 부분을 분으로 변환

newHour = newHour % 24; // 24시간 형식 유지

console.log(newHour, newMinute);
