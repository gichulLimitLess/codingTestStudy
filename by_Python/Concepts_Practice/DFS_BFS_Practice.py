'''
  DFS, BFS 풀기 위한 템플릿
'''

# 우선, 인접 리스트 (인접 행렬 사용하는 방법도 있겠지...) 만든다
n, m = map(int, input().split()) #노드 수, 간선 수 입력 받기
graph = [[] for _ in range(n+1)]
for _ in range(m):
  u, v = map(int, input().split()) #u, v는 간선에 연결된 노드
  # 무방향 그래프일 경우 아래와 같이 한다
  graph[u].append(v)
  graph[v].append(u) 

# DFS (stack 사용 - 반복문 방식)
def dfs_iterative(start, graph):
  visited = [False] * (len(graph))
  stack = [start]

  while stack:
    node = stack.pop()
    if not visited[node]: #방문하지 않았다면
      visited[node] = True
      print(node, end = ' ') #방문 순서 출력
      #stack에는 역순으로 넣어야 정방향으로 탐색됨 (탐색 순서를 왼쪽 -> 오른쪽으로 유지하기 위함)
      for neighbor in sorted(graph[node], reverse=True):
        if not visited[neighbor]:
          stack.append(neighbor)

# DFS (재귀 방식)
def dfs_recursive(node, graph, visited):
  visited[node] = True
  print(node, end=' ')

  # 여기에서는, 왼쪽으로 인접한 노드부터 재귀호출의 매개변수로 집어 넣고, visited 처리 하므로 그냥 순서대로 넣으면 됨
  for neighbor in sorted(graph[node]):
    if not visited[neighbor]:
      dfs_recursive(neighbor, graph, visited)

#BFS (Queue 사용 - collections.deque 사용 권장)
from collections import deque

def bfs(start, graph):
  visited = [False] * (len(graph)) 
  queue = deque([start])
  visited[start] = True

  while queue:
    node = queue.popleft()
    print(node, end=' ')
    for neighbor in sorted(graph[node]): #인접 리스트에서, queue에서 꺼낸 노드와 이어진 애들 확인
      if not visited[neighbor]: # 이어진 애를 확인했을 때, 방문 안 한 친구라면..
        visited[neighbor] = True
        queue.append(neighbor)
