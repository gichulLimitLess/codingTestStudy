const fs = require('fs'); //'fs' 객체 가져오기

const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';

//자연수 N, M 입력 받기
const [N, M] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

let numList = []; //숫자들 저장할 것임

//1부터 N까지의 자연수 numList에 저장
for(let i = 0; i<N; i++)
{
  numList.push(i+1); 
}

let combination = new Array(M).fill(0); //출력할 조합들을 저장할 것임
let isSelected = new Array(M).fill(false); //모두 false로 초기화(중복 검사를 위함)

//1부터 N까지 자연수 중에서 중복 없이 M개를 고른 수열 출력해야 함 (nPm)
function permutation(depth) {
  
  if(depth == M) { //M개를 이미 뽑았다면 (기저조건)
    console.log(combination.toString().split(',').join(' '));
    return; //함수 종료
  }

  //for문을 돌면서 조합 탐색
  for(let i = 0; i < N; i++)
  {
    if(isSelected[i] === true) continue; //이미 고른 거라면 제껴야함
    isSelected[i] = true; //우선 선택됐다고 표시
    combination[depth] = numList[i] //그 숫자를 골라서 combination에 해당하는 곳에 넣는다

    permutation(depth+1); //재귀 호출을 통해 다시 간다
    isSelected[i] = false; //다른 조합을 위해서 다시 false로 설정
  }
}

//순열 함수 시작
permutation(0);