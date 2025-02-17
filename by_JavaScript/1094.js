/*
  길이가 64cm인 막대 -> 원래 있던 막대 자른 다음에, 풀로 붙여서 Xcm인 막대 만들려 함
  1. 처음엔 64cm 막대 하나만 가지고 있음, 합이 X보다 크면 아래의 과정 반복
    => 가지고 있는 막대 중 길이가 가장 짧은 것을 절반으로 자른다.
    => 만약, 위에서 자른 막대의 절반 중 하나를 버리고, 남아있는 막대의 길이의 합이 X보다
       크거나 같다면, 위에서 자른 막대의 절반 중 하나를 버린다
  2. 이제, 남아있는 모든 막대를 풀로 붙여서 Xcm를 만든다
  
  -> X가 주어졌을 때, 몇 개의 막대를 풀로 붙여서 Xcm를 만들 수 있는지 구해라
*/

const fs = require('fs'); //'fs' 객체 가져오기

const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';

//X 입력 받기 (1 <= X <= 64, X는 자연수)
const X = Number(fs.readFileSync(filePath).toString());

let stick_len_total = 64; //가지고 있는 막대 길이의 합을 저장할 것임
let now_shortest_len = stick_len_total; //현재 가장 짧은 막대는 초반엔 64로 초기화
let stick_count = 1; //막대 갯수

//가지고 있는 막대 길이의 합이 X보다 큰 동안 반복
while(stick_len_total > X) {
  //위에서 자른 막대의 절반 중 하나를 버리고 남아있는 막대의 길이의 합이 X보다 크거나 같다면
  if(stick_len_total - (now_shortest_len >> 1) >= X){
    stick_len_total = stick_len_total - (now_shortest_len >> 1); //절반 중 하나를 버린다 (버리기 때문에, 막대의 갯수 증가 X)
    now_shortest_len = now_shortest_len >> 1; //가장 짧은 것도 갱신 해야겠지
  } else { //X보다 작으면 
    //총합 길이(stick_len_total)은 바뀌면 안됨! 짜르기만 했잖아..
    now_shortest_len = now_shortest_len >> 1; //가장 짧은 막대 길이 갱신
    stick_count++; //막대의 갯수 +1
  }
}

console.log(stick_count);