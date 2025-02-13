const fs = require('fs'); //'fs' 객체 가져오기

const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';

//input 한 번에 읽어오기
const input = fs.readFileSync(filePath).toString().split('\n');

//수열의 크기(n), 수열(num_list), 두 수의 합(x)를 입력 받기
let n = Number(input[0]);
let num_list = input[1].split(' ').map(Number);
let x = Number(input[2]);

//오름차순으로 우선 정렬
num_list.sort((a, b) => a-b); 

//쌍을 지어서 일일이 모두 검사하게 되면, 시간 초과 발생할 듯!
//투 포인터 써보자
//시작(start), 끝(end)
let start = 0;
let end = n-1; 

let pair_count = 0;

//start부터 순회하며 두 쌍의 합을 구한다 (start의 초기 값은 0)
while(start < end) {
  if(num_list[start]+num_list[end] < x) { //둘이 더한 값이 x보다 작으면
    start++; //값을 늘려야 하니까, 시작지점을 증가시킨다
  } else if(num_list[start]+num_list[end] === x) { //둘이 더한 값이 x랑 같으면
    start++; //end를 줄여도 상관 없긴 함
    pair_count++;
  } else { //둘이 더한 값이 x보다 크면
    end--; //값을 줄여야 하니까 마지막 부분을 줄인다
  }
}

console.log(pair_count); //결과 출력


