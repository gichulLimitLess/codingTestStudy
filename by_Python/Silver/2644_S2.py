'''
  촌수계산
  --> 인접 리스트을 활용해 찾아가야 한다 (DFS 써볼게..)
'''

import sys


input = sys.stdin.readline

sys.setrecursionlimit(100000) # DFS 쓸거임, 재귀함수 호출을 위해 재귀 횟수 제한 풀기

n = int(input().strip())
adj_list = [[] for _ in range(n+1)]
visited = [False for _ in range(n+1)] # 방문 배열
a, b = map(int, input().strip().split(' '))
m = int(input().strip())
for _ in range(m): # adj_list에 입력 받기
  x, y = map(int, input().split(' ')) # x가 y의 부모라는 뜻
  adj_list[x].append(y)

dist = 0
def DFS(element):
  if visited[element] == True: # 이미 방문했으면
    return
  visited[element] = True # 방문 표시
  dist += 1


# 인접 리스트를 탐색하며 DFS 수행한다