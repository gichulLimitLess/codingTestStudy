const fs = require('fs'); //'fs' 객체 가져오기

const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';

//input 한 번에 입력 받기
const input = fs.readFileSync(filePath).toString().trim().split('\n');

/*
  길이가 N인 컨베이어 벨트, 벨트 전체 길이는 2N (2 <= N <= 100)
  - 1~2N-1번까지의 칸은 다음 번호의 칸이 있는 위치로 이동, 2N번 칸은 1번 칸의 위치로 이동
  - i번 칸의 내구도는 Ai / 1번 칸이 있는 위치: "올리는 위치", N번 칸이 있는 위치: "내리는 위치" (1 <= Ai <= 1000)
  - 로봇을 올리는 위치에 올리거나, 로봇이 어떤 칸으로 이동하면 그 칸의 내구도는 즉시 1 감소

  컨베이어 벨트를 이용해 로봇들을 건너편으로 옮기려 할 때, 아래와 같은 일이 순서대로 일어난다.
  1. 벨트가 각 칸 위에 있는 로봇과 함께 한 칸 회전한다.
  2. 가장 먼저 벨트에 올라간 로봇부터, 벨트가 회전하는 방향으로 한 칸 이동할 수 있다면 이동, 만약 이동할 수 없다면 가만히 있는다
    1. 로봇이 이동하기 위해서는 이동하려는 칸에 로봇이 없으며, 그 칸의 내구도가 1 이상 남아 있어야 한다
  3. 올리는 위치에 있는 칸의 내구도가 0이 아니면 올리는 위치에 로봇을 올린다.
  4. 내구도가 0인 칸의 개수가 K개 이상이라면 과정으로 종료, 그렇지 않다면 1번으로 돌아간다. (1 <= K <= 2N)

  ==> 종료되었을 때, 몇 번째 단계가 진행 중이었는지 구해보자. 가장 처음 수행되는 단계는 1번째 단계.
*/

let [N, K] = input[0].split(' ').map(Number);
let beltDurability_list = input[1].split(' ').map(Number);
let belt = [];

//belt 리스트의 한 칸에는 (현재 남은 내구도, 로봇 존재 여부) 정보를 담을 것이다 
for(let i = 0; i < 2*N; i++) {
  belt.push([beltDurability_list[i], false]);
}

let durability_zero = 0;
let level = 0;

//내구도 0인 칸의 개수가 K개 이상이면 과정 종료
while(durability_zero < K) {
  level++; //단계 ++

  //✨ 1단계 -> 벨트를 오른쪽으로 회전 (unshift + pop 사용하여 성능 최적화)
  // belt.unshift(belt.pop());
  let last = belt[2 * N - 1];
  for (let i = 2 * N - 1; i > 0; i--) {
    belt[i] = belt[i - 1];
  }
  belt[0] = last;

  //✨ 회전 후, 내리는 위치(N-1)에 로봇이 있으면 즉시 내려야 한다
  if (belt[N - 1][1] === true) {
    belt[N - 1][1] = false;
  }

  //2단계 -> Belt를 N-1(내리는 위치)부터 1(시작지점)까지 역순으로 순회한다 (로봇은 N(내리는 위치)에서 무조건 내리기 때문에 N에 가장 가까운 쪽이 가장 먼저 올려진 로봇임)
  for(let i = N - 1; i > 0; i--) {
    //현재 검사하는 칸 기준 이전 칸에 로봇이 있고, 현재 칸에는 로봇이 없고, 현재 칸에 내구도가 1 이상인 경우에만 로봇이 이동해야 한다.
    if(belt[i - 1][1] === true && belt[i][1] === false && belt[i][0] >= 1) {
      belt[i - 1][1] = false; //로봇 이동 표시
      belt[i][1] = true;    //로봇 이동 표시
      belt[i][0]--; //현재 칸으로 로봇이 이동했으므로 내구도 -1
      if(belt[i][0] === 0) {
        durability_zero++;
      }
    }
  }

  //2단계 결과로 내리는 위치에 로봇이 있다면 제거
  if(belt[N - 1][1] === true) {
    belt[N - 1][1] = false;
  }

  //3단계 -> Belt의 첫 번째 칸의 내구도가 0이 아닌 경우에만 로봇을 올려야 한다 (로봇: true / 내구도 -1)
  if(belt[0][0] >= 1) {
    belt[0][1] = true;
    belt[0][0]--;

    //맨 첫번째 칸의 내구성 변화에 의해, 내구성 0인 칸이 생겼다면..
    if(belt[0][0] === 0) {
      durability_zero++;
    }
  }
}

//결과 출력
console.log(level);