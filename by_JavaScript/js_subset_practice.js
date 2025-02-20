const input = [3,4,5];
const N = input.length;
let numbers = new Array(N); // 최대 크기 N의 배열
let totalCnt = 0;

function subset(depth, len) {
  if (depth === N) {
    totalCnt++;
    // numbers.slice(0, len)를 이용해 현재 부분집합을 활용할 수 있음
    console.log(numbers.slice(0, len));
    return;
  }

  // 원소를 선택하지 않는 경우
  subset(depth + 1, len);

  // 원소 선택: 현재 원소를 numbers 배열의 len 인덱스에 저장
  numbers[len] = input[depth];
  subset(depth + 1, len + 1);
}

subset(0, 0);
console.log("총 경우의 수:", totalCnt);