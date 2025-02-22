const fs = require('fs'); //'fs' 객체 가져오기
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';
//input 한 번에 받기
const input = fs.readFileSync(filePath).toString().split('\n');

/*
  빙산의 각 부분에 해당되는 칸의 값이 1년마다 동서남북 네 방향으로 붙어있는 
  0이 저장된 칸의 개수만큼 줄어든다 ---> 상/하/좌/우 검사 필요
  전체 배열 탐색 필수 
  => 배열 전체 탐색 도중 0이 아닌 값을 만나면 상/하/좌/우의 정보를 저장해야 함
  
  
*/

//입력 받기