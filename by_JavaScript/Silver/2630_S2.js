const fs = require('fs') //'fs' 객체 가져오기

const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';

const input = fs.readFileSync(filePath).toString().trim().split('\n');

//N 입력 받기
let N = Number(input[0]);

//종이 데이터 입력받기
let paper = [];

//하얀색, 파란색 종이 갯수는 바깥에서 센다
let white = 0;
let blue = 0;

for(let i = 0; i<N; i++) {
  paper.push(input[i+1].split(' '));
}

//paper를 초기에 검사해야 한다
//매개 변수로는 paper
function check_Paper(start_x, start_y, end_x, end_y) {
  // 영역의 한 변의 길이 (end_x, end_y도 값은 같을 것임)
  let size = end_x - start_x;

  //이미 paper의 크기가 1이라면
  if(size === 1){
    if(paper[start_y][start_x] === '0') white++;
    else if(paper[start_y][start_x] === '1') blue++;
    return;
  }

  let white_count = 0;
  let blue_count = 0;

  //한 칸씩 검사한다 (paper는 무조건 정방형이므로 paper.length()(행 길이)만큼으로 자르고 평가하면 됨)
  for(let i = start_y; i< end_y; i++)
  {
    for(let j = start_x; j<end_x; j++)
    {
      if(paper[i][j] === '0') white_count++;
      else if(paper[i][j] === '1') blue_count++;
    }
  }
  
  //모두 같은 칸이라면
  if(white_count === size * size)
  {
    white++;
    return;
  }

  if(blue_count === size * size)
  {
    blue++;
    return;
  }
  /*
    다른 게 있다면, 현재 paper의 크기를 반으로 나누고 재검사 해야 한다
    분할 정복 --> 재귀 호출 4개의 섹터로 나눠서 해봐?
  */
  let mid_x = start_x + size / 2;
  let mid_y = start_y + size / 2;
  
  check_Paper(start_x, start_y, mid_x, mid_y);       // 왼쪽 위
  check_Paper(mid_x, start_y, end_x, mid_y);           // 오른쪽 위
  check_Paper(start_x, mid_y, mid_x, end_y);           // 왼쪽 아래
  check_Paper(mid_x, mid_y, end_x, end_y);             // 오른쪽 아래
}

check_Paper(0,0,N,N);
console.log(white);
console.log(blue);