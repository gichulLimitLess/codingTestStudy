const fs = require('fs'); //'fs' 객체 가져오기

const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';

/*
  1~N까지의 수 중에서 서로 다른 M개의 수 골라보기, 상대 측도 1~N까지의 수 중에서 서로 다른 M개의 수 고를것임
    -> 적어도 K개의 수가 같으면 당첨
  복권에 당첨될 확률?

  [설계]
  - 1~N까지의 수 중에서 서로 다른 M개의 수 고르기 → 조합!
  - 확률을 구해야 한다 → (특정 경우의 수) / (전체 경우의 수)
    - 전체 경우의 수 : (만들 수 있는 조합의 개수)^2
    - 특정 경우의 수: 적어도 K개의 수가 같으면 됨
        ⇒ k개의 수가 서로 같고.. 나머지 수(고르는 갯수는 N-k개의 수 중에서 M-k개)들은 같아도 되고 달라도 됨
        ⇒ (N개의 수 중에서 K개 수 고르는 경우의 수) x {(N-k개의 수 중에서 M-k개의 수를 고르는 모든 경우의 수)^2} 하면 되는 거 아님?
*/

//N, M, K 입력 받기
const [N, M, K] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

let combination_count = 0;
let N_K_count = 0;
let N_K_M_K_count = 0;

//1~N까지의 수 중에서 서로 다른 M개 고르기
function count_Combination(depth, start) {
  //기저 조건 도달하면, 종료해야지
  if(depth === M) {
    combination_count++; //조합 개수 ++
    return;
  }

  //원소가 무엇인지 구할 필요는 없으니, push/pop 과정은 배제한다
  for(let i = start; i <= N; i++) {
    count_Combination(depth+1, i+1); //재귀호출 해야지?
  }
}

//N개의 수 중에서 서로 다른 K개의 수 고르기
function count_N_K_count(depth, start) {
  //기저 조건 도달하면, 종료해야지
  if(depth === K) {
    N_K_count++; //특정 경우에 대한 조합 개수 ++
    return;
  }

  //원소가 무엇인지 구할 필요는 없으니, push/pop 과정은 배제한다
  for(let i = start; i <= N; i++) {
    count_N_K_count(depth+1, i+1); //재귀호출 해야지?
  }
}

//N개의 수 중에서 서로 다른 K개의 수 고르기
function count_N_K_M_K_count(depth, start) {
  //기저 조건 도달하면, 종료해야지
  if(depth === M-K) {
    N_K_M_K_count++; //특정 경우에 대한 조합 개수 ++
    return;
  }

  //원소가 무엇인지 구할 필요는 없으니, push/pop 과정은 배제한다
  for(let i = start; i <= N-K; i++) {
    count_N_K_M_K_count(depth+1, i+1); //재귀호출 해야지?
  }
}

//일단 모든 combination의 갯수를 구해야 함
count_Combination(0, 1);
count_N_K_count(0, 1);
count_N_K_M_K_count(0, 1);

let denominator = combination_count ** 2; //분모
let numerator = N_K_count * (N_K_M_K_count**2); //분자 (M이랑 K랑 같은 경우이면 combination_count)

//결과 출력 (소수점 10째자리까지 출력)
console.log((numerator / denominator));