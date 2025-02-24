const fs = require('fs'); //'fs' 객체 가져오기
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';
//input 한 번에 받기
const input = fs.readFileSync(filePath).toString().split('\n');

//Queue 직접 구현
class Queue {
  items = [];
  front = 0;
  rear = 0;

  //아이템 삽입
  push(item) {
    this.items.push(item);
    this.rear++;
  }

  //아이템 꺼내기
  pop() {
    return this.items[this.front++];
  }

  //비어 있는지 확인
  isEmpty() {
    return this.front === this.rear;
  }

  //맨 앞에 원소 확인
  check_Head() {
    return this.items[this.front];
  }

  //큐 사이즈 반환
  size() {
    return this.rear - this.front;
  }
}

/*
  [맵 요소]
  => .: 비어있는 곳 / *: 물이 차 있는 곳 / X: 돌 / D: 비버 굴 / S: 고슴도치
  
  [유의점]
  => 고슴도치는 현재 있는 칸과 인접한 네 칸(상,하,좌,우) 중 하나로 이동할 수 있음 / 물도 마찬가지
  => 물과 고슴도치는 돌을 통과할 수 없음
  => 고슴도치는 물이 찰 예정인 칸으로 이동할 수 없음 (= 다음 시간에 물이 찰 예정인 칸으로 고슴도치는 이동 X)

  구해야 할 것: 고슴도치가 안전하게 비버의 굴로 이동하기 위해 필요한 최소 시간?
*/

//입력 받기
let [R, C] = input[0].split(' ').map(Number);
let game_map = [];
for(let i = 0; i < R; i++) {
  game_map.push(input[i+1].split(''));
}

//사방 탐색을 위해 dr, dc 배열 선언
let dr = [-1, 1, 0, 0];
let dc = [0, 0, -1, 1];
// 큐 초기화: 각 노드는 [타입, row, col, time]의 형태임!
let queue = new Queue();

/*
  (우선, 물이 있는 곳(*)과 고슴도치가 있는 곳(S)을 찾아서, 스타트를 끊어야 한다)
  -> Queue가 빌 때까지 아래 과정을 반복한다 (Queue는 1개를 사용한다)
    => 물이 있는 곳(*), 고슴도치가 있는 곳(S)으로부터 상/하/좌/우 탐색 시작 (-> 점점 넓혀가는 느낌.. BFS 사용해야 함!)
    => 돌(X)이 있는 경우, 그 칸은 탐색할 수 없다 (=Queue에 집어 넣으면 안된다)
    => 고슴도치가 상/하/좌/우를 탐색할 때, 다음 시간에 그 칸에 물이 들어오면, Queue에 집어 넣으면 안된다!
      --> 이거를.. 그냥 물의 다음 위치부터 Queue에 집어 넣고, game_map을 바꾸면 되는 거 아님?
    => Queue에 넣을 때, time 값도 같이 넣어주면.. time 값에 접근하기 매우 쉬워짐 (사방 탐색 후 queue에 넣을 때, time+1 하면 시간 분석하기 쉬움)
    => 고슴도치 사방 탐색 시에, 인접한 곳에 비버 굴(D)가 있다면, 바로 time+1 출력하고 끝내면 되는 거 아님?
  -> Queue가 빌 때까지 위 반복문에서 return 값이 없다면, 갈 방법이 없는 거니까 "KAKTUS" return 하면 됨
*/

//고슴도치는 한 마리, 물의 시작 지점은 여러 개일 수 있음
let water_startPoints = [];
let gosumdochi_startPoint;

//보드 탐색하며 시작 지점 찾기
for(let i = 0; i < R; i++){
  for(let j = 0; j < C; j++){
    //물의 출발 지점을 찾았다면
    if(game_map[i][j] === '*') {
      water_startPoints.push(['*', i, j, 0]);
    }
    
    //고슴도치 출발 지점을 찾았다면
    if(game_map[i][j] === 'S') {
      gosumdochi_startPoint = ['S', i, j, 0];
    }
  }
}

//bfs 탐색
function bfs() {
  //Queue가 비어버릴 때까지 반복
  while(!queue.isEmpty()) {
    let [type, r, c, time] = queue.pop();
    
    //사방 검사
    for(let i = 0; i < 4; i++) {
      let nR = r + dr[i];
      let nC = c + dc[i];

      //경계 검사
      if(nR < 0 || nR >= R || nC < 0 || nC >= C) continue;

      //아래의 if-else 문은.. switch-case로도 바꿀 수 있을 듯! (switch-case가 좀 더 빠름)
      if(type === '*') {
        //물은 빈칸('.')으로만 뻗어 나갈 수 있음 (D나 X, S가 있는 곳으론 갈 수 없음)
        if(game_map[nR][nC] === '.') {
          game_map[nR][nC] = '*';
          queue.push(['*', nR, nC, time + 1]);
        } 
      } else if(type === 'S') {
        //고슴도치는 빈칸('.') 또는 비버 굴('D')로만 뻗어 나갈 수 있음
        //인접한 곳에 비버 굴이 있다면, 바로 time+1 반환하면 됨
        if(game_map[nR][nC] === 'D') {
          return time+1;
        }
        if(game_map[nR][nC] === '.') {
          game_map[nR][nC] = 'S';
          queue.push(['S', nR, nC, time + 1]);
        }
      }
    }
  }

  //못 찾았다면 KAKTUS 리턴
  return "KAKTUS";
}

//큐에는 물부터 넣는다 (물부터 탐색해야 함)
//전역 큐에 물의 모든 시작 지점과, 고슴도치 시작지점을 넣어 주어야 한다.
for (let w_point of water_startPoints) {
  queue.push(w_point);
}
queue.push(gosumdochi_startPoint);


//bfs 탐색
answer = bfs();

//결과 출력
console.log(answer);