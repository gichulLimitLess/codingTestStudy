const fs = require('fs'); //'fs' 객체 가져오기
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';
//input 한 번에 받기
const input = fs.readFileSync(filePath).toString().split('\n');

/*
  - N개의 자연수 중에서 M개를 고른 수열 (-> N개의 자연수는 모두 다른 수)
  - 같은 수를 여러 번 골라도 된다. (--> "중복")
    ==> "중복순열" 구해야 함
*/

//입력 받기
let [N, M] = input[0].split(' ').map(Number);
let num_list = input[1].split(' ').map(Number);
let list = [];
let result = '';

//num_list 오름차순 정렬(숫자 오름차순 정렬을 하기 위해 조건 콜백 함수 넘김)
num_list.sort((a, b) => a-b);

//중복순열 구하자
function Permutation_withRepetition(depth) {
  //기저조건에 도달했을 경우..
  if(depth === M) {
    result += list.join(' ') + '\n'; //문자열을 한꺼번에 저장
    return;
  }

  //num_list를 인덱스 0부터 N까지 방문하면서 검사
  for(let i = 0; i < N; i++) {
    list[depth] = num_list[i];
    Permutation_withRepetition(depth+1);
  }
}

//스타트~
Permutation_withRepetition(0, 0);

/*
  일일이 기저조건에서 결괏값을 console.log()로 찍어대면 시간 초과 발생함
    --> answer라는 배열에 모아서 한 번에 출력해보자!
    --> 이렇게 긴 것을 출력할 땐, process.stdout.write() 활용하자! (개빠름)
*/
process.stdout.write(result);