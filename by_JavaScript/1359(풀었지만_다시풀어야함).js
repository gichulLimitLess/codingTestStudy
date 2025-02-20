const fs = require('fs'); // 'fs' 모듈 가져오기

const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';
const [N, M, K] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

// 조합 함수: C(n, r)
function combination(n, r) {
  if (r > n) return 0;
  if (r === 0 || r === n) return 1;
  // 대칭성 이용: C(n, r) = C(n, n-r)
  r = Math.min(r, n - r);
  let result = 1;
  for (let i = 1; i <= r; i++) {
    result *= (n - i + 1);
    result /= i;
  }
  return result;
}

// 전체 경우의 수: 티켓 하나를 고르는 경우의 수
const totalCombination = combination(N, M);

// 특정 경우의 수 계산:
// 고정된 티켓 A에 대해, 티켓 B가 A와 정확히 i개( i = K, K+1, ... , M) 겹치는 경우의 수는
//     C(M, i) * C(N-M, M-i)
// 따라서 티켓 B가 A와 적어도 K개 겹치는 경우의 수는
//     favorable = Σ[i=K to M] ( C(M, i) * C(N-M, M-i) )
// 당첨 확률은 favorable / C(N, M) 가 됩니다.
let favorable = 0;
for (let i = K; i <= M; i++) {
  favorable += combination(M, i) * combination(N - M, M - i);
}

const result = favorable / totalCombination;
// 결과가 정수인지 검사하여 정수면 소수점 한자리까지, 아니라면 그대로 출력
const formattedResult = Number.isInteger(result) ? result.toFixed(1) : result.toString();

console.log(formattedResult);