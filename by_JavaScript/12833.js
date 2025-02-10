// 입력을 example.txt에 있는 데이터로 받겠다는 의미
// 백준에 제출 시에는 readFileSync 내부 값을 '/dev/stdin'으로 해야 함
// VSCode에서 실행해볼 때는 'example.txt'로 넣어 놓자!
var input = require('fs').readFileSync('example.txt').toString().split(' ');

//입력을 숫자로 변환(첫번째 원소: A, 두번째 원소: B, 세번째 원소: C)
var [A, B, C] = input.map(Number);

//XOR 연산의 가장 큰 특징은, A^B^B=A, 즉, B를 짝수번 XOR 하면, 자기 자신으로 돌아오고, 
//그 소리는, 홀수 번 연산하면 그냥 한 번 계산한 결과랑 같다는 것이다.
if(C % 2 == 0)
{
  console.log(A);
}
else if(C%2 == 1)
{
  console.log(A^B);
}