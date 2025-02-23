const fs = require('fs'); //'fs' 객체 가져오기
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';
//input 한 번에 받기
const input = fs.readFileSync(filePath).toString().split('\n');

/*
  단어 위로 아치형 곡선을 그어 같은 글자끼리(A는 A, B는 B끼리..) 쌍을 짓기로 함
  => 좋은 단어의 개수를 세보자!
  '좋은 단어'란?
  --> 곡선끼리 교차하지 않으면서 각 글자를 정확히 한 개의 다른 위치에
      있는 같은 글자와 짝 지을 수 있는 경우, 그 단어는 '좋은 단어'
  => 입력: 단어의 개수 N (1 <= N <= 100), 
          N개의 A/B로만 이루어진 단어 (단어의 길이: 2~100,000 / 모든 단어 길이의 합은 1,000,000을 넘지 않음)
  => 출력: 좋은 단어의 수 출력
*/

//입력 받기
let N = Number(input[0]);
let vocab_list = [];
for(let i = 0; i < N; i++) {
  vocab_list.push(input[i+1]);
}

/*
  Stack에다가 단어의 글자를 하나씩 집어 넣었을 때,
  짝이 지어지면 그 두 짝을 같이 pop()하면 될 듯 하다!
  --> 단어의 모든 글자들을 stack에 집어 넣었을 때..
    stack에 길이가 0이면 좋은 단어, 한 글자라도 남아 있다면 좋은 단어 아님!
  --> js에서 stack은.. push()(->배열의 맨 끝에 값을 추가), pop()(->배열의 맨 끝에 값을 제거)을 통해서 간단히 구현 가능?
*/

let stack = [];
let good_num = 0;

//vocab_list에 있는 단어들을 탐색
for(let i = 0; i < N; i++) {
  //vocab_list에 있는 단어의 길이만큼 탐색
  for(let j = 0; j < vocab_list[i].length; j++) {
    stack.push(vocab_list[i].charAt(j));
    //글자가 쌍이 지어졌다면 (쌍이 지어 졌으면 이미 전 단계에서 빼내졌을 것이므로, 무한 루프 돌 필요 X)
    if(stack.length >= 2 && stack[stack.length-1] === stack[stack.length-2]) {
      //쌍이 지어진다면, 맨 마지막꺼 2번 뺀다 (참고: js에서 push, pop은 상수 시간 걸림)
      stack.pop();
      stack.pop();
    }
  }
  //스택이 비어 있다면, 모든 글자는 쌍이 지어진 것임! (--> 좋은 단어!)
  if(stack.length === 0) {
    good_num++;
  }
  stack = []; //스택 초기화
}

//결과 출력
console.log(good_num);