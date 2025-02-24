const fs = require('fs'); //'fs' 객체 가져오기
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';

//input 한 번에 받기
const input = fs.readFileSync(filePath).toString().split('\n');

/*
  상,하,좌,우에 있는 토마토는 인접해 있다고 함
  익지 않은 것들은.. 인접한 곳에 있는 익은 토마토에 의해 익게 된다
  창고에 보관된 토마토들이 며칠이 지나면 다 익게 되는데, 그 최수 일수를 알고 싶음
  1: 익은 토마토 / 0: 익지 않은 토마토 / -1: 토마토가 들어있지 않은 곳
  출력: 토마토가 모두 익을 때까지의 최소 날짜
    --> 저장될 때까지 모든 토마토가 익어있는 상태라면 0
    --> 토마토가 모두 익지 못하는 상황이라면 -1
*/

let [M, N] = input[0].split(' ').map(Number);
let box = [];
for(let i = 0; i < M; i++) {
  box.push(input[i+1].split(' ').map(Number));
}

//상,하,좌,우 체킹 필요 --> dr, dc 배열 선언
let dr = [-1, 1, 0, 0];
let dc = [0, 0, -1, 1];

//배열의 모든 칸은 한 번씩만 방문해야 함, 방문 여부 체크하는 visited 배열
let visited = Array.from({ length: M }, () => Array(N).fill(false));

/*
  box의 모든 칸을 검사할 필요가 있음
  --> 검사하다가, 1을 만날 경우, 그때부터 DFS를 조져야 할 것 같다.
  해당 칸이 -1인 경우: 검사할 필요 없음
  해당 칸이 0인 경우: 검사할 필요 없음
  해당 칸이 1인 경우: 상,하,좌,우 방향의 칸 검사 필요함 (Start 지점으로 설정한다)
    --> 인접한 곳에 익지 않은 토마토가 있는지 확인해야 함
    --> 인접한 곳에 익지 않은 토마토가 있는 경우, 0을 1로 바꿔야 함
    --> 해당 단계가 끝나면..  => BFS
      -> 한 level에서.. Queue에 있는 노드들이.. 현재 탐색중인 node (queue에서 뺄 때 time++)
*/

//box의 모든 칸 검사 시작
for(let i = 0; i < M; i++) {
  for(let j = 0; j < N; j++) {
    //방문한 곳이 아닌 칸이면서, 익은 토마토를 발견 했다면..
    if(!visited[i][j] && box[i][j] === 1) {
      
    }
  }
}

//dfs 탐색 실시()
function dfs(row, col) {
  
}

