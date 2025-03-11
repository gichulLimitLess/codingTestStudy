const fs = require('fs') //'fs' 객체 가져오기

const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';

//input 한 번에 받기
const input = fs.readFileSync(filePath).toString().trim().split('\n');

/*
  암호는 서로 다른 L개의 알파벳 소문자들로 구성 --> 최소 한 개의 모음(a,e,i,o,u)과 최소 두 개의 자음으로 구성되어 있음
  암호에 들어간 알파벳은 오름차순 정렬되어 있을 것임 --> ex) abc는 가능성 있음, bac는 그렇지 않음
  조교들이 암호로 사용했을 법한 문자의 종류: C가지 / C개의 문자들이 주어졌을 때, 가능성 있는 암호들 모두 구하기
*/

const [L, C] = input[0].split(' ').map(Number);
let alphabet_list = input[1].split(' ');
let answer = [];
let result = [];

/*
  C개의 문자 중에서 L개를 뽑는 "조합" 문제 (알파벳 순서를 지켜야 하니까..?)
  --> 최소 한 개의 모음(a, e, i, o, u)을 가지고 있어야 함
  --> 최소 두 개의 자음으로 구성되어야 한다
  
  [사전식 정렬]
  --> javascript에서는.. 그냥 sort() 쓰면, 문자가 오름차순으로 정렬됨

  조합은.. 보통 재귀함수로 품
  최소 1개의 모음을 포함해야 함, 최소 2개의 모음을 포함해야 함
  --> 이걸 하나의 함수에서 처리 가능하려나? 안될 듯
      ==> 모음, 자음 따로 뽑기 해야할 듯
      ==> 큰 함수 하나에서, 서로 갯수를 조정하면서 뽑아야 할 듯
        (ex. 전체 뽑아야 할 갯수가 C, 모음 (1~C-2)개 자음 (2~C-1)개)
  --> 모음 / 자음 따로 뽑기?
*/

//사전 순으로 정렬하기
alphabet_list.sort();

let mo_cnt = 0;
let mo_list = [];
let ja_list = [];

//모음, 자음 갯수 세기
for(let c of alphabet_list) {
  if(c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u') {
    mo_list.push(c);
  } else {
    ja_list.push(c);
  }
}


//조합 찾기
function find_PWCombi(depth, start, mo_cnt) {
  //기저 조건 도달
  if(depth === L) {
    result.push(answer.join(''));
    return;
  }

  //mo_list 우선 돌아 댕기며 찾아보기
  for(let i = start; i < mo_cnt; i++) {
    answer[depth] = mo_list[i];
    find_PWCombi(depth+1, start+1, mo_cnt);
  }

  //ja_list도 돌아 댕기며 찾아 보기
  for(let i = start; i < C-mo_cnt; i++) {
    answer[depth] = ja_list[i];
    find_PWCombi(depth+1, start+1, mo_cnt);
  }
}



