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
  --> 두 수의 차이.. 두 수 사이의 거리... 절댓값 씌우면 바로 거리 나옴 (사실.. 오름차순 정렬하면, 큰 거에서 작은 걸 뺄테니.. 절댓값 취할 필요 X)
  
  --> num_list를 정렬한 다음에.. start, finish 포인터를 각각 (시작점), (시작점+1)부터 둔다
      (정렬을 하지 않으면 모든 경우에 대해서 Sequential 서치 해야 하지만.. 정렬을 하면, 두 수 간의 "최소" 거리만 찾으면 되니까.. 투포인터로 해결 가능!) -> O(N)
  --> 투 포인터를 옮기면서 아래의 과정을 반복한다 (언제까지? start < finish && finish < N까지..)
      (모든 수 비교를 위해서.. start가 N-1보다 작은 경우도 모두 포함해야 함 / finish가 )
    => finish - start < M: 두 수 간 거리가 더 커져야 하므로 finish++
    => finish - start >= M: min 값 비교해서 갱신 / 차이를 더 줄여봐야 하므로.. start++
  --> 위의 루프가 끝났다고, 아직 모든 검사 끝난 것 X / finish가 N에 도달 했어도, start가 한참 앞에 있으면, 더 최솟값이 있을 가능성 있음
    => start 포인터가 N-1보다 작으면서 num_list[N-1] - num_list[start]가 M보다 크거나 같은 경우 동안 더 최소를 찾으러 간다
    
*/

//정렬 시간 복잡도 약 O(2,000,000) 미만
num_list.sort((a, b) => a - b);

let start = 0;
let finish = 1;
let min_val = Infinity;

//해당 while문은 finish가 N이 될 때 벗어날 것이다 (아래의 조건 식에서 start와 finish는 겹칠 일 없다)
while(start < finish && finish < N) {
  if(num_list[finish] - num_list[start] < M) {
    finish++;
  } else if(num_list[finish] - num_list[start] >= M) {
    min_val = Math.min(min_val, num_list[finish] - num_list[start]);
    start++;
    if(start === finish) finish++; //start를 증가 시켰을 때, finish랑 겹치는 경우가 생길수도 있음, 그럴 경우엔 finish도 ++
  }
}

//여기는 이미 finish 포인터가 이미 끝을 넘어선 경우라서 finish를 ++할 필요 없음
while(start < N-1 && num_list[N-1] - num_list[start] >= M) {
  min_val = Math.min(min_val, num_list[N-1] - num_list[start]);
  start++;
}

//결과 출력
console.log(min_val);