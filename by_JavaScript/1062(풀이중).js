const fs = require('fs'); //'fs' 객체 가져오기

const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';

/*
  K개의 글자를 가르칠 시간 밖에 없음, 가르치고 나서 학생들은 그 K개의 글자로만 이루어진 단어만을 읽을 수 있음
  남극언어의 모든 단어는 "anta"로 시작, "tica"로 끝남 / 남극언어의 단어는 N개밖에 없다고 가정 
  (단어들의 길이는 8보다 크거나 같고, 15보다 작거나 같음)
  --> 학생들이 읽을 수 있는 단어의 최댓값 구하기

  k는 사실.. 최소 5 이상이어야 함 -> 왜냐면.. 단어의 시작과 끝에 5개의 알파벳을 못 읽으면, 단어 못 읽잖아?
  k >= 5일 때랑, k < 5일 때의 상황을 나눠야 할 듯 (k < 5이면, 아무것도 못읽음 ==> 0)
*/

//입력
//단어의 개수 N, 가르칠 글자 K (N은 50보다 작거나 같은 자연수 / K는 26보다 작거나 같은 자연수 또는 0)
const input = fs.readFileSync(filePath).toString().trim().split('\n');
let [N, K] = input[0].split(' ').map(Number);
let words = [];
for(let i = 0; i < N; i++) {
  words.push(input[i+1]);
}

//배운 문자들 리스트를 비트마스크로 만들어줌
let learned_Letters = 0b0;
learned_Letters |= 1 << 'a' - 'a';
learned_Letters |= 1 << 'c' - 'a';
learned_Letters |= 1 << 'i' - 'a';
learned_Letters |= 1 << 'n' - 'a';
learned_Letters |= 1 << 't' - 'a';


function combination(c, mask, count) {
  if(count === K) { //가르칠 글자 다 가르쳤으면
    
  } 
}

function check(mask) {

}





//알파벳을 배웠는지에 대한 check 배열을 선언해도 된다. (boolean 배열 또는.. 비트마스크 하던지..)
// int bitMask = 00000000000000000000000000;
// letters |= 1 << 'a' - 'a';
// letters |= 1 << 'c' - 'a';
// letters |= 1 << 't' - 'a';
// letters |= 1 << 'i' - 'a';
// letters |= 1 << 'n' - 'a';


// function find_AlphabetCombi(depth, length) {
//   //기저 조건(부분 집합은 이때 비로소 1개 만들어짐!)
//   if(depth === N) {
//     // numbers.slice(0, len)를 이용해 현재 부분집합을 활용할 수 있음
//     console.log(numbers.slice(0, length));
//     return;
//   }

//   // 원소를 선택하지 않는 경우
//   find_AlphabetCombi(depth + 1, length);

//   // 원소 선택, 현재 원소를 numbers 배열의 len 인덱스에 저장
//   numbers[length] = input[depth];
//   find_AlphabetCombi(depth + 1, length + 1);
// }


// //k >= 5일 때 수행해야 할 프로세스를 모아둔 find_CanReadMaxVal()
// function find_CanReadMaxVal() {
//   for(let i = 0; i < N; i++) {
//     //문자열의 인덱스 4부터 끝에서 4번째 인덱스 전까지의 부분 문자열 반환
//     //앞뒤는 필요없기 때문
//     vocab_list.push(input[i+1].slice(4, -4));
//   }

//   //문자열의 길이 순으로 오름차순 배치
//   vocab_list.sort((a, b) => a.length - b.length);
//   console.log(vocab_list);
  
//   //앞뒤 단어를 읽을 때 무조건 사용되어야 하는 5개는 기본으로 넣어두기
//   let possible_alphabet = ['a', 'n', 't', 'i', 'c'];

//   /* 
//     짧은 문자열부터, 그 다음으로 짧은 문자열의 부분집합인지 점검
//     부분집합이 아닐 
//   */
// }

// //2가지 경우와 관련해서 나누어 수행
// if(K < 5) {
//   console.log(0);
// } else if(K >= 5) { 
//   find_CanReadMaxVal();
// }




