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

/*
  card_list와 find_list를 정렬하지 않으면.. 하나를 기준잡고 Sequential Search 해야 함 --> O(50만 x 50만 = 2500억)
  위는 미친 짓이니까.. 다른 방법 생각 --> 정렬하면.. 두 배열을 서로 비교해서, O(50만*2)으로 끝낼 수 있음
  => 두 배열에서 포인터 하나씩 배치 (card_pointer, find_pointer) / 답변을 저장할 배열(answer_list) 선언
  => find_list의 끝을 넘어서기 전이나, card_list의 끝을 넘어서기 전까지 반복 (두 포인터 중 하나라도 배열을 넘어서면 더 이상 탐색할 필요 X)
    --> card_list에서 포인터가 가리키는 수가 find_list에서 포인터가 가리키는 수보다 작은 경우: card_pointer++
    --> card_list에서 포인터가 가리키는 수가 find_list에서 포인터가 가리키는 수와 같은 경우: answer_list의 해당하는 위치 답 1로 변경 / find_pointer++, card_pointer++
    --> card_list에서 포인터가 가리키는 수가 find_list에서 포인터가 가리키는 수보다 큰 경우: find_pointer++
*/
let card_pointer = 0;
let find_pointer = 0;
let answer_list = new Array(M).fill(0);

//정렬 시간 복잡도: O(50만 x log50만) * 2 --> 크게 문제 되지 않음
card_list.sort((a, b) => a - b);
find_list.sort((a, b) => a - b);

//정렬하면.. 두 배열을 서로 비교해서, O(50만*2)으로 끝낼 수 있음
//둘 중 하나 넘어간다고 끝 아님 (수정 필요)
while(card_pointer < N && find_pointer < N) {
  console.log("카드포인터: ", card_pointer, "파인드포인터: ", find_pointer);
  if(card_list[card_pointer] < find_list[find_pointer]) {
    card_pointer++;
  } else if(card_list[card_pointer] === find_list[find_pointer]) {
    answer_list[find_pointer] = 1;
    card_pointer++;
    find_pointer++;
  } else if(card_list[card_pointer] > find_list[find_pointer]) {
    find_pointer++;
  }
}

console.log(answer_list.join(' '));
