//Stack은 array에 push(), pop() 하는 것만으로도 충분히 구현 가능
let stack = [];
stack.push(7); //배열의 맨 뒤에 넣기
stack.push(9); //배열의 맨 뒤에 넣기
console.log(stack.pop()); //배열의 맨 마지막 꺼 빼기(9 나올 거임)

//Queue는 구현해야 함 (그리 어렵지 않음)
class Queue {
  //생성자
  constructor() {
    this.items = [];
    this.front = 0;
    this.rear = 0;
  }

  //아이템 삽입(뒤에 넣어야 함)
  push(item) {
    this.items.push(item);
    this.rear++;
  } 

  //아이템 뻬기(앞에 있는 걸 빼야 함)
  pop() {
    return this.items[this.front++];
  }
  
  //비어있는 지 확인
  isEmpty() {
    return this.front === this.rear;
  }

  //큐 사이즈 반환
  size() {
    return this.rear - this.front;
  }
}

//Queue 사용 예제
let queue = new Queue();
queue.push(7);
queue.push(13);
queue.push(23);
console.log(queue.pop()); //queue에서는 배열의 맨 앞에꺼를 뺀다 (7 나올 거임)