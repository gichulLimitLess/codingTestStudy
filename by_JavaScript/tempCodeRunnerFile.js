const fs = require('fs'); //'fs' 객체 가져오기

const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';

//input 한 번에 입력 받기
const input = fs.readFileSync(filePath).toString().trim().split('\n');

//N은 선수의 수
let N = Number(input[0]);

//input의 첫 번째 요소 (여기선 N 들어가 있음) 삭제
input.shift();

/*
  sort() 함수를 사용하게 되면, 성의 앞글자의 알파벳에 따라 a부터 z까지 순서대로 정렬
  처음부터 끝까지 input 배열을 보며, 성의 앞글자 알파벳이 5개를 넘어가면 답으로 판정, 아니면 답이 아닌 것
  답을 저장하는 answer 배열 선언 / 성의 앞글자를 저장하는 compare_pivot / 그것의 갯수를 세는 count
*/
input.sort();

let answer = [];
let compare_pivot = 'a';
let count = 0;

for(let i = 0; i < N; i++) {
  if(input[i].charAt(0) === compare_pivot) {
    count++;
    if(count >= 5) { //성의 앞글자 알파벳이 5개를 넘어가면
      answer.push(compare_pivot);
      count = 0;
    }
  } else { //비교하는 알파벳이 현재 비교 대상의 성 앞글자와 다르면..
    compare_pivot = input[i].charAt(0); //비교하는 알파벳을 변경
    count = 0;
  }
}

//결과 출력
if(answer.length === 0) {
  console.log("PREDAJA");
} else {
  console.log(answer.join(''));
}