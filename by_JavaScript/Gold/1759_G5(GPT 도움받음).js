const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [L, C] = input[0].split(' ').map(Number);
let alpha_list = input[1].split(' ').sort();
let answer = [];
let result = [];

// 모음과 자음 개수를 미리 체크
let vowels = alpha_list.filter(ch => "aeiou".includes(ch));
let consonants = alpha_list.filter(ch => !"aeiou".includes(ch));

// 자음 개수가 2개 미만이면 불가능한 경우이므로 조합 수행 X
if (consonants.length < 2) {
  console.log(""); // 아무것도 출력하지 않음
  process.exit(0);
}

// 유효성 검사 함수: 모음 1개 이상 & 자음 2개 이상 포함 여부 확인
function isValid(password) {
  let mo = 0, ja = 0;
  for (const ch of password) {
    if (vowels.includes(ch)) mo++;
    else ja++;
  }
  return mo >= 1 && ja >= 2;
}

// 조합 찾기 (모음 개수 체크 제거)
function find_PWCombi(depth, start) {
  if (depth === L) {
    if (isValid(answer)) {
      result.push(answer.join(''));
    }
    return;
  }

  for (let i = start; i < C; i++) {
    answer[depth] = alpha_list[i];
    find_PWCombi(depth + 1, i + 1);
  }
}

// 실행
find_PWCombi(0, 0);
console.log(result.join('\n'));