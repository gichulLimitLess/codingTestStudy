const fs = require('fs') //'fs' 객체 가져오기

const filePath = process.platform === 'linux' ? '/dev/stdin' : ___dirname + '/input.txt';

const input = fs.readFileSync(filePath).toString().trim().split('\n');

//N 입력 받기
let N = Number(input[0]);

//종이 데이터 입력받기
let paper = [];

//하얀색, 파란색 종이 갯수는 바깥에서 센다
let white = 0;
let blue = 0;

//paper를 초기에 검사해야 한다
//매개 변수로는 paper
function check_Paper(paper, start_x, start_y) {
  //이미 paper의 크기가 1이라면
  if(paper.length(1)){
    if(paper[0] == '0') blue++;
    else if(paper[0] == '1') white++;
    return;
  }

  let white_count = 0;
  let blue_count = 0;

  //한 칸씩 검사한다 (paper는 무조건 정방형이므로 paper.length()(행 길이)만큼으로 자르고 평가하면 됨)
  for(let i = start_y; i<paper.length(); i++)
  {
    for(let j = start_x; j<paper[i].length(); j++)
    {
      if(paper[0] == '0') white_count++;
      else if(paper[0] == '1') blue_count++;
    }
  }
  
  //모두 같은 칸이라면
  if(white_count === 0 || blue_count === 0)
  {
    //흰색으로 가득찬 칸이면
    if(white_count === (paper.length())*2)
    {
      white++;
    }
    //파란색으로 가득찬 칸이면
    else if(blue_count === (paper.length())*2)
    {
      blue++;
    }
  }
  //다른 게 있다면, 현재 paper의 크기를 반으로 나누고 재검사 해야 한다
  else {
    let arr1 = [];
    let arr2 = [];
    let arr3 = [];
    let arr4 = [];

    //배열 나눠서 각각의 check_Paper() 함수에 넣어 주어야 한다(4번 호출)
    for(let i = start_y; i<(paper.length())/2; i++)
    {
      let arr = [];
      for(let j = start_x; j<(paper.length())/2; j++)
      {
        arr.push(paper[i][j]);
      }
      arr1[i].push(arr);
    }

    //배열 나눠서 각각의 check_Paper() 함수에 넣어 주어야 한다(4번 호출)
    for(let i = (paper.length())/2; i<paper.length(); i++)
    {
      let arr = [];
      for(let j = start_x; j<(paper.length())/2; j++)
      {
        arr.push(paper[i][j]);
      }
      arr2[i].push(arr);
    }

    //배열 나눠서 각각의 check_Paper() 함수에 넣어 주어야 한다(4번 호출)
    for(let i = (paper.length())/2; i<paper.length(); i++)
    {
      let arr = [];
      for(let j = start_x; j<(paper.length())/2; j++)
      {
        arr.push(paper[i][j]);
      }
      arr2[i].push(arr);
    }
  }

  
}

