const fs = require('fs'); //'fs' 객체 가져오기

const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';

//input 한 번에 받기
const input = fs.readFileSync(filePath).toString().split('\n');

/*
  1: 집이 있는 곳 / 0: 집이 없는 곳
  집이 연결되었다는 것 --> 상,하,좌,우로 다른 집이 있는 경우.. (대각선 방향은 X)
  입력: 지도의 크기 (5<=N<=25), 지도(0 또는 1로 이루어져 있는 정방형 배열)
  출력: 첫번째 줄엔 총 단지 수 / 각 단지 내의 집의 수를 오름차순 정렬해서 한 줄에 하나씩 출력
*/

//입력 받기
let N = Number(input[0]);
let map = [];
for(let i = 0; i < N ; i++) {
  map.push(input[i+1].split(''));
}

//방문했는지의 여부를 체크하기 위한 visited 배열 선언(->초기값은 모두 false)
let visited = Array.from({ length: N }, () => Array(N).fill(false));

//상,하,좌,우 검사해야 함 --> dr, dc 배열 선언
let dr = [-1, 1, 0, 0];
let dc = [0, 0, -1, 1];

//집의 갯수를 저장하는 count
let count_list = [];
let count = 0;

/*
  지도(map)을 전체 탐색해야 함
  전체 탐색 도중 집이 있는 곳('1')을 발견하면, 거기를 기준으로 탐색해야 함
  모든 노드를 1번만 탐색하기 때문에 (visited 배열 선언할 예정), DFS/BFS 모두 가능
  전체 맵을 반복하면서, 방문하지 않은 노드라면 그 노드부터 집인지 탐색
*/

//dfs 탐색 (단지의 갯수를 세야 하므로, count를 세서 갯수를 return 해야 함)
function dfs(row, col) {
  visited[row][col] = true;
  count++; //count 증가
  
  for(let i = 0; i < dc.length; i++) {
    let nr = row + dr[i];
    let nc = col + dc[i];

    //경계 검사를 먼저 수행
    if(nr < 0 || nr >= N || nc < 0 || nc >= N) continue;

    //방문한 적이 없는 노드이고, 인접한 노드가 집('1')이라면..
    if(!visited[nr][nc] && map[nr][nc] === '1') {
      dfs(nr, nc); //재귀 호출
    }
  }
}

//지도 탐색
for(let i = 0; i < N; i++) {
  for(let j = 0; j < N; j++) {
    //현재 보고 있는 칸에서 집이 있는 경우('1')에만 확인을 시작한다
    if(map[i][j] === '1' && !visited[i][j]) {
      dfs(i, j);
      //dfs 호출이 끝나고는, 이미 연관된 count가 저장되어 있으므로 리스트에 넣고 0으로 초기화
      count_list.push(count);
      count = 0; 
    }
  }
}

//각 단지 내의 집의 수를 오름차순으로 정렬
//유의할 점: js에서 sort()는 기본적으로 문자열 기준 정렬을 수행
//따라서, 숫자를 오름차순 정렬하고 싶을 경우, 아래와 같이 comparator를 명시해 주어야 함
//ex) "10", "2", "3" 같은 순서로 정렬될 수 있음
count_list.sort((a, b) => a - b);

//결과 출력
console.log(count_list.length);
for(let i = 0; i < count_list.length; i++){
  console.log(count_list[i]);
}
