const fs = require('fs'); //'fs' 객체 가져오기

const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';

//자연수 N, M 입력받기
const [N, M] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

let numList = [];

let combination = new Array(M).fill(0); //뽑아낸 조합 저장해 놓을 것임
let isSelected = new Array(N).fill(false); //numList의 각 숫자 썼는지 유무 표시

//1~N까지 자연수 리스트 numList 만들기
for(let i = 0; i < N; i++)
{
  numList.push(i+1);
}

//고른 수열은 오름차순이어야 하므로, 작은 것부터 탐색 (Bottom-up)
//재귀를 쓸거면 기저조건을 고려해야 함
function Permutation(depth) {
  //기저조건: depth가 M에 도달했을 경우(다 뽑았을 경우)
  if(depth === M) {
    console.log(combination.join(' '));
    return;
  }
  
  //numList를 순회하며 뽑을 것을 탐색한다
  for(let i = 0; i<N; i++)
  {
    //뽑을 것이 이미 뽑힌 것인지부터 검사하고, 뽑혔으면 넘긴다
    if(isSelected[i] == true) continue;
    
    //중복이 아니면 썼다고 표시하고, 이를 combination의 해당하는 위치에 집어 넣는다
    isSelected[i] = true;

    
    if(i == 0) { //맨 처음은 무조건 삽입
      combination[depth] = numList[i];
    } else if(i > 0 && combination[depth-1] < numList[i]) { //고른 숫자가 오름차순 수열을 만들지 못하는 경우도 제껴야 한다
      combination[depth] = numList[i];
    } else { //오름차순을 못 만들면
      continue;
    }

    //다음 자리에 대해서 뽑아내러 들어간다(재귀 호출)
    Permutation(depth + 1);

    //함수를 끝내고 나왔을 경우엔, 해당하는 것은 추후 탐색을 위해 안쓴다고 다시 표시
    isSelected[i] = false;
  }
}

//순열 함수 수행
Permutation(0);