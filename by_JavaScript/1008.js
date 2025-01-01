// 입력을 example.txt에 있는 데이터로 받겠다는 의미
// 백준에 제출 시에는 readFileSync 내부 값을 '/dev/stdin'으로 해야 함
// VSCode에서 실행해볼 때는 'example.txt'로 넣어 놓자!
var input = require('fs').readFileSync('example.txt').toString().split(' ');

//입력을 숫자로 변환
var numbers = input.map(Number);

//계산 결과 출력
console.log(numbers[0]/numbers[1])