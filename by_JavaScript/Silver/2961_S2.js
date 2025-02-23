const fs = require('fs'); //'fs' 객체 가져오기

const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';

//input 한 번에 입력받기
const input = fs.readFileSync(filePath).toString().trim().split('\n');


let N = Number(input[0]); //재료의 개수 N
let minDiffValue = Infinity;


//각 재료의 신맛[0], 쓴맛[1]을 모두 저장한 material_list
let material_list = [];

//N개의 줄에 걸쳐서 재료의 신맛, 쓴맛이 공백으로 구분되어 주어짐 (그것을 입력 받음)
for(let i = 0; i < N; i++) {
  material_list[i] = input[i+1].split(' ').map(Number);
}

let subset = []; //부분집합 저장을 위함

/*
  N은 1보다 크고 10보다 작은 자연수
  크기가 N보다 작거나 같은 subset(부분집합)은 모두 비교 대상! 그러니, 모두 찾아봐야 한다.
  각 크기에 대해서 subset을 모두 찾고, 모든 조합에 대해서 신맛과 쓴맛의 차이가 가장 작은 요리의 차이를 출력해야 함
*/

function making_subset(depth, len) {
  //모든 원소에 대해서 선택 or 비선택을 통해 subset을 만들기 때문에 
  //depth가 N이 됐을 때 1개의 subset이 완성됨!
  if(depth === N) {
    //빈 것에 대해선 pass
    if(subset.length === 0) {
      return;
    }
    let sour = 1; //곱하니까 초기값을 0으로 잡아버리면 안된다
    let bitter = 0;
    //만들어진 subset을 바탕으로 신맛[0], 쓴맛[1]의 크기를 각각 모두 더한 후, 둘의 차이의 절댓값을 도출
    for(let i = 0; i<subset.length; i++) {
      sour *= subset[i][0];
      bitter += subset[i][1];
    }
    //최솟값과 subset 배열 갱신 후 리턴
    minDiffValue = Math.min(minDiffValue, Math.abs(sour-bitter));
    return;
  }
  //원소 선택하지 않음
  making_subset(depth+1, len);

  //원소 선택
  subset.push(material_list[depth]);
  making_subset(depth+1, len+1);
  subset.pop(); //선택했던 원소를 제거해서 원래 상태로 복원시킨다
}

//레츠고
making_subset(0, 0);
console.log(minDiffValue);