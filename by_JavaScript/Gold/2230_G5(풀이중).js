const fs = require('fs'); //'fs' 객체 가져오기
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';
//input 한 번에 읽어오기
const input = fs.readFileSync(filePath).toString().split('\n');

//입력 받기
let [N, M] = input[0].split(' ').map(Number);
let num_list = [];
for(let i = 0; i < N; i++) {
  num_list.push(Number(input[i+1]));
}

/*
  1 <= N <= 100,000 / 0 <= M <= 2,000,000,000 / 0 <= |A[i]| <= 1,000,000,000
  --> 수열 A[i]의 원소는 음수가 될 수도 있다.
  --> 두 수를 골랐을 때, 그 차이가 M 이상이 되는 경우들 중, 가장 작은 차이(min_val)를 출력
  --> 두 수의 차이.. 두 수 사이의 거리... 절댓값 씌우면 바로 거리 나옴
  
  --> num_list를 정렬한 다음에.. start, finish 포인터를 각각 (시작점), (시작점+1)부터 둔다
  --> 투 포인터를 옮기면서 아래의 과정을 반복한다 (언제까지? start < finish && finish <= N 까지..)
    => finish - start < M: 두 수 간 거리가 더 커져야 하므로 finish++
    => finish - start >= M: min 값 비교해서 갱신 / 차이를 더 줄여봐야 하므로.. start++
*/

//정렬 시간 복잡도 약 O(2,000,000) 미만
num_list.sort();

let start = 0;
let finish = 1;
let min_val = Infinity;

while(start < finish && finish < N) {
  if(num_list[finish] - num_list[start] < M) {
    finish++;
  } else if(num_list[finish] - num_list[start] >= M) {
    min_val = Math.min(min_val, num_list[finish] - num_list[start]);
    start++;
  }
}

//결과 출력
console.log(min_val);


