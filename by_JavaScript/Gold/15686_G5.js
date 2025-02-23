const fs = require('fs'); //'fs' 객체 가져오기

const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';

//input 한 번에 입력받기
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let [N, M] = input[0].split(' ').map(Number);
let city_Board = [];
let house = [];
let chicken = [];
let chicken_subset = [];
let min_chickenDistance = Infinity;
for(let i = 0; i<N; i++) {
  city_Board.push(input[i+1].split(' ').map(Number));
}

//좌표를 모두 순회하는데, 1이면 집, 2이면 치킨집이라는 것
//그것의 좌표들을 각각 house, chicken 배열에 저장(push)
for(let i = 1; i<N+1; i++) {
  for(let j = 1; j<N+1; j++) {
    //집이면
    if(city_Board[i-1][j-1] === 1) house.push([i, j]);
    //치킨집이면
    if(city_Board[i-1][j-1] === 2) chicken.push([i, j]);
  }
}

function findingMinChickenDistance(depth, len) {
  //M개의 치킨집을 모두 뽑았다면
  if(depth === M)
  {
    let sum = 0;
    let imsi = Infinity;
    /*
      house 배열과 chicken_subset 배열 가지고 치킨 거리 계산 후 누적
      house 하나씩 돌아가면서, chicken_subset에 있는 애들이랑 하나씩 비교
      가장 작은 놈으로 누적해야 함
    */
    for(let i = 0; i < house.length; i++) {
      imsi = Infinity;
      for(let j = 0; j < chicken_subset.length; j++) {
        // sum += (Math.abs(house[j][0] - chicken[i][0]) + Math.abs(house[j][1] - chicken[i][1]))
        imsi = Math.min(imsi, Math.abs(house[i][0] - chicken_subset[j][0]) + Math.abs(house[i][1] - chicken_subset[j][1]))
      }
      sum += imsi;
    }
    min_chickenDistance = Math.min(sum, min_chickenDistance); //더 작은 값으로 갱신
    //리턴
    return;
  }
  
  //for문 돌면서 치킨집 조합 만들어내기
  //치킨집의 좌표들 중에서 M개를 선택 (subset)
  for(let i = len; i < chicken.length; i++) {
    chicken_subset[depth] = chicken[i]; //현재 치킨집 추가
    findingMinChickenDistance(depth+1, i+1); //다음 단계로 진행
    chicken_subset.pop(); // 마지막 치킨집 제거(백트래킹)
  }
}

findingMinChickenDistance(0, 0); //함수 호출
console.log(min_chickenDistance); //결과 출력





