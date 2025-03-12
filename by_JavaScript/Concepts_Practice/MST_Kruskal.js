/**
 * 신장트리 
 *  - n개의 정점으로 이루어진 무향 그래프에서 n개의 정점과 n-1개의 간선으로 이루어진 트리 
 *  -> 완탐 관점 eCn-1		  20C10	: 18만    30C15 : 1억 5천만
 *     n=100일때 최대 간선 n(n-1)/2    5000C99    5000!/4901!99!  ---> 연산.. 실질적으로 불가능
 *  - 그리디를 응용한 알고리즘 (완전 탐색 X)
 */

/*
 * 크루스칼 알고리즘
 * 
 * - 간선(Edge)의 비용을 이용해서 오름 차순으로 정렬한다. 
 * - 비용이 적은 간선 부터 V-1개의 간선을 선택해 신장트리를 만든다. 
 *   간선을 선택할 때 cycle이 생기지 않는지 check해서 
 *   cycle이 생기지 않는 간선인 경우 선택하고 해당 비용을 누적한다. 
 *   => Disjoint가 다 하는 것임..
 *    => edge들을 연결하기 위해 union()할 때, union()이 false가 나오면.. 같은 집합인 거임
 *    => 이를 통해, cycle이 생기는 것을 방지할 수 있음!
 *                          
 * 
 * 시간 복잡도 (간선(Edge)이 적으면.. Kruskal / 간선이 많으면.. Prim)
 * 1. makeSet()	=> 시간 복잡도   O(v)
 * 2. Edge정렬 	=> 시간 복잡도   O(ElogE)
 * 3. union(-> Path 압축 했다고 가정)	=> 시간 복잡도  O(V+ 2*union(E,E)) => O(E)  
 * 
 * O(v+ElogE+E)  => O(ElogE)
 * 
 */

//간선 정보를 저장하는 class Edge
class Edge {
  constructor(from, to, weight) {
    this.from = from;
    this.to = to;
    this.weight = weight;
  }
}

//서로소 집합(Disjoint Set) 클래스 정의
class DisjointSet {
  //생성자
  constructor(size) {
    this.parents = new Array(size);
    this.make();
  }

  //Set 하나 생성 (-> 우선 자기 부모를 자기 자신으로 모두 초기화)
  make() {
    for(let i = 0; i < this.parents.length; i++) {
      this.parents[i] = i;
    }
  }

  //v의 root 찾기
  find(v) {
    if(this.parents[i] === v) return v;
    return this.parents[v] = this.find(this.parents[v]);
  }

  //a와 b에 대해 합치기 (a가 들어있는 집합과 b가 들어가 있는 집합 합치기)
  union(a, b) {
    let aRoot = this.find(a);
    let bRoot = this.find(b);

    //aRoot와 bRoot가 같다면.. 같은 집합인 거임 -> 합치면 X
    if(aRoot === bRoot) return false;

    //반대의 경우로도 ok
    this.parents[aRoot] = bRoot;
    return true;
  }
}

