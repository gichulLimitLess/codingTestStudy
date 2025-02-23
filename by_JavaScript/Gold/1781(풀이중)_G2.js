const fs = require('fs'); //'fs' 객체 가져오기

const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';

//input을 한 번에 입력 받기
const input = fs.readFileSync(filePath).toString().trim().split('\n');

/*
  컵라면의 최대 개수는 21억, 
  배열을 이용해서 Priority Queue 구현하면 시간 초과 발생할 듯?
  Heap을 이용한 구현을 사용해야 할 듯 하다.
*/

class PriorityQueue {
  //배열을 사용해서 직접 정렬하는 방식 사용할 것임
  constructor() {
    this.heap = [];
  }

  //해당 priority queue의 size 반환
  size() {  
    return this.heap.size();
  }

  // 요소 추가
  push(node) {
    this.heap.push(node);
    this.bubbleUp();
  }

  //최상위 요소 제거(우선순위가 가장 높은 요소)
  pop() {
    if(this.heap.length === 0) return null;
    if(this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return min;
  }

  //최소값 반환(삭제 X)
  peek() {
    return this.heap.length > 0 ? this.heap[0] : null;
  }

  //부모보다 작은 경우 위로 이동
  bubbleUp() {
    let index = this.heap.length - 1;
    const node = this.heap[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex].score <= node.score) break;
      this.heap[index] = this.heap[parentIndex];
      index = parentIndex;
    }

    this.heap[index] = node;
  }

  // 자식보다 큰 경우 아래로 이동
  bubbleDown() {
    let index = 0;
    const length = this.heap.length;
    const node = this.heap[index];

    while (true) {
      let leftChildIdx = 2 * index + 1;
      let rightChildIdx = 2 * index + 2;
      let swap = null;

      if (leftChildIdx < length) {
        if (this.heap[leftChildIdx].score < node.score) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        if (
          (swap === null && this.heap[rightChildIdx].score < node.score) ||
          (swap !== null && this.heap[rightChildIdx].score < this.heap[leftChildIdx].score)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;
      this.heap[index] = this.heap[swap];
      index = swap;
    }

    this.heap[index] = node;
  }
}

/*
  문제를 푸는데는 단위 시간 1이 걸리며, 각 문제의 데드라인은 N 이하의 자연수
  각 문제를 풀 때 받을 수 있는 컵라면 수 / 최대로 받을 수 있는 컵라면 수 -> 2^31보다 작은 자연수
*/

//입력 받기

/*
  문제의 데드라인을 짧은 순서대로 오름차순 정렬
  점수 Priority Queue를 사용하는 이유: 데드라인은 좀 느리지만 점수가 높으면 어떤 것을 하는게 더 좋은지 비교해야 하니깐?


*/

//문제의 데드라인[0]과 컵라면 수[1]가 저장되어 있는 problems_list
let problems_list = new PriorityQueue();
for(let i = 0; i < N; i++) {
  problems_list[i].push(input[i+1]);
}