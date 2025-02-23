const fs = require('fs'); //'fs' 객체 가져오기

const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';

//N: 원을 이뤄서 앉은 사람 수
//K: 제거할 사람의 번째 수
const [N, K] = fs.readFileSync(filePath).toString().split(' ').map(Number);

//N명의 사람에 대한 정보(각 자리별로 1~N의 번호를 줄 것임)
let num_list = [];
for(let i = 0; i < N; i++) {
  num_list.push(i+1);
}

//정답 수열을 저장할 answer
let answer = [];

//내부에서 사용할 인덱스
let index = 0;

//num_list의 길이가 0보다 큰 동안에 계속..
while(num_list.length > 0) { 
  /*
    현재 배열 길이에 맞게 index를 계속 계산
    splice()로 해당 원소를 제거한 후, answer에 추가한다
  */
  index = (index + K - 1) % num_list.length;
  answer.push(num_list.splice(index, 1)[0]);
}

console.log(`<${answer.join(', ')}>`); //결과 출력
