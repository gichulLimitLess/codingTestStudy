const fs = require('fs'); //'fs' 객체 가져오기

//돌아가는 OS가 linux(백준)인지 아닌지 확인하는 구문
//백준 채점 시스템이 linux이기 때문에, 이와 같은 구문 필요함
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname+'/example.txt';

//__dirname+'/example.txt'를 불러와서 가공 후, input에 저장한다.
// const input = fs.readFileSync(filePath).toString().trim().split('\n');
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

//우선 N, M 입력값을 가져온다
const [N, M] = input[0].split(' ').map(Number);
let baskets = [];

//바구니 배열 만들기
for(let i = 1; i<N+1; i++)
{
  baskets.push(i);
}

//해당 과정을 M번 반복한다
for(let i = 0; i < M; i++)
{
  let [start, finish] = input[i+1].split(' ').map(Number);
  //왼쪽으로부터 start번째 바구니부터 finish번째 바구니의 순서를 역순으로 만들어 본다
  //slice() 함수 사용 (원본 배열 변하지 않음)
  let boundary = baskets.slice(start-1, finish);
  //boundary에 해당되는 애들을 뒤집는다
  let reversed_boundary = boundary.reverse();
  //뒤집은 boundary를 splice()를 통해 바구니 배열의 값을 직접 바꾼다
  baskets.splice(start-1, finish-start+1 , ...reversed_boundary);
}

//최종 결과 출력
console.log(baskets.toString().split(',').join(' '));

/*
 알아둬야 할 점
 slice(), splice() 함수 사용법을 제대로 익혀두자
*/


  