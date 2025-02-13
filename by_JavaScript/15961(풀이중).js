const fs = require('fs'); //'fs' 객체 가져오기

//슬라이딩 윈도우로 풀어도 되는데, 여기선 투 포인터로 풀어보겠음

const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';

//회전 초밥 벨트에 놓인 접시 수: N (2 <= N <= 300만)
//초밥 가짓수: d (2 <= d <= 3천)
//연속해서 먹는 접시 수: k (2 <= k <= 3천)
//쿠폰 번호: c (1 <= c <= d)

//=>손님이 먹을 수 있는 초밥 가짓수의 최댓값?
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, d, k, c] = input[0].split(' ').map(Number);

//회전 초밥 벨트에 놓인 초밥 정보 입력 받기
let plates = [];
for(let i = 0; i < N; i++) {
  plates.push(Number(input[i+1]));
}


//종류별로 먹은 초밥들의 개수를 확인
//쿠폰 번호의 최댓값이 d(d의 최댓값이 3천)이므로, 우선 3000으로 설정
//추후, 접시 번호를 인덱스로 접근할 것임
let sushi_count = new Array(3000).fill(0);

//투 포인터를 위한 start, end
let start = 0;
let end = k-1;

let kinds_max = 0; //몇 가지 종류인지 저장할 것임 (최대 종류 수 저장)

//초기 검사
for(let i = 0; i < k; i++) {
  //해당 종류를 처음 먹어 보는 거면
  if(sushi_count[plates[i]] === 0) {
    kinds_max++; //종류 수를 늘린다
  }
  sushi_count[plates[i]]++; //해당하는 초밥 종류에 대해 ++
}

//쿠폰 초밥이 sushi_count에 없으면 추가
if(sushi_count[c] === 0){
  kinds_max++;
}

let temp_kinds = kinds_max; //현재 종류 수를 kinds_max에서 우선 가져온다

//연속으로 먹는 접시 k개에서 d가지 초밥을 먹을 수 있는지 확인한다
//일일이 sub 배열 관련해서 가짓수를 체크하면 시간 초과 우려
//투 포인터 기법으로 sub 배열을 계속 확인하며 비교하는 게 나을 듯
while(start < N) { //원형 배열 한 바퀴 다 돌기 전까지

  //제거할 초밥
  let removed_sushi = plates[start];
  sushi_count[removed_sushi]--;
  if(sushi_count[removed_sushi] === 0) { //제거된 초밥은 한 개도 먹은 게 아니게 되었다면
    temp_kinds--; //temp_kinds에서 종류 수 1개 감소
  }

  //추가할 초밥 (원형 배열임을 고려)
  let added_sushi = plates[end % N]; 
  if(sushi_count[added_sushi] === 0) {
    temp_kinds++; //없는 거면 종류 수 1개 증가
  }
  sushi_count[added_sushi]++;

  //쿠폰 초밥이 sushi_count에 없으면 추가
  if(sushi_count[c] === 0){
    temp_kinds++;
  }

  kinds_max = Math.max(kinds_max, temp_kinds); //비교해서 최댓값 필요하면 갱신
  start++; //시작지점 증가
  end++; //끝지점 증가
}

console.log(kinds_max); //결과 출력