const fs = require('fs'); //'fs' 객체 갖고오기

//돌아가는 OS가 linux인지 아닌지 확인하는 구문
//백준 채점 시스템이 linux이기 때문에, 이와 같은 구문이 필요함
const filePath = process.platform === 'linux'? '/dev/stdin' :__dirname+'/example.txt';

//__dirname+'/input.txt'를 불러와서 가공 후, input에 저장한다.
//문자열 맨 앞뒤로 의미없이 생긴 공백을 제거하는 함수인 trim()
//N 입력 받기
const N = Number(fs.readFileSync(filePath, 'utf-8').toString().trim());

//첫째 줄부터 N번째 줄까지 차례대로 별을 출력한다
for(let i = 0; i < N; i++)
{
  let line = [];
  //각 줄에서 별의 개수는 그 줄의 번째 수임
  for(let j = 0; j<=i; j++)
  {
    line.push('*'); //하나씩 밀어 넣는다
  }
  console.log(line.toString().split(',').join("")); //console.log()는 줄바꿈이 자동으로 되니까, 이런 방식으로 (배열을 string으로 변환하는 toString(), 쉼표를 없애기 위한 테크닉 포함)
}