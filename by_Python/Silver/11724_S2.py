'''
  방향 없는 그래프가 주어졌을 때, 연결 요소(Connected Component)의 갯수 구하기
  -> 정점의 갯수 N / 간선의 갯수 M (1 <= N <= 1000, 0 <= M <= N(N-1)/2)
'''

import sys
from collections import deque

input = sys.stdin.readline

[N, M] = map(int, input().strip().split(' '))
adj_list = [[] for _ in range(N+1)]
visited = [False for _ in range(N+1)]
visited[0] = True
component_cnt = 0

# 간선의 갯수가 M개, M번에 걸쳐 입력 받기 (인접 리스트 만들기)
for _ in range(M):
  [u, v] = map(int, input().strip().split(' '))
  adj_list[u].append(v)
  adj_list[v].append(u)

# 가중치 없는 탐색.. BFS?
def BFS(n):
  queue = deque()
  queue.append(n) 
  visited[n] = True # 시작한 애는 방문 했다고 표시

  while queue:
    node = queue.popleft() # queue의 맨 앞에 거를 빼기
    for element in adj_list[node]:
      if visited[element] == False:
        queue.append(element)
        visited[element] = True # queue에 넣은 애는 탐방을 한 거니깐..
  
  return 1

# 모두 방문해서 component 개수를 세야 한다
while False in visited:
  first_idx = visited.index(False)
  component_cnt += BFS(first_idx)

print(component_cnt)