const fs = require('fs'); //'fs' 객체 가져오기

const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';

//단어 읽어오기 (알파벳 별로 분리)
const S = fs.readFileSync(filePath).toString().split('');

//a~z까지의 알파벳 개수를 세기 위한 alphabet_count
let alphabet_count = Array(26).fill(0);

//'a'를 기준으로 아스키코드 값 기준으로 뺄셈
//ex) 아래의 계산 결과를 통해 'b'는 자동적으로 alphabet_count의 인덱스 1에 개수 저장이 될 것임
//뺄셈을 통해 alphabet_count 각 요소에 접근
for(let i = 0; i<S.length; i++) {
  alphabet_count[(S[i].charCodeAt())-97]++;
}

//결과 출력
console.log(alphabet_count.join(' '))