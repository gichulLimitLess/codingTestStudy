const fs = require('fs'); //'fs' 객체 가져오기
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';
//input 한 번에 읽어오기
const input = fs.readFileSync(filePath).toString().split('\n');
//백준에서 문제 풀이 시, 위의 fs.readFileSync(filePath), 이런 식으로 했을 때 오류 날 경우, 아래와 같은 형태로 시도
//const input = fs.readFileSync(0, 'utf-8').toString().split('\n');

//서로소 집합 사용을 위한 DisjointSet
class DisjointSet {
  //생성자
  constructor(size) {
    this.parents = new Array(size+1);
    this.make();
  }

  //서로소 집합 초기화 (우선은 부모를 자기 자신으로 초기화)
  make() {
    for(let i = 0; i < this.parents.length; i++) {
      this.parents[i] = i;
    }
  }

  //자기 부모 찾으러 가기
  find(v) {
    if(this.parents[v] === v) return v;

    //Path Compression 적용
    return this.parents[v] = this.find(this.parents[v]);
  }

  //서로소 집합 만들기
  union(a, b) {
    const aRoot = this.find(a);
    const bRoot = this.find(b);

    //루트가 같다면, 같은 집합임 --> union 하면 안됨
    if(aRoot === bRoot) return false;

    //둘이 합친다 (aRoot의 root를 b로 만든다..)
    this.parents[aRoot] = bRoot;
    
    return true;
  }
}

//초기에.. n+1개의 집합, m은 입력으로 주어지는 연산의 갯수
let [n, m] = input[0].split(' ').map(Number);
let answer_list = [];

//서로소 집합 객체 만들기
let ds = new DisjointSet(n);

//돌아가면서 각 상황에 맞는 연산 수행
for(let i = 0; i < m; i++) {
  let calc = input[i+1].split(' ').map(Number);

  if(calc[0] === 0) { //union 해야 하는 상황이면
    ds.union(calc[1], calc[2]);
  } else if(calc[0] === 1) { //두 개가 같은 집합에 포함되는지 확인해야 하는 상황이라면
    if(ds.find(calc[1]) === ds.find(calc[2])) answer_list.push('YES');
    else answer_list.push('NO');
  }
}

//결과 출력
console.log(answer_list.join('\n'));