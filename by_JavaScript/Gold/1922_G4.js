/*
  모든 컴퓨터가 연결이 되어 있어야 함 (a->b, b->c이면.. a->c)
  이왕이면.. 컴퓨터 연결하는 비용 최소로 해야 함.. 
    => 모든 컴퓨터를 연결하는 데 필요한 최소 비용..? (모든 컴퓨터를 연결할 수 없는 경우는 X)
  
  입력: 컴퓨터의 수 N (1<=N<=1000)
       연결할 수 있는 선의 수 (1<=M<=100,000)
       [a, b, c] (a 컴퓨터와 b 컴퓨터를 연결하는 데 비용이 c(1<=c<=10,000)만큼 든다!)
  
  => 프림이 조금 더 빠르긴 하지만.. Kruskal로도 충분히 풀이할 수 있음
  => MST 사용하자.... Kruskal 레츠고
*/
const fs = require('fs'); //'fs' 객체 가져오기
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

//Edge 관련 class 선언
class Edge {
  constructor(from, to, weight) {
    this.from = from;
    this.to = to;
    this.weight = weight;
  }

  //weight를 기준으로 오름차순 정렬
  static incremental_sort(edges) {
    return edges.sort((a, b) => a.weight - b.weight);
  }
}

//서로소 집합 관련 class 선언
class DisjointSet {
  constructor(size) {
    this.parents = new Array(size);
    this.make();
  }

  //우선 맨 처음엔, 자기 부모를 자기 자신으로 설정
  make() {
    for(let i = 0; i < this.parents.length; i++) {
      this.parents[i] = i;
    }
  }

  find(v) {
    if(this.parents[v] === v) return v;
    return this.parents[v] = this.find(this.parents[v]);
  }

  //a가 포함되어 있는 집합과, b가 포함되어 있는 집합 union
  union(a, b) {
    let aRoot = this.find(a);
    let bRoot = this.find(b);

    //두 루트가 같다면, 같은 것이 아님
    if(aRoot === bRoot) return false;
    
    this.parents[aRoot] = bRoot;
    return true;
  }
}

//입력 받기
let N = Number(input[0]); //컴퓨터의 수(==노드의 수)
let M = Number(input[1]); //연결하는 선의 수(==간선의 수)
let edge_list = [];

//Edge 정보 입력
for(let i = 0; i < M; i++){
  let [a, b, c] = input[i+2].split(' ').map(Number);
  edge_list.push(new Edge(a, b, c));
}

//edge_list를 weight를 기준으로 오름차순 정렬
let sortedEdges = Edge.incremental_sort(edge_list);
let disjointSet = new DisjointSet(N);

let result = 0;
let count = 0;

//edge의 리스트를 돌아 보면서 크루스칼 진행
for(let edge of sortedEdges) {
  //from, to, 두 노드를 연결할 수 있다면
  //union에서 false를 반환하는 경우는.. cycle이 생기는 경우!
  if(disjointSet.union(edge.from, edge.to)) {
    //비용 누적
    result += edge.weight;

    //연결 수를 늘리면서, 모두 연결했는지 확인할 필요도 있음
    //모두 연결했다면 break
    if(++count === N-1) {
      break;
    }
  }
}

//결과 출력
console.log(result);