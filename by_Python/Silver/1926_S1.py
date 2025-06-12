'''
  그림
  --> 그림의 넓이 중 가장 넓은 것의 넓이를 구해라.. / 그림이라는 것은 1로 연결된 것을 한 그림이라 하자
  --> 대각선으로 연결된 것은 연결된 것이 X
  --> BFS 쓰면.. O(N)으로 처리됨, 500 * 500 ==> 해봐야 O(25000), 이대로 레츠 고도리~ 해도 됨!
'''

import sys
from collections import deque # Queue를 사용하기 위한 import

input = sys.stdin.readline

n, m = map(int, input().strip().split(' '))
board = []

# 도화지 정보 입력 받기
for _ in range(n):
  row = list(map(int, input().strip().split(' ')))
  board.append(row)

q = deque() # Queue 초기화
pic_size = 0 # 그림 크기 측정할 변수
pic_cnt = 0 # 그림 갯수 측정할 변수
max_size = 0 # 최대 크기 저장할 변수
dy = [-1, 1, 0, 0]
dx = [0, 0, -1, 1]

# 도화지 탐색
for i in range(n):
  for j in range(m):
    if board[i][j] == 1:
      pic_cnt += 1
      q = deque()
      q.append((i, j))
      board[i][j] = 0  # 방문 처리
      size = 1  # 시작 점 포함

      while q:
        y, x = q.popleft()
        for k in range(4):
          ny = y + dy[k]
          nx = x + dx[k]
          if 0 <= ny < n and 0 <= nx < m and board[ny][nx] == 1:
            board[ny][nx] = 0
            q.append((ny, nx))
            size += 1

      max_size = max(max_size, size)

print(pic_cnt) # 그림의 갯수 출력
print(max_size) # 그림들 중 가장 넓은 그림의 넓이 출력