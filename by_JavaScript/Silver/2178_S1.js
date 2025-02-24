const fs = require('fs'); //'fs' 객체 가져오기
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';

//input 한 번에 받기
const input = fs.readFileSync(filePath).toString().split('\n');

class Queue {
  //초반엔 아무것도 없으므로, items는 빈 배열, front, rear 포인터는 둘 다 0(맨 앞)을 가리킴
  items = [];
  front = 0;
  rear = 0;

  //아이템 집어 넣기
  push(item) {
    this.items.push(item);
    this.rear++;
  }

  //아이템 빼내기 (Queue니까, 맨 앞에꺼 빼내야 함)
  //맨 앞에거를 return하고, front 포인터를 +1하면, 그런 효과 생김!
  pop() {
    return this.items[this.front++];
  }

  //Queue가 비어있는지 확인
  isEmpty() {
    return this.front === this.rear;
  }

  //Queue의 현재 사이즈 구하기(rear에서 front 빼면 됨)
  size() {
    return this.rear - this.front;
  }
}

/*
  N*M 크기의 배열로 표현되는 미로 (2 <= N,M <= 100)
  --> 1: 이동할 수 있는 칸 / 0: 이동할 수 없는 칸
  Q. (1, 1)에서 출발해서 (N, M)의 위치로 이동할 때 지나야 하는 최소의 칸 수?
*/

//입력 받기
let [N, M] = input[0].split(' ').map(Number);
let board = [];
for(let i = 0; i < N; i++) {
  board.push(input[i+1].split(''));
}

/*
  가중치가 없는 최소 거리 구하기 --> 아묻따 BFS!
  BFS: Queue를 사용해야 함, js에서 Queue는 직접 구현해야 함
  인접한 곳 탐색해야 함 --> 사방 탐색 필요함 / dr, dc 배열 선언하자!
*/

let queue = new Queue();
let dr = [-1, 1, 0, 0];
let dc = [0, 0, -1, 1];

//bfs 탐색
function bfs() {
  //우린 그냥 마음속으로.. (1,1)~(N,M)을.. (0,0)~(N-1, M-1)이라고 생각하자!
  //queue에 집어 넣을 node의 형태: [x좌표, y좌표, 거리(bfs 레벨)]
  //첫 칸도 포함이니까.. 거리(bfs 레벨) 값은 1부터 시작
  queue.push([0, 0, 1])

  //Queue가 빌 때까지 계속함
  //--> 이 문제는.. 항상 도착위치로 이동할 수 있는 경우만 입력으로 주어짐
  while(!queue.isEmpty()) {
    let [r, c, distance] = queue.pop(); //queue에서 노드 하나 뽑기

    //뽑은 노드 가지고 사방 탐색
    for(let i = 0; i < 4; i++) {
      let nr = r + dr[i];
      let nc = c + dc[i];

      //(N-1, M-1), 즉 (N, M)에 인접해 있다면.. distance+1 return하고 종료
      if(nr === N-1 && nc === M-1) {
        return distance + 1;
      }

      //경계 검사
      if(nr < 0 || nr >= N || nc < 0 || nc >= M) continue;

      //탐색 중인 칸이 1인 경우에만 Queue에 집어 넣는다
      if(board[nr][nc] === '1') {
        //방문 처리 한다('1' 아니기만 하면 됨) -> 방문 처리 안하면.. 무한루프 돈다
        board[nr][nc] = '2'; 
        queue.push([nr, nc, distance+1]);
      }
    }
  }
}

//bfs 수행 후, 결과 출력
//bfs는 최소 거리를 보장
let answer = bfs();
console.log(answer);