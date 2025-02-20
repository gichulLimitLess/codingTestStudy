const fs = require('fs'); //'fs' 객체 가져오기

const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';

//입력받은 자연수 리스트인 num_list
let num_list = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

let length = num_list.length;
let result_list = [];

//일단 나눈 나머지 값을 다 구한다
for(let i = 0; i < length; i++) {
  result_list.push(num_list[i] % 42);
}

//Set를 생성해서 중복 제거 후, 그것의 size를 출력.. 그거시 서로 다른 나머지의 갯수일 것임
const result_Set = new Set(result_list);
console.log(result_Set.size);