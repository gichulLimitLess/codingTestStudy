const fs = require('fs'); //'fs' 객체 가져오기
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';
//input 한 번에 받기
const input = fs.readFileSync(filePath).toString().split('\n');

//BFS 사용을 위해서.. Queue 직접 구현
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

  //비어 있는지 확인 (front랑 rear가 같으면.. 비어 있는 거임)
  isEmpty() {
    return this.front === this.rear; 
  }

  //큐의 사이즈 반환 (rear에서 front를 빼면 됨)
  size() {
    return this.rear - this.front;
  }
}

/*
  세로 R칸, 가로 C칸 ---> 좌측 상단 칸(1행 1열)에는 말이 놓여 있음 (1 <= R, C <= 20)
  새로 이동한 칸에 적혀 있는 알파벳은 지금까지 지나온 칸에 적혀 있는 알파벳과 달라야 함 (= 같은 알파벳이 적힌 칸을 두 번 지날 수 없음)
    ==> 좌측 상단에서 시작해서, 말이 최대한 몇 칸을 지날 수 있는지를 구하는 프로그램 작성 (좌측 상단의 칸도 포함)
*/

//입력 받기
let [R, C] = input[0].split(' ').map(Number);
let game_board = [];
for(let i = 0; i < R; i++) {
  game_board.push(input[i+1].split(''));
}

/*
  최소는.. BFS로 금방 찾는데, 최대는 다 찾아봐야 함. --> 시간 복잡도를 계산해봐야 할 것 같긴 한데..
  시간 제한이 2초네? --> 길게 주어져도.. 그래도 안될 듯 하긴 해. / 필요 없는 애들은 안 가보게 시켜야 할 것 같은데..?
    (-> 같은 알파벳은 갈 필요 X / 갔던 알파벳에 관한 배열도 만들어야 할 것임)
  --> 어떤 경로로 가도.. 최대 길이 배열은 26 (-> 26 넘어가면 짜르면 됨)
  --> 다른 방법을 사용하면.. 시간 더 줄일 수 있음. (비트마스킹, 메모이제이션(DP) 등..)
*/

//인접한 4칸으로의 이동 관련 문제 -> dr, dc 배열 선언!
let dr = [-1, 1, 0, 0];
let dc = [0 ,0, -1, 1];
let queue = new Queue();

//bfs 탐색을 시작한다
function bfs() {
  //맨 첫번째 칸 push (맨 첫번째 칸도 포함해야 한다)
  //queue에 들어가는 거는.. [x좌표, y좌표, bfs 레벨, trace(지나온 길)] 형태!
  // 시작점: (0,0), level=1, 초기 mask는 game_board[0][0] 알파벳의 비트가 켜진(1) 상태
  let initialTrace = 1 << (game_board[0][0].charCodeAt() - 65);
  queue.push([0, 0, 1, initialTrace]);

  // 중복 방문을 줄이기 위한 Set (r, c, mask) 조합을 문자열로 관리
  // --> 단순한 방문 여부가 아닌, 지나온 길이 같은지 아닌지도 따져야 함 (그래서, initialTrace도 포함함)
  // ---> 참고사항: key를 문자열이 아닌 숫자(비트마스킹 관점)로 관리해 보면.. 훨 빠르대
  let visited = new Set();
  // let key = `${nR},${nC},${newTrace}`;
  //---> 참고사항2: Javascript의 bitwise 연산자는 32비트 정수로 처리되므로.. << 26 연산의 결과가 32비트 범위를 넘어가서.. 제대로 식별자 기능을 못할 수 있음
  // ----> 2^26 == 67108864를 그냥 수에 곱해버린 다음에, intitalTrace를 더하는 방식으로 처리하면 해결 가능 
  //         (Javascript의 Number가 64비트 부동소수점 방식이기 때문에 위와 같은 방법은 문제 없음!)
  visited.add((0*C + 0) * 67108864 + initialTrace);

  let maxLevel = 1;

  //Queue가 빌 때까지 계속 반복
  while(!queue.isEmpty()) {
    let [r, c, level, trace] = queue.pop(); //하나 꺼내봐 일단

    //배열 길이는 알파벳 갯수인 26을 넘길 수 없음
    if(level === 26) return 26;

    //최대 level 갱신
    maxLevel = Math.max(maxLevel, level);
    
    //사방 탐색
    for(let i = 0; i < 4; i++) {
      let nR = r + dr[i];
      let nC = c + dc[i];

      //경계값 검사
      if(nR < 0 || nR >= R || nC < 0 || nC >= C) continue;

      let char = game_board[nR][nC];
      let bit = 1 << (char.charCodeAt() - 65);

      /*
        이미 이 경로에서 char를 사용했으면, skip
        bit에서 1 << (char.charCodeAt() - 65) 했으면.. 해당 알파벳을 방문했다고 표시한 꼴이다
        그것을 trace와 and 연산했을 때.. 1이 아닌 값(true로 간주됨)이 나오면.. 이미 이 경로에서 char 쓴거임 --> pass
      */
      if(trace & bit) continue;

      //여기 온 거면.. 방문 안한 알파벳을 방문한 것 --> 방문처리
      let newTrace = trace | bit;

      //이미 방문한 곳인지 visited 배열 참고
      //--> 최대를 구하기 위해 모든 곳을 탐색해야 하므로.. 단순한 방문 여부가 아닌, 지나온 길이 같은지 아닌지도 따져야 함 (얘를 문자열이 아닌, 숫자로 관리해도 될 듯)
      //--> 지나온 길이 같으면 중복체킹 되서 안 넣고, 지나온 길이 다르면 중복체킹 안되서 visited에 넣고, queue에도 넣는다
      // let key = `${nR},${nC},${newTrace}`;
      let key = (nR * C + nC) * 67108864 + newTrace;
      if (!visited.has(key)) {
        visited.add(key);
        queue.push([nR, nC, level + 1, newTrace]);
      }
    }
  }
  return maxLevel; 
}

//탐색
let answer = bfs();

//결과 출력
console.log(answer);