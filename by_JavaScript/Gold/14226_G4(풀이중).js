const fs = require('fs'); //'fs' 객체 가져오기

const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';

//input 한 번에 입력 받기
const S = Number(fs.readFileSync(filePath).toString().trim());

/*
  화면에 이모티콘 1개 입력한 상태. 아래의 3가지 연산만 사용해서 이모티콘 S개 만들거임
  1. 화면에 있는 이모티콘 모두 복사해서 클립보드에 저장
  2. 클립보드에 있는 모든 이모티콘을 화면에 붙여넣기
  3. 화면에 있는 이모티콘 중 하나 삭제
  --> 모든 연산은 1초가 걸림, 클립보드에 이모티콘 복사하면 이전에 클립보드에 있던 내용은 덮어쓰기
  --> 클립보드 비어있으면 붙여넣기 할 수 X, 일부만 클립보드에 복사 X, 클립보드에 있는 임티 중 일부 삭제 X
  --> 화면에 임티 붙여넣기 하면, 클립보드에 있는 임티 개수가 화면에 추가됨

  --> 영선이가 S개의 이모티콘을 화면에 만드는 데 걸리는 시간의 최솟값 구하기. (2 <= S <= 1000)
*/

/*
  초마다 우리는 3가지의 연산 중 하나를 수행함 (클립보드가 비어있을 경우엔 2번 불가)
  --> 층마다 "퍼져나가는" 모든 상황을 탐색해서 S개의 이모티콘을 화면에 만드는 데 걸리는 시간의 최솟값 구해야 함
  --> 가중치가 없고.. 1씩 내려감.. 어...? 이거 상태 공간 탐색하는 BFS 문제임!
  (BFS는 Queue로 해결하면 된다~)
  --> 상태는 직접 만들어 내려가면서 모두 탐색해 봐야 한다(입력으로 주어진 거 따로 없잖아..)
*/

//Queue 직접 구현
class Queue {
  constructor() {
    this.head = 0;
    this.tail = 0;
    this.items = [];
  }

  push(item) {
    this.items.push(item);
    this.head++;
  }

  pop() {
    return this.items[this.tail++];
  }

  isEmpty() {
    return this.head === this.tail;
  }
}

let queue = new Queue();
/*
  우선 queue에 초기 상태를 넣고 시작한다
  [현재 화면에 표시된 이모티콘 개수, 현재 클립보드에 있는 이모티콘 개수]
*/
queue.push([1, 0]); 
let time = 0;

function BFS() {
  //Queue가 빌 때까지 수행한다
  while(true) {
    let value = queue.pop() //queue에 있는 거 하나 뺀다

    //1번 연산 --> value[0]를 value[1]에 넣어야 한다
    let value_Of_1 = [...value];
    value_Of_1[1] = value_Of_1[0];
    if(value_Of_1[0] === S) { //1번 연산의 결과로 화면에 S개가 있으면
      break;
    }

    //2번 연산 --> value[1] !== 0이면 value[0] += value[1] 해야 한다
    let value_Of_2 = [...value];
    if(value_Of_2[1] !== 0) {
      value_Of_2[0] += value_Of_2[1];
    }
    if(value_Of_2[0] === S) { //2번 연산의 결과로 화면에 S개가 있으면
      break;
    }
    
    //3번 연산 --> 꺼낸 값[0]--
    let value_Of_3 = [...value];
    if(value_Of_3 > 0) value_Of_3[0]--; //0보다 클 때만 줄여야지..
    if(value_Of_3[0] === S) {//2번 연산의 결과로 화면에 S개가 있으면
      break;
    }

    //1~3번 연산을 했는 데에도 여기까지 왔다면.. 아직 못찾은 것
    queue.push(value_Of_1);
    queue.push(value_Of_2);
    queue.push(value_Of_3);
    
  }
}

