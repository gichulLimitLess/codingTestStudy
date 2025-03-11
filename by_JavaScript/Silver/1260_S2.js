const fs = require('fs'); //'fs' 객체 가져오기
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';

//input 한 번에 받기
const input = fs.readFileSync(filePath).toString().trim().split('\n');

/*
  DFS, BFS 탐색 결과 출력
  방문할 수 있는 정점이 여러 개인 경우, 작은 것을 먼저 방문하고, 더 이상 방문할 수 없다면 종료
  정점 번호는 1~N까지임 (1 <= N <= 1000), 간선의 개수 M(1 <= M <= 10000), 탐색 시작할 정점 번호 V
  ---> 양방향 그래프임! / 대칭적으로 마킹할 필요 있음 / 그러하다...
*/

class Queue {
  constructor() {
    this.head = 0;
    this.tail = 0;
    this.items = [];
  }

  push(item) {
    this.tail++;
    this.items.push(item);
  }

  pop() {
    return this.items[this.head++];
  }

  peek() {
    return this.items[this.head];
  }

  isEmpty() {
    return this.head === this.tail;
  }
}

const [N, M, V] = input[0].split(' ').map(Number);
let adj_list = [];
//노드 번호로 그냥 바로 인덱스에 접근하려고, N+1 길이의 행렬 만듦
for(let i = 0; i <= N; i++){
  adj_list[i] = [];
}

//인접 행렬에 해당하는 값들 넣기
for(let i = 1; i <= M; i++) {
  let [s, f] = input[i].split(' ').map(Number);
  //양방향이니까, 양쪽으로 연결 되었다는 것을 표시해야 함
  adj_list[s].push(f);
  adj_list[f].push(s);
}

let visited = new Array(N+1).fill(false);
let answer = [];

//인접 행렬에서 각 node에 관한 인접 정보 오름차순 정렬...
//노드 개수(N)만큼만 수행해야 함
for(let i = 1; i <= N; i++) {
  adj_list[i].sort((a, b) => a - b);
}

//DFS (재귀로 수행)
function DFS(node) {
  //방문 했다고 표시하고, answer list에 밀어 넣기
  visited[node] = true;
  answer.push(node);
  for(let adj_node of adj_list[node]) {
    //방문하지 않은 놈만
    if(!visited[adj_node]) {
      DFS(adj_node);
    }
  }
}

//DFS 출발~
DFS(V);
console.log(answer.join(' '));

//BFS (Queue로 수행)
let queue = new Queue();
let answer2 = [];
let visited2 = new Array(N+1).fill(false);

function BFS(startNode) {
  queue.push(startNode);
  //Queue가 빌 때까지 반복
  while(!queue.isEmpty()) {
    let node = queue.pop(); //Queue에서 노드 뽑기
    if(!visited2[node]) {
      visited2[node] = true;
      answer2.push(node);
      let len = adj_list[node].length
      //뽑은 친구의 인접한 놈들을 Queue에 넣어야 한다
      for(let i = 0; i < len; i++) {
        //방문한 친구가 아닐 때만 queue에 넣는다
        if(!visited2[adj_list[node][i]]) {
          queue.push(adj_list[node][i]);
        }
      }
    }
  }
}

//BFS 출발~
BFS(V);
console.log(answer2.join(' '));