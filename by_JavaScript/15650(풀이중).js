const fs = require('fs'); //'fs' 객체 가져오기

const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';

//자연수 N, M 입력받기
const [N, M] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

//뽑을 숫자 리스트 만들기
let numList = [];
for(let i = 0; i < N; i++) {
  numList.push(i+1);
}

//해당 문제에선 '조합'의 개수를 구하라는 것임
function Combination(depth) {
  //숫자 리스트에서 우선 숫자를 뽑아야 함

  //뽑은 숫자가 이미 리스트에 있는 경우를 검사해야 함

  //오름차순 정렬해야 하므로.. 기준점을 잡고 끝까지 파고 들어가야 함
  
}