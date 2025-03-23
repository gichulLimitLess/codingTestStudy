const fs = require('fs'); 

const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';

// 한 줄 입력을 읽어와 공백을 기준으로 나누고 숫자로 변환
// const N = Number(fs.readFileSync(0, 'utf-8').toString().trim());
const input = fs.readFileSync(filePath, 'utf-8').toString().trim().split('\n');

/*
  어떤 배추에 배추흰지렁이가 한 마리라도 살고 있으면, 이 지렁이는 인접한 다른 배추로 이동 가능 -> '상하좌우'가 인접해 있는 것임
  서로 인접해 있는 배추들이 몇 군데 퍼져 있는지 조사하면 총 몇마리의 지렁이가 필요한지 알 수 있음 -> '그룹'이 몇개인지 조사하자

  (입력)
  테스트 케이스 개수: T
  배추밭의 가로 길이: M (1 <= M <= 50) / 세로 길이: N (1 <= N <= 50) / 배추가 심어져 있는 위치 개수: K (1 <= K <= 2500)
  그리고, K줄에 걸쳐 배추의 위치 X, Y가 주어짐 (두 배추의 위치가 같은 경우는 X)

  (출력)
  각 TC에 필요한 최소의 배추흰지렁이 마리 수 출력 (=== 그룹의 갯수 출력)
*/

let TC = Number(input[0]); //테스트 케이스의 갯수 입력 받기
let idx = 1;
let dy = [-1, 1, 0, 0];
let dx = [0, 0, -1, 1];
let answer_list = [];

//DFS 탐색을 위한 함수
function DFS(board, cur_y, cur_x, N, M) {
  board[cur_y][cur_x] = 0; //우선 탐색한 곳 0으로 표시 (방문했다는 표시임)

  //인접한 곳 탐색
  for(let i = 0; i < 4; i++) {
    //board 벗어나는 경우는 제외
    if(cur_y+dy[i] >= 0 && cur_y+dy[i] <= N-1 && cur_x+dx[i] >= 0 && cur_x+dx[i] <= M-1) {
      //인접한 배추를 찾았으면
      if(board[cur_y+dy[i]][cur_x+dx[i]] === 1) {
        DFS(board, cur_y+dy[i], cur_x+dx[i], N, M); //재귀 호출
      }
    }
  }
  
  //주변을 탐색 했는데, 모두가 0으로 체크되어 있다면 여기로 오게 된다 (함수 자동 종료)
}

//테스트 케이스 갯수만큼 반복
for(let i = 0; i < TC; i++) {
  let [M, N, K] = input[idx].split(' ').map(Number);
  let board = Array.from({length: N}, () => Array(M).fill(0));
  let answer = 0;

  //배추 위치 입력 받기
  for(let i = 0; i < K; i++) {
    let [x, y] = input[idx + 1].split(' ').map(Number);
    board[y][x] = 1; //해당하는 위치에 '1' 표시
    idx++; //다음 입력을 위해 계속 올려준다
  }

  //밭 전체(board)를 탐색해야 한다
  for(let i = 0; i < N; i++) {
    for(let j = 0; j < M; j++) {
      //배추가 있는 곳을 발견 한다면
      if(board[i][j] === 1) {
        DFS(board, i, j, N, M); //DFS 탐색 시작
        answer++; //배추 흰지렁이 +1
      }
    }
  }

  answer_list.push(answer); //해당 TC의 답 answer_list에 밀어 넣기
  idx++; //다음 TC를 위해 레츠고
}

//답 출력~
console.log(answer_list.join('\n'));