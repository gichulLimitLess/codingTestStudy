/*
  NxM 크기의 정사각형 내에서 꼭짓점에 쓰여 있는 수가 모두 같은 "가장 큰" 정사각형 찾기
  (정사각형이 행, 또는 열에 평행해야 하므로, 기울어져 있는 건 Pass~)
  N과 M은 50보다 작거나 같은 자연수
  입력: N, M / N개의 줄에 수가 주어짐
  출력: 정답 정사각형의 크기
*/
const fs = require('fs'); //'fs' 객체 가져오기

const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';

//input 한 번에 입력받기
const input = fs.readFileSync(filePath).toString().trim().split('\n');

//초기 세팅
let [N, M] = input[0].split(" ").map(Number);
let rectangle = [];
for(let i = 0; i<N; i++) {
  let row = input[i+1].split('').map(Number)
  rectangle.push(row);
}

/*
  특별한 방법이 없음 -> 브루트포스 해야 함
  정사각형의 '위쪽-오른쪽-아래쪽-왼쪽' 모서리를 탐색할 것임
  정사각형의 어느 한 모서리 탐색 완료하면 그것을 정사각형의 한 변의 길이로 세팅하고, 나머지 모서리 길이 비교할 것임
  직사각형의 모서리 쪽에 도달한 것도 Detecting 해야 함 (모서리에 도달하면 짤라야지)
  나선환(Spiral) 모양으로 직사각형의 바깥쪽부터 안쪽으로 돌아가면서 확인할 것임
*/

let maxSize = 1;
let edge_length = 1;
let pivot_Number = rectangle[0][0]; //왼쪽 상단부터 탐색 시작할 것임
let checked_count = 0;
let row = 0;
let col = 0;
let direction = [[-1, 0], [1, 0], [0, -1], [0, 1]]; //상,하,좌,우 순(이동 관련)

//나머지 모서리들을 확인하는 check_otherEdges
function check_otherEdges(rectangle, row, col, direction) {
  //1. 
}

//직사각형의 모든 칸을 확인했을 때까지
while(checked_count < N*M) {
  //다음 칸의 숫자가 같으면
  if(pivot_Number === rectangle[row][col+1]) {
    edge_length++;
  } else { //다르면
    //다른 방향으로 틀면서 찾아봐야지
    if(pivot_Number )
  }
}

