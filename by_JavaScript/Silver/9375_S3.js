const fs = require('fs') //'fs' 객체 가져오기
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

/*
  한 번 입었던 옷 조합은 절대 다시 입지 않는다
  --> 가진 의상들이 주어졌을 때, 알몸이 아닌 상태로 의상을 입을 수 있는 경우의 수?

  입력: 첫째 줄에 테스트 케이스 갯수 / TC의 첫째 줄에는 가진 의상 수 n(0<=n<=30)이 주어짐 / 
      다음 n개에는 의상 이름과 의상 종류가 공백으로 주어짐, 같은 종류의 의상은 하나만 입을 수 있음
    --> 모든 문자열은 1 이상 20 이하의 알파벳 소문자로 이루어져 있으며, 같은 이름을 가진 의상은 존재 X
  출력: 각 TC에 대해 해빈이가 알몸이 아닌 상태로 의상을 입을 수 있는 경우 출력

  --> 같은 이름을 가진 의상은 존재하지 X / 경우의 수 구하는거면, 각 type에 관한 옷의 갯수만 알면 되는 거 아님?
  --> 각 의상 종류에서 선택할 수 있는 경우의 수는 (해당 의상을 선택하는 경우 + 선택하지 않는 경우)
      => (각 의상 종류의 개수 + 1)을 곱하고, 알몸인(모든 의상을 선택하지 않은 경우)인 1은 중복되서 계산 됐을 테니 1 빼면 됨
*/

//입력 받기
let tc_count = Number(input[0]);
let index = 1; // 현재 읽고 있는 input의 인덱스를 추적
let answer_list = [];
for(let i = 1; i <= tc_count; i++) {
  let n = Number(input[index]);
  let clothes = {}; //key-value 관계를 맺고 있기에, 자연스레 중복 처리도 됨

  //의상 입력 받기 (list에는 type만 밀어 넣기)
  for(let j = 1; j <= n; j++) {
    let [name, type] = input[index+j].split(' ');
    //clothes object에 특정 종류에 관한 의상이 없는 경우, 새로 세팅해야 함
    if(!clothes[type]) {
      clothes[type] = 0;
    }
    clothes[type]++;
  }

  let answer = 1;

  //경우의 수 계산 (object는 length를 가져오는 속성 X)
  for(let key in clothes) {
    answer *= (clothes[key] + 1); //의상을 선택하는 경우 + 선택 X 경우
  }
  answer--; //알몸인 경우 한 번 빼줘야 한다 (위에서 해당 경우가 중복되어서 계산되었을 거임)
  answer_list.push(answer);

  //다음 테스트 케이스로 인덱스 이동
  //각 테스트 케이스마다 입력되는 줄의 개수(n)이 다르니까.. 이런 식으로 추적 관리 필요함!
  index += n+1; 
}

//결과 출력
console.log(answer_list.join('\n'));



