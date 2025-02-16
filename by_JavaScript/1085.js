const fs = require('fs'); //'fs' 객체 가져오기

const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';

//input 입력 받아서, 해당하는 값에 각각 넣는다
//(x,y): 현수가 지금 있는 위치 / (w, h): 직사각형의 오른쪽 위 꼭짓점
const [x, y, w, h] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

//직사각형의 경계선 어디든 가면 됨
//직사각형의 상,하,좌,우 꼭짓점까지 가는 값 4개를 비교해서 가장 작은 값을 도출하면 됨
//순서는 상,하,좌,우의 경계선까지 가는 거리 
console.log(Math.min(h-y, y, x, w-x));