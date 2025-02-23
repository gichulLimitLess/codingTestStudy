// const fs = require('fs'); //'fs' 객체 갖고오기

// //돌아가는 OS가 linux인지 아닌지 확인하는 구문
// //백준 채점 시스템이 linux이기 때문에, 이와 같은 구문이 필요함
// const filePath = process.platform === 'linux'?'/dev/stdin':__dirname+'/input.txt';

// //__dirname+'/input.txt'를 불러와서 가공 후, input에 저장한다.
// //문자열 맨 앞뒤로 의미없이 생긴 공백을 제거하는 함수인 trim()
// const input = fs.readFileSync(filePath).toString().trim().split("\n");

console.log('|\\_/|');
console.log('|q p|   /}');
console.log('( 0 )"""\\');
console.log('|"^"`    |');
console.log('||_/=\\\\__|');

/*
  [알아야 할 점]
  자바스크립트는 큰따옴표("")와 작은 따옴표('') 모두를 문자열로 인식한다
  작은따옴표와 큰 따옴표 자체를 문자열로 표시하고 싶을 땐, 해당 문자 앞에 \를 입력하면 됨 -> \', \" 이런 식으로..
  역슬래시를 출력하고 싶으면.. \\ 이렇게 입력하고! 
 */