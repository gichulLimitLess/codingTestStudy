/*
  학생이 N명 / 학생 i에게 Ai만큼의 돈을 주면 그 학생은 1달간 친구가 되어줌
    --> 총 k원의 돈이 있음 / "친구의 친구는 친구다"를 이용하기로 함
    --> 위의 논리를 이용했을 때, 가장 적은 비용으로 모든 사람과 친구가 되는 방법
  입력: 학생 수 N(1<=N<=10,000) / 친구 관계 수 M(0<=M<=10,000) / 가지고 있는 돈 k(1<=k<=10,000,000)
       각각의 학생이 원하는 친구비 Ai (1 <= Ai <= 10,000, 1 <= i <= N)
       M개의 줄에 걸쳐 v, w (v - w는 서로 친구라는 뜻 / 자기 자신과도 친구일 수 있음, 같은 친구 관계가 여러번 주어질 수도 있음)
    --> 친구의 친구는 친구다 (=== 같은 그룹에 있는 문제는 모두 친구다)
        => 서로소 집합(DisjointSet) 문제임!
*/
const fs = require('fs'); //'fs' 객체 가져오기
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');


//서로소 집합(Disjoint Set) 클래스 정의
class DisjointSet {
  //생성자
  constructor(size) {
    this.parents = new Array(size);
    this.make();
  }

  //모든 원소를 자신을 부모로 설정하며 초기화
  make() {
    for(let i = 0; i < this.parents.length; i++) {
      this.parents[i] = i;
    }
  }

  //v에 대한 부모(root) 찾기 --> 어떻게 보면.. 같은 집합인지 아닌지 판명하는 거임
  find(v) {
    if(this.parents[v] === v) return v; //부모가 자기 자신이면.. 자기 자신 return
    return this.parents[v] = this.find(this.parents[v]); //아니라면 재귀 호출(경로 압축을 위해)
  }

  //두 집합을 union(합치기)
  union(a, b) {
    const aRoot = this.find(a);
    const bRoot = this.find(b);

    if(aRoot === bRoot) return false; //root가 같다면, 합칠 수 없음(false)

    //aRoot의 부모를 bRoot로 설정한다
    this.parents[aRoot] = bRoot;

    return true; //합쳤으니.. true;
  }
}

//입력 우선 받기
let [N, M, k] = input[0].split(' ').map(Number);
let friend_cost = input[1].split(' ').map(Number);

//각 그룹에서 최소 친구비를 선택해야 함

//서로소집합을 써야 한다
let ds = new DisjointSet(N+1); //맨 앞에 0은 그냥.. 비워둘거임, 학생 번호로 바로 그냥 ds 인덱스 접근하기 편하려고..!!
let min_cost = new Array(N+1).fill(Infinity); //각 그룹의 최소 친구비 저장

//친구 관계를 입력 받으면서 친구 관계를 처리한다(union 수행)
//==> 여기에서, 친구 관계를 처리하면서 자동으로 그룹이 형성된다
for(let i = 0; i < M; i++) {
  let [v, w] = input[i+2].split(' ').map(Number);
  ds.union(v, w);
}

//각 그룹에서 최소 친구비를 찾기
//현재 그룹의 최솟값으로 지정되어 있는거랑.. friend_cost[i-1]의 값 중에서 작은 놈으로 넣는다
//root를 제외한 나머지 값들은.. min_cost에서 INFINITY로 남아있을 것이다
//--> min_cost[root]의 값만 바꾸니까.. 그룹의 짱을 빼고는, 값을 안 건드린다
for(let i = 1; i <= N; i++) {
  let root = ds.find(i); //i라는 학생 그룹의 짱(?)을 찾는다
  min_cost[root] = Math.min(min_cost[root], friend_cost[i-1]); //그룹별 최소 친구비 갱신
}

//총 친구비 계산할 것이다
let totalCost = 0;

//최소 비용 합산 (각 그룹별로 짱(?)에 대해서만 친구비가 저장되어 있을거임)
for(let i = 1; i <= N; i++) {
  //root에 해당하는 학생의 친구비만 계산
  if(min_cost[i] !== Infinity) {
    totalCost += min_cost[i]; //그룹별 최소 비용만 합산
  }
}

//내가 가진 돈보다 총 비용이 비싸면
if(totalCost > k) {
  console.log("Oh no")
} else { //모든 친구 사귈 수 있으면..
  console.log(totalCost);
}