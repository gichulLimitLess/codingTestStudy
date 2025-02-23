const fs = require('fs'); //'fs' 객체 갖고오기

//돌아가는 OS가 linux인지 아닌지 확인하는 구문
//백준 채점 시스템이 linux이기 때문에, 이와 같은 구문이 필요함
const filePath = process.platform === 'linux'? '/dev/stdin' :__dirname+'/example.txt';

//__dirname+'/input.txt'를 불러와서 가공 후, input에 저장한다.
//문자열 맨 앞뒤로 의미없이 생긴 공백을 제거하는 함수인 trim()
//우선 입력에서 3개의 눈을 뽑아내야 한다 (뽑아내서 이를 숫자로 바꿔야 한다)
const [first, second, third] = fs.readFileSync(filePath, 'utf-8').toString().trim().split(' ').map(Number);

//같은 눈이 3개가 나오면, 상금은 10,000 + (같은 눈) x 1000
if(first === second && second === third) {
  console.log(10000+(first)*1000);
}
//같은 눈이 2개만 나오면, 상금은 1,000 + (같은 눈) x 100 (조건 빼먹지 않게 유의!)
else if((first === second && second !== third) || (first === third && second !== third)) {
  console.log(1000 + (first)*100);
} else if(first !== second && second === third) {
  console.log(1000 + (second)*100);
}
//모두 다른 눈이 나오면, 상금은 (그 중 가장 큰 눈) x 100
else {
  console.log(Math.max(first, second, third) * 100);
}