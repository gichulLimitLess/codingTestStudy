const fs = require('fs') //'fs' 객체 가져오기

const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';

const input = fs.readFileSync(filePath).toString().trim().split('\n');

/*
  컴퓨터가 네트워크 상으로 연결되어 있다면, 모두 바이러스에 감염됨! --> 1번 컴퓨터랑 연결되어 있는 애들 세면 됨
  0 < 컴퓨터의 수 <= 100
*/

let pc_cnt = Number(input[0]); //--> 컴퓨터의 수
let pair_cnt = Number(input[1]); //--> 네트워크 상에 연결되어 있는 컴퓨터의 쌍의 수

//어차피 pc_cnt가 100밖에 안되서, 커봤자 100*100 인접 행렬 나옴 
// --> 4byte * 100 * 100 = 40000bytes = 40KB (메모리 초과 X)
let adj_matrix = new Array(pc_cnt); //인접 행렬
for(let i = 0; i < pc_cnt; i++) {
  adj_matrix[i] = new Array(pc_cnt).fill(0);
}

//쌍의 갯수만큼 인접 행렬에 원소 채우기 대작전
//--> 무방향 그래프인 경우, 반드시 한 쌍에 대해 서로 연관 되어 있다고 표시해야 한다. (대각선을 기준으로 대칭을 이뤄야 함)
for(let i = 0; i < pair_cnt; i++) {
  let adj_pair = input[i+2].split(' ').map(Number);
  adj_matrix[adj_pair[0]-1][adj_pair[1]-1] = 1;
  adj_matrix[adj_pair[1]-1][adj_pair[0]-1] = 1;
}

let visited = new Array(pc_cnt).fill(false); //방문 췤 배열 선언
let cnt = 0;

//입력 받기 위에서 끝났고, 이제 DFS 탐색 출발
function DFS(current) {
  visited[current] = true;

  //현재 노드에 인접한 모든 노드에 대해 방문 시도
  for(let node = 0; node < pc_cnt; node++) {
    if(!visited[node] && adj_matrix[current][node] === 1) {
      cnt++;
      DFS(node); //재귀 호출
    }
  }
}

//1번 컴퓨터(0)부터 출발 후, 결과 출력
DFS(0);
console.log(cnt);