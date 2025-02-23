const fs = require('fs'); //'fs' 객체 가져오기

const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';

//3 <= N <=5000, N은 자연수
let N = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

/*
  봉지는 3킬로그램 봉지와 5킬로그램 봉지가 있다.
  N을 5로 나누었을 때 나누어 떨어지면.. 우선 그것을 나눠야 한다
  N이 5로 안 나누어 떨어지면, 3으로 한 번씩 빼보면 될 듯
*/

let count = 0;

//N이 0보다 큰 상황동안 while문 반복
while(N > 0) {
  //N이 현재 5로 나눌 수 있다면.. 5로 나누고 clear
  //(while문 continue 및 while문 탈출 조건 충족(N==0)
  if(N % 5 === 0) {
    count += (N / 5)
    N = N - 5 * (N / 5);
    continue;
  }
  //N이 현재 5로 나눌 수 없다면, 3으로 한 번씩 빼본다
  N = N - 3;
  count++;
}

/*
  N이 0이 아닌 경우라면, 정확하게 N 킬로그램을 만들수 없는 상황
  그것은, -1을 출력해야 함
*/

if(N !== 0) {
  console.log(-1);
} else {
  console.log(count);
}