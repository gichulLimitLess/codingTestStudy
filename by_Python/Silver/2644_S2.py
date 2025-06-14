'''
  촌수계산
  --> 인접 리스트을 활용해 찾아가야 한다 (DFS 써볼게..)
  --> 각 사람의 부모는 최대 한 명만 주어짐
  --> 해당 문제에서는 DFS/BFS.. 뭐로 풀어도 상관 없지만.. "최단 경로"에 관한 문제를 풀 때에는 BFS가 훨씬 좋은 선택지!
'''

import sys


input = sys.stdin.readline

sys.setrecursionlimit(100000) # DFS 쓸거임, 재귀함수 호출을 위해 재귀 횟수 제한 풀기

n = int(input().strip())
adj_matrix = [[False for _ in range(n+1)] for _ in range(n+1)]
a, b = map(int, input().strip().split(' '))
visited = [False for _ in range(n+1)]
m = int(input().strip())
for _ in range(m): # adj_list에 입력 받기
  x, y = map(int, input().split(' ')) # x가 y의 부모라는 뜻
  adj_matrix[y][x] = True
  adj_matrix[x][y] = True

def DFS(now, target, count):
  visited[now] = True # 중복 탐색 방지
  if now == target: # 기저 조건..
    return count

  for j in range(n+1): # 탐색 (없으면, -1을 반환할 것임)
    if adj_matrix[now][j] == True and visited[j] == False:
      res = DFS(j, target, count + 1)
      if res != -1:
        return res
  
  return -1


# 인접 행렬을 탐색하며 DFS 수행한다
result = DFS(a, b, 0)

if result == 0:
  print(-1)
else:
  print(result)
