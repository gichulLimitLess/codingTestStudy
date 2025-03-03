const fs = require('fs'); //'fs' 객체 가져오기
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';
//input 한 번에 읽어오기
const input = fs.readFileSync(filePath).toString().split('\n');

/*
  상근이가 가지고 있는 숫자 카드 수 N(1 <= N <= 500,000)
  숫자 카드에 적혀 있는 수는 -1천만 이상, 1천만 이하 (같은 수 X)
  찾아야 할 수 M개
  찾아야 할 숫자들 또한 -1천만 이상, 1천만 이하
*/

//입력 받기
let N = Number(input[0]);
let card_list = input[1].split(' ').map(Number);
let M = Number(input[2]);
let find_list = input[3].split(' ').map(Number);

//정렬 시간 복잡도: O(50만 x log50만) --> 크게 문제 되지 않음
card_list.sort((a, b) => a - b);
let answer_list = new Array(M).fill(0);

/*
  card_list와 find_list를 정렬하지 않으면.. 하나를 기준잡고 Sequential Search 해야 함 --> O(50만 x 50만 = 2500억)
  위는 미친 짓이니까.. 다른 방법 생각 --> card_list를 정렬하고, find_list를 하나씩 살펴보며 이진 탐색하면.. O(50만 x log50만)
  => card_list를 정렬하고.. find_list는 정렬하면 안됨 (-> 출력값 때문에..)
*/

//이진 탐색 해야 함
function binarySearch(target) {
  let left = 0;
  let right = card_list.length - 1;

  //왼쪽이 오른쪽과 작거나 같은 동안에만
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    //찾았으면
    if(card_list[mid] === target) {
      return 1; //요소의 인덱스 반환
    } else if(card_list[mid] < target) {
      left = mid + 1; //중간 값보다 target이 큼 --> left 조정
    } else if(card_list[mid] > target) {
      right = mid - 1; //중간 값보다 target이 작음 --> right 조정
    }
  }

  //위의 while문을 거치고도 못 찾았으면, false 반환
  return 0;
}

//card_list 정렬하고, find_list의 원소 하나씩 보면서 탐색
//binarySearch()에서 원소 찾으면 1, 못 찾으면 0 반환함
for(let i = 0; i < M; i++) {
  answer_list[i] = binarySearch(find_list[i]);
}

//최종 시간 복잡도: O((50만 x log50만) + (log50만 * 50만)) = O(2(log50만*50만)) --> 통과될 듯 
console.log(answer_list.join(' '));
