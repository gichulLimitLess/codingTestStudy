const fs = require('fs'); //'fs' 객체 가져오기
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';
//input 한 번에 읽어오기
const input = fs.readFileSync(filePath).toString().split('\n');

/*
  크기가 N인 수열 A = A1, A2, ..., An에 대해.. 원소 Ai에 대해 오큰수 NGE(i)를 구하려 함
  수열 A의 크기 N (1 <= N <= 1,000,000), 수열 A의 원소 A1, A2, ..., An (1 <= Ai <= 1,000,000)
*/

let N = Number(input[0]);
let num_list = input[1].split(' ').map(Number);

/*
  오큰수 NGE(i)는.. Ai의 오른쪽에 있으면서, Ai보다 큰 수 중 가장 왼쪽에 있는 수
  이것을.. 일일이 NGR(1)부터.. NGR(N)까지 하나씩 크기 비교를 하며, Sequential Search하게 되면.. 시간 터짐
  Stack을 1개로도 충분할 듯

  우선 첫 원소 stack에 집어 넣기

  --> stack
  - 넣을 숫자 > 맨 위의 숫자: 맨 위의 숫자(Ai)에 대한 오큰수 발견!, "stack에 있는 모든 원소랑 비교하며 넣을 숫자 <= 맨 위의 숫자 될 때까지" 오큰수 뱉어내고(stack의 맨 위에 숫자에 대한 오큰수는 넣을 숫자), 넣을 숫자 stack에 push
  - 넣을 숫자 < 맨 위의 숫자: stack에 쌓아놓기
  (이에 대한 시간복잡도는.. 모든 원소에 대해 비교 연산을 한 번만 수행하므로, O(N), 매우 양호!)
  (stack에 넣을 자료는 [수열의 요소, 인덱스])
*/

//javascript에서는 간단하게 push, pop으로 stack을 사용할 수 있음
let stack = [];
let right_bigNum = new Array(N).fill(-1);

stack.push([num_list[0], 0]); //첫 원소 집어 넣기
let i = 1;


//num_list를 끝까지 보면서 수행
while(i < N) {
  //넣을 숫자 > 맨 위의 숫자 (오큰수 발견!)
  if(stack[stack.length - 1][0] < num_list[i]) {
    //stack이 비지 않고, stack의 맨 위에 있는 친구가 넣을 친구보다 작은 경우인 동안 반복
    while(stack.length !== 0 && stack[stack.length - 1][0] < num_list[i]) {
      //(stack[stack.length - 1][1])는.. stack의 맨 위에 있는 놈의 idx이니까.. 얘에 대한 오큰수를 찾았다! 하는 거다.
      right_bigNum[(stack[stack.length - 1][1])] = num_list[i];
      stack.pop();
    }
    stack.push([num_list[i], i]); //넣을 수 넣고 끝낸다
  //넣을 숫자 < 맨 위의 숫자: 오큰수 발견하지 못함, stack에 쌓아놓기
  } else if (stack[stack.length - 1][0] >= num_list[i]) {
    stack.push([num_list[i], i]); //넣을 수 넣고 끝낸다
    i++;
  }  
}

//결과 출력
console.log(right_bigNum.join(' '));
