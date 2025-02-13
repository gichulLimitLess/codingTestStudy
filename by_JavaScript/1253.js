const fs = require('fs'); //'fs' 객체 가져오기

const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';

//input 한 번에 읽어오기
const input = fs.readFileSync(filePath).toString().split('\n');

//수의 개수(N)
let N = Number(input[0]);

//수열 num_list
let num_list = input[1].split(' ').map(Number);

//num_list 오름차순 정렬 (정렬을 해야, 크기 비교에 따라 투포인터 알고리즘 활용 가능할 듯!)
num_list.sort((a, b) => a - b); 

//쌍을 지어서 일일이 모두 검사하게 되면, 시간 초과 발생할 듯!
//투 포인터 써보자
//시작(start), 끝(end)
let start = 0;
let end = N-1;

//어떤 수가 다른 수 두 개의 합으로 나타낼 수 있는지에 대해, 기준점 설정
let pivot_num = 0;
let goodNum = 0;

//for문을 돌면서 '좋은 수'가 될 대상을 계속 바꿔주기
for(let i = 0; i<N; i++) {
  start = 0;
  end = N-1;

  pivot_num = num_list[i]; //'좋은 수'가 될 대상 설정

  //두 개의 포인터가 안 겹칠 때까지
  while(start < end)
  {
    //'좋은 수'가 될 대상이 더하는 수에 포함되면 안된다
    if(start === i) {
      start++;
      continue;
    }
    if(end === i) {
      end--;
      continue;
    }

    //둘이 더한 것이 pivot_num보다 작으면
    if(num_list[start] + num_list[end] < pivot_num) {
      start++; //작은 쪽의 수를 크게 만들어서 합을 크게 만들도록 시도해야 한다
    } else if(num_list[start] + num_list[end] === pivot_num) { //"좋은 수"를 찾았으면
      goodNum++; //좋은 수를 찾았다!
      break; //while문을 빠져 나간다
    } else { //둘이 더한 것이 pivot_num보다 크면
      end--; //큰 쪽의 수를 작게 만들어서 합을 작게 만들도록 시도해야 한다
    }
  }
}

console.log(goodNum); //결과 출력