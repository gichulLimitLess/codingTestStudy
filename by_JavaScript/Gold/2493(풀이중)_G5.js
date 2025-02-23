const fs = require('fs'); //'fs' 객체 가져오기

const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';

//input 한 번에 받기
const input = fs.readFileSync(filePath).toString().split('\n');

//탑의 수를 나타내는 정수 N
let N = input[0];

//N개의 탑들에 대한 정보가 담긴 tower_list
let tower_list = input[1].split(' ').map(Number);

