const fs = require('fs'); //'fs' 객체 가져오기

const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';

//input 한 번에 입력 받기
// const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
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

for(let i = 0; i < 2*N; i++) {
  //belt 리스트의 한 칸에는 (현재 위치, 현재 남은 내구도, 로봇 존재 여부) 정보를 담을 것이다 
  belt.push([i+1, beltDurability_list[i], false]);
}

let durability_zero = 0; //내구도 0인 칸의 개수를 셀 것이다

//내구도 0인 칸의 개수가 K개 이상이면 과정 종료
while(durability_zero <= K) {

  //1단계
  for(let i = 0; i < 2*N; i++) {
    //현재 위치가 2N을 넘어 가신다면, 1로 다시 빠꾸쳐야 한다
    if(belt[i][0] + 1 > 2*N) {
      belt[i][0] = 1;
    } else { //아니라면 그냥 +1씩 한다
      belt[i][0] += 1;
    }
  }

  //2단계 가기 전에, 1단계의 결과로 N이 로봇이 있다면 즉시 내린다
  

  //2단계
  /*
    Belt를 N부터 1까지 역순으로 순회한다 (로봇은 N(내리는 위치)에서 무조건 내리기 때문에 N에 가장 가까운 쪽이 가장 먼저 올려진 로봇임)
  */
  for(let i = N; i >= 1; i--) {
    //해당 칸에 
    if(belt[i][2] === true) {

    }
  }
  
  //3단계

}