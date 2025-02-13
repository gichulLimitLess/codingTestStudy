const fs = require('fs'); //'fs' 객체 가져오기

const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';

//자연수 N, M 입력받기
const [N, M] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

//뽑을 숫자 리스트 만들기
let numList = [];
let combination = new Array(M).fill(0); //출력할 조합들을 저장할 것임
let isSelected = new Array(M).fill(false); //모두 false로 초기화(중복 검사를 위함)

for(let i = 0; i < N; i++) {
  numList.push(i+1);
}

//해당 문제에선 '조합'의 개수를 구하라는 것임
function Combination(depth) {
  //기저조건: depth가 M에 도달했으면 조합 결과 출력하고 함수 종료
  if(depth === M) {
    console.log(combination.toString().split(',').join(' '));
    return;
  }
  
  //숫자 리스트에서 우선 숫자를 뽑아야 함
  //for문을 순회하면서 하나씩 뽑아본다
  for(let i = 0; i<N; i++) {
    //우선 선택되었는지 검사한다
    if(isSelected[i] === true) continue;

    //오름차순 정렬해야 하므로, 이전 칸보다 현재 칸의 값이 커야 한다
    if(depth > 0) {
      if(combination[depth-1] < numList[i]) {
        combination[depth] = numList[i];
        isSelected[i] = true;
      } else { //해당하지 않으면 그냥 continue 해야 한다
        continue;
      }
    } else { //depth가 0인 경우에는 따로 조건 검사해줄 필요 없다 (뽑아 놓은 게 없으니까)
      combination[depth] = numList[i]
      isSelected[i] = true;
    }

    //끝까지 파고 들어가야 함
    Combination(depth+1);

    //다시 안 쓰는 걸로 표기
    isSelected[i] = false;
  }
}

Combination(0); //맨 첫번째 칸부터 시작