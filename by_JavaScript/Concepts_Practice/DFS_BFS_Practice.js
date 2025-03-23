/*
  그래프 탐색을 위한 대표적인 방법 2가지: DFS, BFS
  DFS (-> Stack 혹은 재귀 사용)
  BFS (-> Queue 사용)
*/

/*
  [언제 사용해야 함?]
  가중치가 없는 최소 거리(비용) 문제는.. 아묻따 BFS!
  모든 경로 / 조합 탐색 -> DFS (깊이 우선으로 분기 탐색)
  백트래킹 문제 -> DFS (재귀적으로 조건 탐색)
  연결 요소 개수 세기 -> DFS (방문 배열로 구성요소 탐색)
*/

//스택을 이용한 DFS
function DFS_stack(graph, startNode) {
  let stack = [startNode]; //탐색할 노드를 담은 스택
  let visited = new Set(); //방문한 노드 저장

  while(stack.length > 0) {
    let current = stack.pop(); //스택에서 노드 꺼내기
    if(!visited.has(current)) {
      console.log(String.fromCharCode(current + 65)); //방문한 노드 출력
      visited.add(current);
    }

    //현재 노드와 연결된 노드를 역순으로 스택에 추가
    for(let adj = graph.length - 1; adj >= 0; adj--) {
      if(graph[current][adj] && !visited.has(adj)) {
        stack.push(adj);
      }
    }
  }
}

/*
  인접 행렬: 공간 복잡도는 O(N^2), edge 존재 여부는 O(1)에 확인 가능
  인접 리스트: 연결된 정점만 저장해서 메모리 효율 좋음(공간 복잡도가 O(N+M)), 
            edge 존재 여부는 연결 리스트를 순회해야 하므로 O(N) 걸릴 수 있음
*/

// 테스트용 인접 행렬 그래프
let graph = [
  [0, 1, 1, 1, 0, 0, 0],
  [1, 0, 0, 0, 1, 1, 0],
  [1, 0, 0, 1, 0, 0, 0],
  [1, 0, 1, 0, 0, 0, 1],
  [0, 1, 0, 0, 0, 1, 0],
  [0, 1, 0, 0, 1, 0, 0],
  [0, 0, 0, 1, 0, 0, 0]
];

// 실행
console.log("DFS (스택):");
DFS_stack(graph, 0);
console.log();


//재귀를 사용한 DFS
function DFS_recursive(graph, current, visited = new Set()) {
  //재귀 탈출 조건 -> 해당하는 놈 찾았으면 return;
  if(visited.has(current)) return;

  console.log(String.fromCharCode(current + 65)); //방문한 노드 출력
  visited.add(current);

  for(let adj = 0; adj < graph.length; adj++) {
    if(graph[current][adj] && !visited.has(adj)) {
      DFS_recursive(graph, adj, visited);
    }
  }
}

//Queue를 이용한 BFS
//우선 Queue 직접 구현 필요
class Queue {
  constructor() {
    this.head = 0;
    this.tail = 0;
    this.items = [];
  }

  //Queue에 밀어 넣기
  push(item) {
    this.items.push(item);
    this.tail++;
  } 

  //Queue는 맨 앞에 거를 빼야 한다(FIFO라서..)
  pop() {
    if (this.isEmpty()) return null; // 큐가 비었으면 null 반환
    return this.items[this.head++];
  }

  //Queue가 비어 있는지는 tail과 head가 같은지 확인하면 됨
  isEmpty() {
    return this.tail === this.head;
  }

  //Queue의 tail과 head를 뺐을 때의 값이 결국 size임
  size() {
    return this.tail - this.head;
  }
}

function BFS(graph, startNode) {
  let queue = new Queue(); // 수정된 Queue 클래스 사용
  let visited = new Set();
  
  queue.push(startNode);
  visited.add(startNode);

  while (!queue.isEmpty()) {
      let current = queue.pop(); // 큐에서 노드 꺼내기
      console.log(String.fromCharCode(current + 65)); // 방문한 노드 출력

      for (let adj = 0; adj < graph.length; adj++) {
          if (graph[current][adj] && !visited.has(adj)) {
              visited.add(adj);
              queue.push(adj);
          }
      }
  }
}

// 테스트용 그래프 (인접 행렬)
let graph2 = [
  [0, 1, 1, 1, 0, 0, 0],
  [1, 0, 0, 0, 1, 1, 0],
  [1, 0, 0, 1, 0, 0, 0],
  [1, 0, 1, 0, 0, 0, 1],
  [0, 1, 0, 0, 0, 1, 0],
  [0, 1, 0, 0, 1, 0, 0],
  [0, 0, 0, 1, 0, 0, 0]
];

// 실행
console.log("BFS:");
BFS(graph2, 0);